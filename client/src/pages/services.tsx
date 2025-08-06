import { Car, Plane, MapPin, Route, Clock, Shield, Users, Award } from "lucide-react";
import ServiceCard from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const mainServices = [
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

  const additionalFeatures = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service availability ensures that you can rely on us for urgent travel requirements, late-night airport pickups, early morning business meetings, and emergency transportation needs across Ahmedabad and Gujarat."
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "All our vehicles are equipped with latest safety features including GPS tracking, first aid kits, and emergency contact systems. Our drivers undergo thorough background verification and regular training for passenger safety and security."
    },
    {
      icon: Users,
      title: "Corporate Solutions",
      description: "Specialized corporate travel packages designed for businesses requiring regular transportation services. We offer customized billing, dedicated account management, and volume discounts for companies with frequent travel requirements."
    },
    {
      icon: Award,
      title: "Premium Experience",
      description: "Experience luxury travel with our premium vehicles featuring leather interiors, climate control, Wi-Fi connectivity, and complimentary refreshments. Perfect for impressing clients and ensuring comfortable business travel experiences."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-krishna-black to-krishna-gray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-bold text-5xl mb-6 text-gray-800">Our Premium Services</h1>
            <p className="text-xl text-gray-800 mb-8">
              Krishna Cabs Pvt Ltd provides comprehensive car rental and chauffeur services across Ahmedabad and Gujarat. 
              Our professional transportation solutions cater to business executives, corporate travelers, and individuals 
              seeking reliable, comfortable, and punctual travel experiences. With a focus on safety, comfort, and customer 
              satisfaction, we have established ourselves as the premier choice for luxury car rentals in the region.
            </p>
            <Link href="/contact">
              <Button className="bg-krishna-gold text-gray-900 hover:bg-yellow-500 px-8 py-4 text-lg">
                Book Your Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-krishna-black mb-4">
              Core Transportation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive range of transportation services is designed to meet the diverse needs of business 
              professionals and corporate travelers. From local city transfers to long-distance outstation journeys, 
              we ensure every trip is comfortable, safe, and professionally managed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
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

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-krishna-black mb-4">
              Why Choose Krishna Cabs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond basic transportation, we offer enhanced features and services that set us apart from other 
              car rental companies in Ahmedabad. Our commitment to excellence ensures every journey exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <ServiceCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-4xl text-krishna-black mb-6">
                Extensive Service Coverage
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Krishna Cabs Pvt Ltd operates across major cities and towns in Gujarat, providing seamless 
                transportation services throughout the state. Our extensive network ensures reliable connectivity 
                for business travel, tourism, and personal transportation needs.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-krishna-black mb-2">Primary Cities</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Ahmedabad</li>
                    <li>• Gandhinagar</li>
                    <li>• Vadodara</li>
                    <li>• Surat</li>
                    <li>• Rajkot</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
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
              
              <Link href="/contact">
                <Button className="bg-krishna-gold text-krishna-black hover:bg-yellow-500">
                  Check Service Availability
                </Button>
              </Link>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Gujarat map showing service coverage areas"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-krishna-black mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pricing structure is transparent and competitive, with no hidden charges. We offer flexible 
              payment options and special packages for corporate clients and frequent travelers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-2xl text-krishna-black mb-6">Local Transfers</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Minimum 4 hours booking</li>
                <li>• Driver allowance included</li>
                <li>• Fuel charges included</li>
                <li>• Toll charges extra</li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-krishna-gold text-krishna-black hover:bg-yellow-500">
                  Book Local Transfer
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-2 border-krishna-gold">
              <div className="bg-krishna-gold text-krishna-black px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="font-bold text-2xl text-krishna-black mb-6">Airport Transfers</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Fixed rates to/from airport</li>
                <li>• Flight tracking included</li>
                <li>• 30 minutes waiting free</li>
                <li>• Meet & greet service</li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-krishna-gold text-krishna-black hover:bg-yellow-500">
                  Book Airport Transfer
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-2xl text-krishna-black mb-6">Outstation</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Minimum 300 km booking</li>
                <li>• Driver night charges extra</li>
                <li>• Multiple day packages</li>
                <li>• Custom itinerary support</li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-krishna-gold text-krishna-black hover:bg-yellow-500">
                  Plan Outstation Trip
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
