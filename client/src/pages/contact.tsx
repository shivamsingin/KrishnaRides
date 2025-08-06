import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  firstName: z.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces"),
  lastName: z.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces"),
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .toLowerCase(),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^\+?[0-9\s\-\(\)]+$/, "Please enter a valid phone number"),
  serviceRequired: z.string().min(1, "Please select a service"),
  travelDate: z.string()
    .optional()
    .refine((date) => {
      if (!date) return true; // Optional field
      const dateValue = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !isNaN(dateValue.getTime()) && dateValue >= today;
    }, "Travel date cannot be in the past"),
  travelTime: z.string().optional(),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const feedbackSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .toLowerCase(),
  rating: z.string().min(1, "Please select a rating"),
  feedback: z.string()
    .min(10, "Feedback must be at least 10 characters")
    .max(500, "Feedback must be less than 500 characters"),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFeedbackSubmitting, setIsFeedbackSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceRequired: "",
      travelDate: "",
      travelTime: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Format date to Indian format for email
    const formatDateToIndian = (dateStr: string) => {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    };

    // Create email body with form data
    const emailSubject = `New Contact Form Submission from ${data.firstName} ${data.lastName}`;
    const emailBody = `
Dear Krishna Cabs Support Team,

You have received a new contact form submission with the following details:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Service Required: ${data.serviceRequired}
${data.travelDate ? `Travel Date: ${formatDateToIndian(data.travelDate)}` : ''}
${data.travelTime ? `Travel Time: ${data.travelTime}` : ''}

Message:
${data.message}

Please contact the customer promptly to assist with their requirements.

Best regards,
Krishna Cabs Website
    `.trim();

    // Create mailto URL
    const mailtoUrl = `mailto:support@krishnacabspvtltd.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open user's email client
    window.location.href = mailtoUrl;
    
    // Show success message and reset form
    setTimeout(() => {
      alert("Your email client should have opened with the message pre-filled. Please send the email to complete your inquiry.");
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  const feedbackForm = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      rating: "",
      feedback: "",
    },
  });

  const onFeedbackSubmit = async (data: FeedbackFormData) => {
    setIsFeedbackSubmitting(true);
    
    // Create email body with feedback data
    const emailSubject = `Feedback - ${data.rating} Star Rating from ${data.name}`;
    const emailBody = `
Dear Krishna Cabs Support Team,

You have received new feedback with the following details:

Name: ${data.name}
Email: ${data.email}
Rating: ${data.rating} Stars

Feedback:
${data.feedback}

Please review this feedback and take appropriate action to maintain service quality.

Best regards,
Krishna Cabs Website
    `.trim();

    // Create mailto URL
    const mailtoUrl = `mailto:support@krishnacabspvtltd.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open user's email client
    window.location.href = mailtoUrl;
    
    // Show success message and reset form
    setTimeout(() => {
      alert("Your email client should have opened with the feedback pre-filled. Please send the email to complete your feedback submission.");
      feedbackForm.reset();
      setIsFeedbackSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 70484 72472",
      description: "Available 24/7 for bookings and inquiries"
    },
    {
      icon: Mail,
      title: "Email",
      value: "support@krishnacabspvtltd.com",
      description: "Send us your requirements and we'll respond quickly"
    },
    {
      icon: MapPin,
      title: "Office Address",
      value: "Satellite, Ahmedabad, Gujarat 380015",
      description: "Visit our office for personalized service"
    },
    {
      icon: Clock,
      title: "Service Hours",
      value: "24/7 Service",
      description: "Round-the-clock availability for your convenience"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-krishna-black to-krishna-gray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-bold text-5xl mb-6 text-gray-800">Contact Krishna Cabs</h1>
            <p className="text-xl text-gray-800 mb-8">
              Ready to experience premium car rental services? Get in touch with us for bookings, inquiries, 
              or custom transportation solutions. Our dedicated customer service team is available 24/7 to assist 
              with all your business travel needs in Ahmedabad and across Gujarat. We provide personalized service 
              and quick response times to ensure your transportation requirements are met efficiently.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-krishna-gold text-gray-900 hover:bg-yellow-500 px-8 py-4 text-lg"
                onClick={() => window.open('tel:+917048472472', '_self')}
              >
                Call Now: +91 70484 72472
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-krishna-black mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your convenience. Choose the method that works best for you, 
              and our professional team will assist you promptly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-krishna-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-krishna-black" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{info.title}</h3>
                  <p className="text-krishna-gold font-semibold mb-2">{info.value}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-krishna-black">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter first name" 
                                maxLength={50}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter last name" 
                                maxLength={50}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="e.g., your.name@company.com" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="e.g., +91 98765 43210 or 9876543210" 
                              maxLength={15}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceRequired"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Required</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select service type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="local">Local Transfer</SelectItem>
                              <SelectItem value="airport">Airport Transfer</SelectItem>
                              <SelectItem value="outstation">Outstation Trip</SelectItem>
                              <SelectItem value="corporate">Corporate Travel</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="travelDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Travel Date (Optional)</FormLabel>
                            <FormControl>
                              <Input 
                                type="date" 
                                min={new Date().toISOString().split('T')[0]}
                                placeholder="DD/MM/YYYY"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="travelTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Travel Time (Optional)</FormLabel>
                            <FormControl>
                              <Input 
                                type="time" 
                                placeholder="HH:MM"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your requirements, destinations, vehicle preferences, and any specific needs..."
                              maxLength={500}
                              rows={4} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-krishna-gold text-gray-900 hover:bg-yellow-500"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Service Areas & Quick Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-krishna-black">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    We provide comprehensive car rental services across Gujarat and neighboring states. 
                    Our primary service areas include:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-krishna-black mb-2">Primary Cities</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Ahmedabad</li>
                        <li>• Gandhinagar</li>
                        <li>• Vadodara</li>
                        <li>• Surat</li>
                        <li>• Rajkot</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-krishna-black mb-2">Extended Areas</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Mount Abu</li>
                        <li>• Udaipur</li>
                        <li>• Mumbai</li>
                        <li>• Pune</li>
                        <li>• All Gujarat</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-krishna-black">Quick Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Need immediate transportation? Contact us directly for instant booking:
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-krishna-gold text-gray-900 hover:bg-yellow-500"
                      onClick={() => window.open('tel:+917048472472', '_self')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call +91 70484 72472
                    </Button>
                    

                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = 'mailto:support@krishnacabspvtltd.com'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email: support@krishnacabspvtltd.com
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Feedback Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-krishna-black">
                    <Star className="w-6 h-6 mr-2 text-krishna-gold" />
                    Share Your Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    We value your feedback! Help us improve our services by sharing your experience.
                  </p>
                  <Form {...feedbackForm}>
                    <form onSubmit={feedbackForm.handleSubmit(onFeedbackSubmit)} className="space-y-4">
                      <FormField
                        control={feedbackForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your name" 
                                maxLength={100}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={feedbackForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="Enter your email address" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={feedbackForm.control}
                        name="rating"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Overall Rating *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Rate your experience" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent (5 Stars)</SelectItem>
                                <SelectItem value="4">⭐⭐⭐⭐ Very Good (4 Stars)</SelectItem>
                                <SelectItem value="3">⭐⭐⭐ Good (3 Stars)</SelectItem>
                                <SelectItem value="2">⭐⭐ Fair (2 Stars)</SelectItem>
                                <SelectItem value="1">⭐ Poor (1 Star)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={feedbackForm.control}
                        name="feedback"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Feedback *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please share your experience with our service, driver, vehicle quality, punctuality, or any suggestions for improvement..."
                                maxLength={500}
                                rows={4} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-krishna-gold text-gray-900 hover:bg-yellow-500"
                        disabled={isFeedbackSubmitting}
                      >
                        {isFeedbackSubmitting ? "Submitting Feedback..." : "Submit Feedback"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-krishna-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services, booking process, and policies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How can I book a cab?",
                answer: "You can book through our website contact form, call us at +91 70484 72472, or send a WhatsApp message. We provide instant confirmation and 24/7 booking support."
              },
              {
                question: "What are your service areas?",
                answer: "We serve all major cities in Gujarat including Ahmedabad, Vadodara, Surat, Rajkot, and also provide outstation services to neighboring states like Rajasthan and Maharashtra."
              },
              {
                question: "Are your drivers licensed and verified?",
                answer: "Yes, all our chauffeurs are professionally licensed, background-verified, and undergo regular training for customer service and safety protocols."
              },
              {
                question: "Do you provide 24/7 service?",
                answer: "Absolutely! We provide round-the-clock service for airport transfers, emergency transportation, and advance bookings to meet your travel needs anytime."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept cash, UPI, credit/debit cards, and bank transfers. For corporate clients, we also provide monthly billing options with customized payment terms."
              },
              {
                question: "Can I cancel or modify my booking?",
                answer: "Yes, you can cancel or modify bookings with reasonable notice. Please contact our customer service team for assistance with changes to your reservation."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-0">
                  <h4 className="font-semibold text-lg text-krishna-black mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
