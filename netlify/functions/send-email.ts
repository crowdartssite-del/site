import type { Context } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: Request, _context: Context) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { name, email, company, message, subject } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Crowd Arts Website <onboarding@resend.dev>",
      to: ["hello@crowdartspr.com"],
      replyTo: email,
      subject: subject || `New inquiry from ${name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #080808; color: #ffffff; padding: 40px; border: 1px solid rgba(255,255,255,0.1);">
          <div style="border-bottom: 2px solid #FF2D2D; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #FF2D2D; font-size: 24px; margin: 0;">New Inquiry — Crowd Arts PR</h1>
          </div>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 2px; vertical-align: top; width: 120px;">Name</td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 16px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 2px; vertical-align: top;">Email</td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 16px;"><a href="mailto:${email}" style="color: #FF2D2D;">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 12px 0; color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 2px; vertical-align: top;">Company</td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 16px;">${company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 12px 0; color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 2px; vertical-align: top;">Subject</td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 16px;">${subject || "General Inquiry"}</td>
            </tr>
          </table>
          
          <div style="margin-top: 24px; padding: 24px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.02);">
            <p style="color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 12px 0;">Message</p>
            <p style="color: #ffffff; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.3); font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
            Sent from crowdartspr.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    return new Response(JSON.stringify({ success: true, id: data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err: any) {
    console.error("Function error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
};
