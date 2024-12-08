import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-primary">ERA</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About Us</a>
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-up">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About Us</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
              <Button className="bg-primary hover:bg-primary/90 w-full">Get Started</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;