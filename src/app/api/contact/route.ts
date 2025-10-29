import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, mensaje } = body;

    // Validate required fields
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "El servicio de correo no está configurado. Por favor contacta al administrador." },
        { status: 503 }
      );
    }

    // Initialize Resend with the API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contacto Web <onboarding@resend.dev>", // Resend's test email
      to: ["rodrigobarba653@gmail.com"],
      replyTo: email,
      subject: `Nuevo mensaje de contacto - ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
            Nuevo Mensaje de Contacto
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${telefono ? `<p><strong>Teléfono:</strong> ${telefono}</p>` : ""}
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-left: 3px solid #000;">
            <p style="margin: 0;"><strong>Mensaje:</strong></p>
            <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${mensaje}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          
          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de lucilaaguilar.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Email enviado exitosamente", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
