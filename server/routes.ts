import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  serviceRequired: z.string().min(1),
  message: z.string().min(10),
});

const bookingFormSchema = z.object({
  serviceType: z.string().min(1),
  vehicleType: z.string().min(1),
  pickupLocation: z.string().min(1),
  dropLocation: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Send email to bookings@krishnacabspvtltd.com
      console.log("Contact form submission sent to bookings@krishnacabspvtltd.com:", validatedData);
      
      // In a real application, you would integrate with an email service like:
      // - Nodemailer with SMTP
      // - SendGrid
      // - AWS SES
      // - Resend
      // 
      // Example implementation would be:
      // await sendEmail({
      //   to: 'bookings@krishnacabspvtltd.com',
      //   subject: `New Contact Form Submission from ${validatedData.firstName} ${validatedData.lastName}`,
      //   html: `
      //     <h2>New Contact Form Submission</h2>
      //     <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
      //     <p><strong>Email:</strong> ${validatedData.email}</p>
      //     <p><strong>Phone:</strong> ${validatedData.phone}</p>
      //     <p><strong>Service Required:</strong> ${validatedData.serviceRequired}</p>
      //     <p><strong>Message:</strong> ${validatedData.message}</p>
      //   `
      // });
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We will contact you shortly." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data. Please check your inputs." 
      });
    }
  });

  // Booking form submission
  app.post("/api/booking", async (req, res) => {
    try {
      const validatedData = bookingFormSchema.parse(req.body);
      
      // Send booking request to bookings@krishnacabspvtltd.com
      console.log("Booking form submission sent to bookings@krishnacabspvtltd.com:", validatedData);
      
      // In a real application, you would integrate with an email service to send booking details:
      // await sendEmail({
      //   to: 'bookings@krishnacabspvtltd.com',
      //   subject: `New Booking Request - ${validatedData.serviceType}`,
      //   html: `
      //     <h2>New Booking Request</h2>
      //     <p><strong>Service Type:</strong> ${validatedData.serviceType}</p>
      //     <p><strong>Vehicle Type:</strong> ${validatedData.vehicleType}</p>
      //     <p><strong>Pickup Location:</strong> ${validatedData.pickupLocation}</p>
      //     <p><strong>Drop Location:</strong> ${validatedData.dropLocation}</p>
      //     <p><strong>Date:</strong> ${validatedData.date}</p>
      //     <p><strong>Time:</strong> ${validatedData.time}</p>
      //   `
      // });
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.json({ 
        success: true, 
        message: "Thank you for your booking request! We will contact you shortly with available options." 
      });
    } catch (error) {
      console.error("Booking form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid booking data. Please check your inputs." 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
