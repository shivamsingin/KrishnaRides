import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceRequired: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide details about your requirements"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceRequired: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Thank you for your message! We will contact you shortly.");
        form.reset();
      } else {
        alert(result.message || "There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
      value: "info@krishnacabs.com",
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
            <h1 className="font-bold text-5xl mb-6">Contact Krishna Cabs</h1>
            <p className="text-xl text-gray-200 mb-8">
              Ready to experience premium car rental services? Get in touch with us for bookings, inquiries, 
              or custom transportation solutions. Our dedicated customer service team is available 24/7 to assist 
              with all your business travel needs in Ahmedabad and across Gujarat. We provide personalized service 
              and quick response times to ensure your transportation requirements are met efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-krishna-gold text-krishna-black hover:bg-yellow-500 px-8 py-4 text-lg"
                onClick={() => window.open('tel:+917048472472', '_self')}
              >
                Call Now: +91 70484 72472
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-krishna-gold text-krishna-gold hover:bg-krishna-gold hover:text-krishna-black px-8 py-4 text-lg"
              >
                WhatsApp Us
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

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-12 h-12 bg-krishna-gold rounded-full flex items-center justify-center text-krishna-black hover:bg-yellow-500 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-krishna-gold rounded-full flex items-center justify-center text-krishna-black hover:bg-yellow-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-krishna-gold rounded-full flex items-center justify-center text-krishna-black hover:bg-yellow-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-krishna-gold rounded-full flex items-center justify-center text-krishna-black hover:bg-yellow-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
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
                              <Input placeholder="Enter first name" {...field} />
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
                              <Input placeholder="Enter last name" {...field} />
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
                            <Input type="email" placeholder="Enter email address" {...field} />
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
                            <Input type="tel" placeholder="Enter phone number" {...field} />
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

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Please provide details about your travel requirements..."
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-krishna-gold text-krishna-black hover:bg-yellow-500"
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
                      className="w-full bg-krishna-gold text-krishna-black hover:bg-yellow-500"
                      onClick={() => window.open('tel:+917048472472', '_self')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call +91 70484 72472
                    </Button>
                    
                    <Button variant="outline" className="w-full border-krishna-gold text-krishna-gold hover:bg-krishna-gold hover:text-krishna-black">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Booking
                    </Button>
                    
                    <Button variant="outline" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Email: info@krishnacabs.com
                    </Button>
                  </div>
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
                answer: "You can book through our website contact form, call us at +91 90000 00103, or send a WhatsApp message. We provide instant confirmation and 24/7 booking support."
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
