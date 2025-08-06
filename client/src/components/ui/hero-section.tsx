import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import BookingForm from "./booking-form";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-krishna-black/80 to-krishna-black/60">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Professional chauffeur service with luxury vehicles"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <p className="text-krishna-gold font-medium mb-4">Welcome To Krishna Cabs!</p>
            <h1 className="font-bold text-5xl mb-6 leading-tight">
              Your Business Travel Support
            </h1>
            <p className="text-xl mb-8 text-gray-800">
              Experience premium chauffeur-driven car rental services in Ahmedabad. 
              Reliable, safe, and comfortable transportation for business executives, 
              airport transfers, and outstation journeys across Gujarat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-krishna-gold text-krishna-black hover:bg-yellow-500 px-8 py-4 text-lg">
                  Book Now
                </Button>
              </Link>
              <Link href="/fleet">
                <Button 
                  variant="outline" 
                  className="border-2 border-krishna-gold text-krishna-gold hover:bg-krishna-gold hover:text-krishna-black px-8 py-4 text-lg"
                >
                  View Fleet
                </Button>
              </Link>
            </div>
          </div>

          {/* Booking Form */}
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
