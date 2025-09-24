import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token, action } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA token is required' },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.error('reCAPTCHA secret key not configured');
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA not configured' },
        { status: 500 }
      );
    }

    // Verify token with Google reCAPTCHA API
    const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify';
    const verificationResponse = await fetch(verificationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
        remoteip: request.ip || '', // Optional: IP address of the user
      }),
    });

    const verificationResult = await verificationResponse.json();

    if (!verificationResult.success) {
      console.error('reCAPTCHA verification failed:', verificationResult['error-codes']);
      return NextResponse.json({
        success: false,
        error: 'reCAPTCHA verification failed',
        details: verificationResult['error-codes'],
      }, { status: 400 });
    }

    // Check score and action for reCAPTCHA v3
    const isValid = verificationResult.success &&
                   verificationResult.score >= 0.5 &&
                   (action ? verificationResult.action === action : true);

    return NextResponse.json({
      success: isValid,
      score: verificationResult.score,
      action: verificationResult.action,
      hostname: verificationResult.hostname,
    });

  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}