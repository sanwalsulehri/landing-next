import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Received form data:', formData);

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL, // Where you want to receive the form submissions
      subject: 'New Property Information Request',
      html: `
        <h2>New Property Information Request</h2>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>Property Type:</strong> ${formData.propertyType}</p>
        <p><strong>Bedrooms:</strong> ${formData.bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${formData.bathrooms}</p>
        <p><strong>Square Footage:</strong> ${formData.squareFootage}</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.countryCode} ${formData.phone}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 