import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <Card className="mx-auto max-w-2xl border-0 bg-white shadow-lg">
      <CardContent className="space-y-6 p-4">
        <form className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              type="text"
              placeholder="Nombre completo"
              className="h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            />
            <Input
              placeholder="Correo electrónico"
              type="email"
              className="h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              placeholder="Teléfono"
              type="tel"
              inputMode="tel"
              className="h-12 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          <Textarea
            placeholder="Diganos lo que piensa"
            rows={5}
            className="rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500"
          />
          <Button className="group w-full rounded-xl bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 px-4 py-2 text-white shadow-lg hover:from-pink-600 hover:via-orange-500 hover:to-cyan-500">
            <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            Enviar Mensaje
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
