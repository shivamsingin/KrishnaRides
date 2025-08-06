import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const bookingSchema = z.object({
  serviceType: z.string().min(1, "Please select a service type"),
  vehicleType: z.string().min(1, "Please select a vehicle type"),
  pickupLocation: z.string()
    .min(3, "Pickup location must be at least 3 characters")
    .max(100, "Pickup location must be less than 100 characters"),
  dropLocation: z.string()
    .min(3, "Drop location must be at least 3 characters")
    .max(100, "Drop location must be less than 100 characters"),
  date: z.string()
    .min(1, "Date is required")
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, "Date cannot be in the past"),
  time: z.string()
    .min(1, "Time is required")
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Please enter a valid time format"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType: "",
      vehicleType: "",
      pickupLocation: "",
      dropLocation: "",
      date: "",
      time: "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Create email body with booking data
    const emailSubject = `New Booking Request - ${data.serviceType}`;
    const emailBody = `
Dear Krishna Cabs Support Team,

You have received a new booking request with the following details:

Service Type: ${data.serviceType}
Vehicle Type: ${data.vehicleType}
Pickup Location: ${data.pickupLocation}
Drop Location: ${data.dropLocation}
Date: ${data.date}
Time: ${data.time}

Please contact the customer promptly to confirm availability and provide booking details.

Best regards,
Krishna Cabs Website
    `.trim();

    // Create mailto URL
    const mailtoUrl = `mailto:support@krishnacabspvtltd.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open user's email client
    window.location.href = mailtoUrl;
    
    // Show success message and reset form
    setTimeout(() => {
      alert("Your email client should have opened with the booking request pre-filled. Please send the email to complete your booking inquiry.");
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="bg-white rounded-xl shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl text-krishna-black">Book Your Ride</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="local">Local Transfer</SelectItem>
                        <SelectItem value="airport">Airport Transfer</SelectItem>
                        <SelectItem value="outstation">Outstation</SelectItem>
                        <SelectItem value="corporate">Corporate Travel</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="vehicleType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="pickupLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Location</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., Ahmedabad Airport, Hotel, Office address" 
                      maxLength={100}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dropLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Drop Location</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., Gandhinagar, Vadodara, Business location" 
                      maxLength={100}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input 
                        type="date" 
                        min={new Date().toISOString().split('T')[0]}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-krishna-gold text-gray-900 hover:bg-yellow-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Searching..." : "Search Available Cars"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
