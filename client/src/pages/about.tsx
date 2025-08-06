import { Users, Award, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "25+", label: "Premium Vehicles" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Service Availability" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every vehicle undergoes rigorous safety checks, and our drivers are thoroughly background-verified and trained to prioritize passenger safety and security."
    },
    {
      icon: Clock,
      title: "Punctuality",
      description: "We understand the importance of time in business. Our commitment to punctuality ensures you never miss important meetings or flights."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our pursuit of excellence drives us to continuously improve our services, maintain premium vehicles, and exceed customer expectations."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Every service is tailored to meet individual customer needs, ensuring personalized experiences and building long-term relationships."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-krishna-black to-krishna-gray text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-bold text-5xl mb-6 text-gray-800">About Krishna Cabs Pvt Ltd</h1>
            <p className="text-xl text-gray-800 mb-8">
              Established with a vision to provide exceptional transportation services, Krishna Cabs Pvt Ltd has been 
              serving the business community of Ahmedabad and Gujarat with professional chauffeur-driven car rental services. 
              Our commitment to quality, safety, and customer satisfaction has made us the preferred choice for business 
              executives, corporate travelers, and individuals seeking reliable transportation solutions.
            </p>
            <Link href="/contact">
              <Button className="bg-krishna-gold text-gray-900 hover:bg-yellow-500 px-8 py-4 text-lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-4xl text-krishna-black mb-6">Our Journey</h2>
              <p className="text-lg text-gray-600 mb-6">
                Krishna Cabs Pvt Ltd has been serving the transportation needs of business executives and corporate 
                professionals in Ahmedabad since our establishment. We have built our reputation on providing reliable, 
                safe, and comfortable car rental services that cater specifically to the demanding requirements of business travel.
              </p>
              
              <p className="text-gray-600 mb-6">
                Our company specializes in offering premium chauffeur-driven car rental services across Ahmedabad and Gujarat. 
                With a focus on punctuality, professionalism, and customer satisfaction, we have become the preferred choice 
                for businesses requiring dependable transportation solutions. Our experienced team understands the importance 
                of timely arrivals for business meetings, airport transfers, and corporate events.
              </p>
              
              <p className="text-gray-600 mb-8">
                We maintain a modern fleet of well-maintained vehicles including sedans, SUVs, and luxury cars, all equipped 
                with the latest safety features and amenities. Our professional chauffeurs are thoroughly trained, 
                background-verified, and committed to providing exceptional service while maintaining the highest standards 
                of safety and courtesy. Whether you need transportation for local business meetings, airport transfers, 
                or outstation travel, Krishna Cabs ensures a seamless experience that reflects your professional image.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-krishna-gold mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern business establishment in Ahmedabad showcasing professional services"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-krishna-black mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our customers place in our services.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-krishna-gold mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-krishna-black mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our operations and shape our commitment to providing exceptional transportation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-krishna-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-krishna-black" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-bold text-3xl text-krishna-black mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6">
                To provide exceptional chauffeur-driven car rental services that exceed customer expectations through 
                professional service delivery, well-maintained vehicles, and trained drivers. We strive to be the most 
                trusted transportation partner for business professionals and corporate travelers in Gujarat.
              </p>
              <p className="text-gray-600">
                Our mission extends beyond transportation to creating value for our customers by ensuring punctual, 
                safe, and comfortable journeys that enhance their business productivity and travel experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-bold text-3xl text-krishna-black mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 mb-6">
                To become the leading car rental service provider in Gujarat, recognized for innovation, quality, 
                and customer-centric approach. We envision expanding our services while maintaining the personal 
                touch and attention to detail that defines our brand.
              </p>
              <p className="text-gray-600">
                We aim to set new standards in the transportation industry through continuous improvement, 
                technology adoption, and unwavering commitment to customer satisfaction and safety.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-krishna-black mb-4">Our Professional Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our success is built on the dedication and expertise of our professional team members who ensure 
              every journey meets our high standards of service excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <img
                src="/attached_assets/generated_images/Indian_professional_chauffeur_42d976b7.png"
                alt="Indian professional chauffeur in uniform"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold text-xl text-krishna-black mb-2">Professional Chauffeurs</h4>
              <p className="text-gray-600">
                Experienced and licensed drivers with extensive knowledge of local routes, traffic patterns, 
                and customer service excellence.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                alt="Customer service representative"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold text-xl text-krishna-black mb-2">Customer Service</h4>
              <p className="text-gray-600">
                Dedicated customer service professionals available 24/7 to handle bookings, queries, 
                and ensure smooth service delivery.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <img
                src="/attached_assets/generated_images/Indian_maintenance_team_c61e12cc.png"
                alt="Indian vehicle maintenance specialists"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold text-xl text-krishna-black mb-2">Maintenance Team</h4>
              <p className="text-gray-600">
                Skilled technicians ensuring all vehicles meet safety standards and maintain optimal 
                performance through regular maintenance and inspections.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-krishna-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bold text-4xl mb-6 text-[#ffffff]">Experience the Krishna Cabs Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-[#ffffff]">
            Join hundreds of satisfied customers who trust Krishna Cabs for their transportation needs. 
            Experience professional service, reliable vehicles, and exceptional customer care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-krishna-gold text-gray-900 hover:bg-yellow-500 px-8 py-4 text-lg">
                Book Your First Ride
              </Button>
            </Link>
            <Link href="/fleet">
              <Button 
                variant="outline" 
                className="border-2 border-krishna-gold text-krishna-gold hover:bg-krishna-gold hover:text-krishna-black px-8 py-4 text-lg"
              >
                View Our Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
