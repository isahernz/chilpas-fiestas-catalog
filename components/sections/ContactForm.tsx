"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { contactFormSchema, ContactFormSchema } from "@/app/schemas/contact-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cn } from "@/app/utils/cn";
import { toast } from "@pheralb/toast";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Error al enviar el mensaje");
      }

      // Toast de éxito
      toast.success({
        text: "¡Mensaje enviado exitosamente! Te contactaremos pronto. 🥳",
      });

      reset(); // Limpiar el formulario
    } catch (error) {
      console.error("Error enviando mensaje:", error);

      // Toast de error
      toast.error({
        text: error instanceof Error ? error.message : "Error al enviar el mensaje. Inténtalo de nuevo.",
      });
    }
  };

  return (
    <Card className="mx-auto max-w-2xl bg-white shadow-lg">
      <CardContent className="space-y-6 p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
          <div className="grid gap-y-4 md:grid-cols-2 md:gap-x-4">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-gray-700">
                Nombre
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Chilpas Fiestas"
                className={cn({
                  "border-red-500": errors.name,
                })}
                {...register("name")}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-3">
              <Label htmlFor="email" className="text-gray-700">
                Correo Electrónico
              </Label>
              <Input
                id="email"
                placeholder="tucorreo@email.com"
                type="email"
                className={cn({
                  "border-red-500": errors.email,
                })}
                {...register("email")}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
          </div>
          <div className="space-y-3">
            <Label htmlFor="message" className="text-gray-700">
              Mensaje
            </Label>
            <Textarea
              id="message"
              placeholder="Diganos lo que piensa"
              rows={5}
              className={cn({
                "border-red-500": errors.message,
              })}
              {...register("message")}
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
          </div>
          <Button
            type="submit"
            className="group w-full cursor-pointer rounded-xl bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 px-4 py-2 text-white shadow-lg hover:from-pink-600 hover:via-orange-500 hover:to-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting || Object.keys(errors).length > 0}
          >
            <Send className="mr-2 size-5 transition-transform group-hover:translate-x-1" />
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
