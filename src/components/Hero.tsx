
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)', 
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-navy-dark opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Chartered Certified Accountants <br />& Registered Auditors
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Providing expert tax, audit and accounting services to businesses and individuals across Ireland since 1989.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white hover:bg-gray-100 text-navy font-semibold text-lg py-6 px-8">
            Our Services
          </Button>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg py-6 px-8">
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button 
          onClick={scrollToServices}
          className="text-white p-2 rounded-full border-2 border-white"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
