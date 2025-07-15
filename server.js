const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, companyName, email, phone, serviceType, message } = req.body;

    // Validate required fields
    if (!name || !companyName || !email || !phone || !serviceType) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'info@purebizlaundry.com', // Replace with actual business email
      subject: `New Contact Form Submission from ${companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service Type:</strong> ${serviceType}</p>
          </div>

          ${message ? `
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
              <p style="line-height: 1.6;">${message}</p>
            </div>
          ` : ''}

          <div style="background-color: #1e293b; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;">
            <p style="margin: 0;">This message was sent from the PureBiz Laundry Services website contact form.</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to customer
    const autoReplyOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for contacting PureBiz Laundry Services',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">PureBiz Laundry Services</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Professional B2B Laundry Solutions</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #1e293b; margin-top: 0;">Thank You for Your Inquiry!</h2>
            
            <p style="color: #475569; line-height: 1.6;">
              Dear ${name},
            </p>
            
            <p style="color: #475569; line-height: 1.6;">
              Thank you for contacting PureBiz Laundry Services. We have received your inquiry regarding our ${serviceType.replace('-', ' ')} services and will respond within 24 hours.
            </p>
            
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">What happens next?</h3>
              <ul style="color: #475569; line-height: 1.8; padding-left: 20px;">
                <li>Our team will review your specific requirements</li>
                <li>We'll prepare a customized quote for your business</li>
                <li>A dedicated account manager will contact you within 24 hours</li>
                <li>We'll schedule a consultation at your convenience</li>
              </ul>
            </div>
            
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;">Need Immediate Assistance?</h3>
              <p style="color: #92400e; margin: 0;">
                For urgent inquiries, please call our 24/7 hotline: <strong>+91 (8318424372)</strong>
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #64748b; margin: 0;">
                Best regards,<br>
                <strong>The PureBiz Laundry Services Team</strong>
              </p>
            </div>
          </div>
        </div>
      `
    };

    await transporter.sendMail(autoReplyOptions);

    res.json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you within 24 hours!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error sending your message. Please try again or contact us directly.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'PureBiz Laundry Services API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
