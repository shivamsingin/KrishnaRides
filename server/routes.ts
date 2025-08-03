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
      
      // Here you would typically send an email or save to database
      console.log("Contact form submission:", validatedData);
      
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
      
      // Here you would typically process the booking
      console.log("Booking form submission:", validatedData);
      
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
