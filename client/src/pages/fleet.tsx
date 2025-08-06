import FleetCard from "@/components/ui/fleet-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

// Vehicle Images Configuration
// To change any vehicle image:
// 1. For online images: Replace the URL with any external image URL
// 2. For local images: Place your image in attached_assets/ folder and use @assets/filename.jpg
// 3. All images should be high quality, preferably 1056x594 pixels for consistency

const vehicleImages = {
  // Toyota Models
  "innova-hycross": "https://imgd.aeplcdn.com/1056x594/n/cw/ec/139651/innova-hycross-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  "innova-crysta": "https://imgd.aeplcdn.com/1056x594/n/cw/ec/26730/innova-crysta-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  "rumion": "https://imgd.aeplcdn.com/1056x594/n/cw/ec/115145/rumion-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  
  // Honda Models
  "honda-city": "@assets/960px-2019_Honda_City_SV_1754492139176.jpg", // Local asset - you can replace this file
  "honda-amaze": "https://imgd.aeplcdn.com/1056x594/n/cw/ec/183381/amaze-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  
  // Maruti Models
  "maruti-ertiga": "https://imgd.aeplcdn.com/1056x594/n/cw/ec/54399/ertiga-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  "maruti-dzire": "https://imgd.aeplcdn.com/1056x594/n/cw/ec/174809/dzire-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  
  // Hyundai Models
  "hyundai-aura": "https://imgd.aeplcdn.com/1056x594/n/cw/ec/45951/aura-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
};

export default function Fleet() {
  const fleetVehicles = [
    {
      name: "Toyota Innova Hycross",
      category: "Premium",
      description: "The latest hybrid MPV offering exceptional fuel efficiency, spacious seating for seven passengers, advanced safety features, and premium comfort for long-distance business travel.",
      image: vehicleImages["innova-hycross"],
      seats: 7,
      bags: 3,
      fuelType: "Hybrid",
      categoryColor: "bg-orange-500"
    },
    {
      name: "Toyota Innova Crysta",
      category: "Popular",
      description: "The trusted choice for business travel featuring robust build quality, comfortable seating, excellent road presence, and proven reliability for both city commuting and outstation journeys.",
      image: vehicleImages["innova-crysta"],
      seats: 7,
      bags: 3,
      fuelType: "Diesel",
      categoryColor: "bg-green-500"
    },
    {
      name: "Honda City",
      category: "Executive",
      description: "Premium sedan perfect for executive travel and business meetings, offering refined comfort, advanced features, excellent fuel efficiency, and sophisticated design for professional image.",
      image: vehicleImages["honda-city"],
      seats: 5,
      bags: 2,
      fuelType: "Petrol",
      categoryColor: "bg-blue-500"
    },
    {
      name: "Honda Amaze",
      category: "Efficient",
      description: "Compact sedan ideal for city transfers and short-distance business trips, combining fuel efficiency with comfort, modern features, and reliable performance for economical yet comfortable transportation.",
      image: vehicleImages["honda-amaze"],
      seats: 5,
      bags: 2,
      fuelType: "Petrol",
      categoryColor: "bg-green-600"
    },
    {
      name: "Maruti Ertiga",
      category: "Versatile",
      description: "Versatile MPV perfect for group travel and family outings, offering spacious seven-seater configuration, excellent fuel economy, reliable performance, and comfortable ride quality for both city.",
      image: vehicleImages["maruti-ertiga"],
      seats: 7,
      bags: 2,
      fuelType: "Petrol",
      categoryColor: "bg-purple-500"
    },
    {
      name: "Hyundai Aura",
      category: "Modern",
      description: "Modern compact sedan featuring contemporary design, advanced connectivity features, comfortable interiors, and efficient engine options, making it ideal for business professionals seeking style and functionality.",
      image: vehicleImages["hyundai-aura"],
      seats: 5,
      bags: 2,
      fuelType: "Petrol",
      categoryColor: "bg-red-500"
    },
    {
      name: "Toyota Rumion",
      category: "Practical",
      description: "Practical MPV designed for versatile transportation needs, offering generous space, comfortable seating arrangements, reliable Toyota build quality, and efficient performance for diverse travel requirements.",
      image: vehicleImages["rumion"],
      seats: 7,
      bags: 3,
      fuelType: "Petrol",
      categoryColor: "bg-teal-500"
    },
    {
      name: "Maruti Dzire",
      category: "Bestseller",
      description: "India's most trusted compact sedan offering exceptional fuel efficiency, comfortable ride quality, spacious interiors, and proven reliability, making it the preferred choice for daily commuting.",
      image: vehicleImages["maruti-dzire"],
      seats: 5,
      bags: 2,
      fuelType: "Petrol",
      categoryColor: "bg-orange-500"
    }
  ];

  const categories = ["All", "Executive", "Premium", "Efficient", "Versatile"];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-krishna-black to-krishna-gray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-bold text-5xl mb-6 text-gray-800">Our Premium Fleet</h1>
            <p className="text-xl text-gray-800 mb-8">
              Discover our extensive range of well-maintained vehicles designed to meet diverse transportation needs. 
              From fuel-efficient sedans to luxury SUVs, each vehicle in our fleet is regularly serviced and sanitized 
              to ensure the highest standards of safety, comfort, and reliability for our valued customers. Our professional 
              chauffeurs are trained to provide exceptional service while maintaining the pristine condition of every vehicle.
            </p>
            <Link href="/contact">
              <Button className="bg-krishna-gold text-gray-900 hover:bg-yellow-500 px-8 py-4 text-lg">
                Book Your Vehicle
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-krishna-black mb-4">
              Complete Vehicle Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Krishna Cabs Pvt Ltd maintains a diverse fleet of premium vehicles to cater to every transportation requirement. 
              Whether you need an economical sedan for city travel, a spacious SUV for family trips, or a luxury vehicle for 
              special occasions, our well-maintained fleet ensures comfortable and reliable transportation solutions.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-krishna-gold hover:text-krishna-black transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Fleet Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {fleetVehicles.map((vehicle, index) => (
              <FleetCard
                key={index}
                {...vehicle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-4xl text-krishna-black mb-6">
                Fleet Maintenance & Safety
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Krishna Cabs Pvt Ltd, we prioritize the safety and comfort of our passengers through rigorous 
                maintenance schedules and quality assurance protocols. Every vehicle in our fleet undergoes regular 
                inspections, professional cleaning, and sanitization to maintain the highest standards of hygiene and performance.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-krishna-gold rounded-full flex items-center justify-center mt-1">
                    <span className="text-krishna-black text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-krishna-black">Regular Maintenance</h4>
                    <p className="text-gray-600">Scheduled servicing every 10,000 km or 6 months to ensure optimal performance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-krishna-gold rounded-full flex items-center justify-center mt-1">
                    <span className="text-krishna-black text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-krishna-black">Safety Inspections</h4>
                    <p className="text-gray-600">Comprehensive safety checks including brakes, tires, lights, and emergency equipment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-krishna-gold rounded-full flex items-center justify-center mt-1">
                    <span className="text-krishna-black text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-krishna-black">Sanitization Protocol</h4>
                    <p className="text-gray-600">Professional cleaning and sanitization after every trip for passenger health and safety</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-krishna-gold rounded-full flex items-center justify-center mt-1">
                    <span className="text-krishna-black text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-krishna-black">GPS Tracking</h4>
                    <p className="text-gray-600">Real-time vehicle tracking for enhanced security and route optimization</p>
                  </div>
                </div>
              </div>
              
              <Link href="/about">
                <Button className="bg-krishna-gold text-gray-900 hover:bg-yellow-500">
                  Learn More About Our Standards
                </Button>
              </Link>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional vehicle maintenance and safety inspection"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-krishna-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bold text-4xl mb-6 text-gray-800">Ready to Book Your Perfect Vehicle?</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Choose from our extensive fleet of premium vehicles and experience the difference of professional 
            chauffeur-driven transportation. Book now for immediate availability or schedule your future travels with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-krishna-gold text-gray-900 hover:bg-yellow-500 px-8 py-4 text-lg">
                Book Now
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-krishna-gold text-krishna-gold hover:bg-krishna-gold hover:text-krishna-black px-8 py-4 text-lg"
              onClick={() => window.open('tel:+917048472472', '_self')}
            >
              Call +91 70484 72472
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
