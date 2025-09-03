import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/app/schemas/contact-form.schema";
import { generateContactEmailHTML } from "@/app/lib/email-templates/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar los datos con el schema
    const validatedData = contactFormSchema.parse(body);
    const { name, email, message } = validatedData;

    // Enviar el correo
    const { data, error } = await resend.emails.send({
      from: "Chilpas Fiestas <contacto@chilpasfiestas.com>", // Dominio por defecto de Resend (solo para desarrollo)
      to: ["contacto@chilpasfiestas.com"], // Tu correo donde quieres recibir jes
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: generateContactEmailHTML({ name, email, message }),
      // También enviamos una versión de texto plano
      text: `
        Nuevo mensaje de contacto

        Nombre: ${name}
        Correo electrónico: ${email}

        Mensaje:
        ${message}

        ---
        Este mensaje fue enviado desde el formulario de contacto de Chilpas Fiestas
      `,
      // Opcional: enviar copia al remitente
      replyTo: email,
    });

    if (error) {
      console.error("Error enviando correo:", error);
      return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 });
    }

    return NextResponse.json({ message: "Correo enviado exitosamente", data }, { status: 200 });
  } catch (error) {
    console.error("Error en la API de contacto:", error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
