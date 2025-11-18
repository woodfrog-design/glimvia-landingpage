import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, inquiryType, phone, company } = body;

    // Send email to YOU (Testing Mode)
    const data = await resend.emails.send({
      // 1. ALWAYS use this "from" address in testing mode:
      from: 'Glimvia Bot <onboarding@resend.dev>', 
      
      // 2. REPLACE THIS with the email you used to sign up for Resend:
      to: ['ajinkya@woodfrog.tech'], 
      
      subject: `[New Lead] ${inquiryType}: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}