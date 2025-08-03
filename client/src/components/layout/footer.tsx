import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-krishna-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-krishna-gold rounded-full flex items-center justify-center">
                <span className="text-krishna-black font-bold">KC</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Krishna Cabs</h3>
                <p className="text-krishna-gold text-sm">Pvt Ltd</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Premium car rental services for business professionals in Ahmedabad and across Gujarat. 
              Your trusted partner for reliable and comfortable transportation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-krishna-gold hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-krishna-gold hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-krishna-gold hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-krishna-gold hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-krishna-gold transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-krishna-gold transition-colors">Our Services</Link></li>
              <li><Link href="/fleet" className="text-gray-300 hover:text-krishna-gold transition-colors">Vehicle Fleet</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-krishna-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-krishna-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Chauffeur Driven Cars</span></li>
              <li><span className="text-gray-300">Airport Transfers</span></li>
              <li><span className="text-gray-300">City Transfers</span></li>
              <li><span className="text-gray-300">Outstation Travel</span></li>
              <li><span className="text-gray-300">Corporate Travel</span></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Ahmedabad</span></li>
              <li><span className="text-gray-300">Gandhinagar</span></li>
              <li><span className="text-gray-300">Vadodara</span></li>
              <li><span className="text-gray-300">Surat</span></li>
              <li><span className="text-gray-300">Rajkot</span></li>
              <li><span className="text-gray-300">All Gujarat</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Krishna Cabs Pvt Ltd. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
