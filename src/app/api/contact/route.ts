import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("❌ Missing RESEND_API_KEY in environment variables");
      return NextResponse.json(
        { error: "Server misconfigured. API key missing." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // ✅ keep this for testing until domain verified
        to: "buabengkelly@gmail.com",
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Resend API error:", errorText);
      return NextResponse.json(
        { error: "Failed to send email", details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("✅ Email sent successfully:", data);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Error in /api/contact:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
