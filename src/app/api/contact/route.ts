// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Parse JSON body instead of formData
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // required for free/test mode
      to: "buabengkelly@gmail.com",  // only works with your own Gmail in test mode
      subject: `New Contact Request from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error("Resend API error:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Failed to send email" },
      { status: 500 }
    );
  }
}
