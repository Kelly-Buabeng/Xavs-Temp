export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>", // Safe default
        to: ["buabengkelly@gmail.com"], // Your target inbox
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Resend API error:", errorText);
      return new Response("Failed to send email", { status: 500 });
    }

    return new Response("Email sent successfully", { status: 200 });
  } catch (err) {
    console.error("API route error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
