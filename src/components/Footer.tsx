
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Alan Keane & Co.</h3>
            <p className="text-gray-300 mb-4">
              Chartered Certified Accountants & Registered Auditors providing expert financial services since 1989.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={20} />} href="#" />
              <SocialLink icon={<Twitter size={20} />} href="#" />
              <SocialLink icon={<Linkedin size={20} />} href="#" />
              <SocialLink icon={<Instagram size={20} />} href="#" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Our Services</FooterLink>
              <FooterLink href="#team">Our Team</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <p className="text-gray-300 mb-2">123 Business Avenue, Dublin 2, Ireland</p>
            <p className="text-gray-300 mb-2">+353 (0)1 234 5678</p>
            <p className="text-gray-300">info@alankeane.ie</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Alan Keane & Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => {
  return (
    <a 
      href={href}
      className="bg-navy-light hover:bg-gold transition-colors duration-200 p-2 rounded-full"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <a 
        href={href}
        className="text-gray-300 hover:text-gold transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
