import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-slate-50">Alan Keane & Co.</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#team">Our Team</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button className="bg-navy hover:bg-navy-light text-white">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-navy hover:text-navy-light focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <div className="md:hidden bg-white absolute w-full shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="#services" onClick={toggleMenu}>Services</MobileNavLink>
            <MobileNavLink href="#team" onClick={toggleMenu}>Our Team</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <Button className="bg-navy hover:bg-navy-light text-white w-full">
              Get in Touch
            </Button>
          </div>
        </div>}
    </nav>;
};
const NavLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) => <a href={href} className="text-navy hover:text-navy-light font-medium transition-colors duration-200">
    {children}
  </a>;
const MobileNavLink = ({
  href,
  onClick,
  children
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => <a href={href} onClick={onClick} className="text-navy hover:text-navy-light font-medium py-2 block transition-colors duration-200">
    {children}
  </a>;
export default Navbar;