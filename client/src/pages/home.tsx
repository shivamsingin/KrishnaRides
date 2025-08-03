import HeroSection from "@/components/ui/hero-section";
import ServiceCard from "@/components/ui/service-card";
import FleetCard from "@/components/ui/fleet-card";
import { Car, Plane, MapPin, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const services = [
    {
      icon: Car,
      title: "Chauffeur Driven Car Rentals",
      description: "We specialize in professional chauffeur-driven car rentals, offering exceptional services to business executives. Whether you're heading to important meetings, corporate events, or airport transfers, our experienced drivers ensure a comfortable and convenient journey with punctual service and well-maintained luxury vehicles."
    },
    {
      icon: Plane,
      title: "Airport and Railway Transfers",
      description: "We take the stress out of your travel by providing convenient and reliable airport and railway transfers. Whether you are arriving at Sardar Vallabhbhai Patel International Airport or departing, our professional drivers ensure punctual pickups and drops, allowing you to focus on your business while we handle the transportation seamlessly."
    },
    {
      icon: MapPin,
      title: "Transfer Within City",
      description: "Krishna Cabs Pvt Limited is the ideal choice for all your intra-city transfer needs in Ahmedabad. With our reliable and efficient service, we ensure that you reach your destination in a hassle-free manner. Our well-maintained fleet of vehicles offers utmost comfort and safety, guaranteeing smooth rides for business meetings and corporate events."
    },
    {
      icon: Route,
      title: "Outstation Transfer",
      description: "Krishna Cabs Pvt Limited is your trusted partner for outstation transfers across Gujarat and neighboring states. Our fleet of well-maintained vehicles, comprising premium sedans and luxury cars, guarantees smooth rides with ample legroom and plush interiors for extended business trips, ensuring comfortable and professional travel experiences."
    }
  ];

  const featuredFleet = [
    {
      name: "Toyota Innova Hycross",
      category: "Premium",
      description: "The latest hybrid MPV offering exceptional fuel efficiency, spacious seating for seven passengers, advanced safety features, and premium comfort for long-distance business travel and family outings.",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      seats: 7,
      bags: 3,
      fuelType: "Hybrid",
      pricePerKm: 28,
      categoryColor: "bg-orange-500"
    },
    {
      name: "Toyota Innova Crysta",
      category: "Popular",
      description: "The trusted choice for business travel featuring robust build quality, comfortable seating, excellent road presence, and proven reliability for both city commuting and outstation journeys across Gujarat.",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      seats: 7,
      bags: 3,
      fuelType: "Diesel",
      pricePerKm: 18,
      categoryColor: "bg-green-500"
    },
    {
      name: "Honda City",
      category: "Executive",
      description: "Premium sedan perfect for executive travel and business meetings, offering refined comfort, advanced features, excellent fuel efficiency, and sophisticated design for professional image and comfort.",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      seats: 5,
      bags: 2,
      fuelType: "Petrol",
      pricePerKm: 16,
      categoryColor: "bg-blue-500"
    },
    {
      name: "Maruti Dzire",
      category: "Bestseller",
      description: "India's most trusted compact sedan offering exceptional fuel efficiency, comfortable ride quality, spacious interiors, and proven reliability, making it the preferred choice for daily commuting and business travel.",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      seats: 5,
      bags: 2,
      fuelType: "Petrol",
      pricePerKm: 12,
      categoryColor: "bg-orange-500"
    }
  ];

  return (
    <div className="pt-20">
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-krishna-black mb-4">
              Luxury Car Rental Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Krishna Cabs Pvt Ltd offers comprehensive transportation solutions for business executives and corporate travelers in Ahmedabad and across Gujarat. Our professional chauffeur-driven services ensure comfortable, reliable, and punctual travel experiences for all your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Fleet Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-krishna-black mb-4">
              Featured Vehicles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular vehicles designed to meet diverse transportation needs. From fuel-efficient sedans to luxury SUVs, each vehicle is regularly serviced and sanitized for your safety and comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredFleet.map((vehicle, index) => (
              <FleetCard
                key={index}
                {...vehicle}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/fleet">
              <Button className="bg-krishna-gold text-krishna-black hover:bg-yellow-500 px-8 py-3 text-lg">
                View Complete Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-krishna-black mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by business professionals across Ahmedabad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Patel",
                role: "Business Executive",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
                text: "Excellent service with well-maintained cars and professional drivers. As a business executive, I rely on Krishna Cabs for all my important meetings and airport transfers. They are always punctual and reliable."
              },
              {
                name: "Priya Sharma",
                role: "Corporate Manager",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
                text: "Outstanding professional service! I've been using Krishna Cabs for corporate travel for over two years. Their attention to detail and commitment to customer satisfaction is remarkable. Highly recommended!"
              },
              {
                name: "Amit Desai",
                role: "Senior Manager",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
                text: "Perfect for outstation business trips! The vehicles are immaculate, drivers are courteous and knowledgeable. Krishna Cabs has become an integral part of our company's travel arrangements."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-krishna-gold">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
