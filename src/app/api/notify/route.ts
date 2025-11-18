import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

// Helper to send data to Slack
async function sendToSlack(payload: any) {
  if (!slackWebhookUrl) return;

  try {
    await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error('Slack Notification Failed:', error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // --- 1. Prepare Email Data ---
    // (We use your personal email for testing mode, change to 'hello@glimvia.app' when verified)
    const fromEmail = 'Glimvia Bot <onboarding@resend.dev>';
    const toEmail = ['YOUR_PERSONAL_EMAIL@gmail.com']; // REPLACE WITH YOUR RESEND LOGIN EMAIL

    let subject = '';
    let htmlContent = '';
    let slackPayload = {};

    // --- 2. Handle SUPPORT TICKETS ---
    if (body.ticketId) {
      const { 
        ticketId, title, category, priority, description, 
        name, email, phone, organization, supersetVersion 
      } = body;

      subject = `[Support] ${priority.toUpperCase()}: ${title} (${ticketId})`;
      
      // Email HTML
      htmlContent = `
        <h2>🎫 New Support Ticket</h2>
        <p><strong>Ticket ID:</strong> ${ticketId}</p>
        <p><strong>Priority:</strong> ${priority}</p>
        <p><strong>Category:</strong> ${category}</p>
        <hr />
        <h3>User Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Org:</strong> ${organization || 'N/A'}</p>
        <p><strong>Superset:</strong> ${supersetVersion}</p>
        <hr />
        <h3>Description</h3>
        <p style="white-space: pre-wrap;">${description}</p>
      `;

      // Slack Block Kit JSON
      slackPayload = {
        text: `New Support Ticket: ${title}`,
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: "🎫 New Support Ticket", emoji: true }
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*Priority:*\n${priority.toUpperCase()}` },
              { type: "mrkdwn", text: `*Category:*\n${category}` },
              { type: "mrkdwn", text: `*User:*\n${name}` },
              { type: "mrkdwn", text: `*Email:*\n${email}` }
            ]
          },
          {
            type: "section",
            text: { type: "mrkdwn", text: `*Issue:*\n${description}` }
          },
          {
            type: "context",
            elements: [{ type: "mrkdwn", text: `ID: ${ticketId} | Version: ${supersetVersion}` }]
          }
        ]
      };

    } 
    // --- 3. Handle CONTACT FORMS ---
    else {
      const { name, email, subject: formSubject, message, inquiryType, phone, company } = body;

      subject = `[Lead] ${inquiryType}: ${formSubject}`;
      
      // Email HTML
      htmlContent = `
        <h2>📧 New Contact Form Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Type:</strong> ${inquiryType}</p>
        <hr />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `;

      // Slack Block Kit JSON
      slackPayload = {
        text: `New Lead: ${formSubject}`,
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: "🚀 New Website Lead", emoji: true }
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*Type:*\n${inquiryType}` },
              { type: "mrkdwn", text: `*Name:*\n${name}` },
              { type: "mrkdwn", text: `*Email:*\n${email}` },
              { type: "mrkdwn", text: `*Company:*\n${company || "N/A"}` }
            ]
          },
          {
            type: "section",
            text: { type: "mrkdwn", text: `*Message:*\n${message}` }
          }
        ]
      };
    }

    // --- 4. Send Notifications (Parallel) ---
    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: subject,
        html: htmlContent,
      }),
      sendToSlack(slackPayload)
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Notification Error:', error);
    // We return 200 even if notification fails so the user sees "Success" on the frontend
    // (The data is already safely in Firebase anyway)
    return NextResponse.json({ success: true, warning: 'Notification failed but data saved' });
  }
}