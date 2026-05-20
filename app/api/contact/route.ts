import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: "Campi mancanti" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: "davide.secci26@gmail.com",
        subject: `[Portfolio] Nuovo messaggio da ${name}`,
        text: `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
        html: `
            <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px">
                <h2 style="color:#4F46FF;margin-bottom:16px">Nuovo messaggio dal portfolio</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
                <p style="white-space:pre-wrap">${message}</p>
            </div>
        `,
    });

    if (error) {
        return NextResponse.json({ error: "Errore invio email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
}
