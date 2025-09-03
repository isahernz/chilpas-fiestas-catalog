interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #ec4899, #f97316, #06b6d4)",
          padding: "30px 20px",
          textAlign: "center",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <h1 style={{ color: "white", margin: 0, fontSize: "24px", fontWeight: "bold" }}>Chilpas Fiestas</h1>
        <p style={{ color: "white", margin: "10px 0 0 0", opacity: 0.9 }}>Nuevo mensaje de contacto</p>
      </div>

      {/* Content */}
      <div style={{ backgroundColor: "#f9f9f9", padding: "30px 20px" }}>
        {/* Contact Info */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#333", margin: "0 0 20px 0", fontSize: "18px" }}>Información del contacto</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <strong style={{ color: "#f97316", minWidth: "60px" }}>Nombre:</strong>
              <span style={{ color: "#333" }}>{name}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <strong style={{ color: "#f97316", minWidth: "60px" }}>Email:</strong>
              <a href={`mailto:${email}`} style={{ color: "#06b6d4", textDecoration: "none" }}>
                {email}
              </a>
            </div>
          </div>
        </div>

        {/* Message */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            borderLeft: "4px solid #f97316",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#333", margin: "0 0 15px 0", fontSize: "16px" }}>Mensaje:</h3>
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "15px",
              borderRadius: "6px",
              lineHeight: "1.6",
              color: "#555",
              fontStyle: "italic",
            }}
          >
            &quot;{message}&quot;
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <a
            href={`mailto:${email}?subject=Re: Tu mensaje en Chilpas Fiestas`}
            style={{
              display: "inline-block",
              backgroundColor: "#f97316",
              color: "white",
              padding: "12px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 2px 4px rgba(249,115,22,0.3)",
            }}
          >
            Responder a {name}
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#333",
          color: "#999",
          padding: "20px",
          textAlign: "center",
          fontSize: "12px",
          borderRadius: "0 0 8px 8px",
        }}
      >
        <p style={{ margin: 0 }}>
          Este mensaje fue enviado desde el formulario de contacto de
          <strong style={{ color: "#f97316" }}> Chilpas Fiestas</strong>
        </p>
        <p style={{ margin: "10px 0 0 0" }}>🎉 Hacemos que tus celebraciones sean inolvidables</p>
      </div>
    </div>
  );
}

// Función helper para generar el HTML del template
export function generateContactEmailHTML({ name, email, message }: EmailTemplateProps): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #ec4899, #f97316, #06b6d4); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
          Chilpas Fiestas
        </h1>
        <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">
          Nuevo mensaje de contacto
        </p>
      </div>

      <!-- Content -->
      <div style="background-color: #f9f9f9; padding: 30px 20px;">
        <!-- Contact Info -->
        <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin: 0 0 20px 0; font-size: 18px;">
            Información del contacto
          </h2>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div>
              <strong style="color: #f97316;">Nombre:</strong>
              <span style="color: #333; margin-left: 10px;">${name}</span>
            </div>
            <div>
              <strong style="color: #f97316;">Email:</strong>
              <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none; margin-left: 10px;">
                ${email}
              </a>
            </div>
          </div>
        </div>

        <!-- Message -->
        <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="color: #333; margin: 0 0 15px 0; font-size: 16px;">
            Mensaje:
          </h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; line-height: 1.6; color: #555; font-style: italic;">
            "${message}"
          </div>
        </div>

        <!-- CTA Button -->
        <div style="text-align: center; margin-top: 30px;">
          <a
            href="mailto:${email}?subject=Re: Tu mensaje en Chilpas Fiestas"
            style="display: inline-block; background-color: #f97316; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 2px 4px rgba(249,115,22,0.3);"
          >
            Responder a ${name}
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background-color: #333; color: #999; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px;">
        <p style="margin: 0;">
          Este mensaje fue enviado desde el formulario de contacto de
          <strong style="color: #f97316;"> Chilpas Fiestas</strong>
        </p>
        <p style="margin: 10px 0 0 0;">
          🎉 Hacemos que tus celebraciones sean inolvidables
        </p>
      </div>
    </div>
  `;
}
