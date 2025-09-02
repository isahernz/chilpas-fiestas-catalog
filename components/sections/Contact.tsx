import { Badge } from "@/components/ui/badge";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="celebraciones"
      className="w-full space-y-6 rounded-3xl border border-white/20 bg-gradient-to-br from-pink-100/70 via-orange-50/50 to-cyan-100/60 px-4 py-10 shadow-lg lg:p-16"
    >
      <div className="space-y-4 text-center">
        <Badge variant="landing">¡Contactanos! 📞</Badge>
        <h2 className="text-center text-3xl font-bold text-gray-900 lg:text-5xl">
          Envíenos un{" "}
          <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
            mensaje
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-center text-lg text-pretty text-gray-600">
          ¿Tienes alguna pregunta o necesitas más información? No dudes en enviarnos un mensaje. Estamos aquí para
          ayudarte
        </p>
      </div>

      <ContactForm />
    </section>
  );
}
