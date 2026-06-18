import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  description: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name?.trim() || !body.email?.trim() || !body.description?.trim()) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (body.description.trim().length < 50) {
      return NextResponse.json(
        { error: "Project description must be at least 50 characters." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ?? "NexOra <onboarding@resend.dev>";

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        {
          error:
            "Contact form is not configured yet. Please email us directly.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: body.email,
      subject: `New project inquiry — ${body.name}`,
      text: [
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        `Company: ${body.company?.trim() || "Not provided"}`,
        `Project type: ${body.projectType}`,
        "",
        "Project description:",
        body.description,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send your message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 }
    );
  }
}
