import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre es obligatorio")
    .max(100, "El nombre es muy largo")
    .nonempty("El nombre es obligatorio"),
  email: z
    .string()
    .email("Introduce un correo válido")
    .nonempty("El correo es obligatorio")
    .lowercase("El correo debe estar en minúsculas"),
  message: z
    .string()
    .min(10, "El mensaje es muy corto")
    .max(1000, "El mensaje es muy largo")
    .nonempty("El mensaje es obligatorio"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
