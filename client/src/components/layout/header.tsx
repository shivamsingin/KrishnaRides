import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/fleet", label: "Our Fleet" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-krishna-black/95 backdrop-blur-sm shadow-lg' : 'bg-krishna-black'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-krishna-gold rounded-full flex items-center justify-center">
              <span className="text-krishna-black font-bold text-xl">KC</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-white">Krishna Cabs</h1>
              <p className="text-krishna-gold text-sm">Pvt Ltd</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors hover:text-krishna-gold ${
                  location === item.path ? 'text-krishna-gold' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button 
              className="hidden lg:flex items-center text-krishna-gold font-semibold hover:text-yellow-300 transition-colors"
              onClick={() => window.open('tel:+919000000103', '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 90000 00103
            </button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`transition-colors hover:text-krishna-gold ${
                    location === item.path ? 'text-krishna-gold' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center text-krishna-gold font-semibold pt-2">
                <Phone className="w-4 h-4 mr-2" />
                +91 90000 00103
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
