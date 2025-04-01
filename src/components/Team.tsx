
import React from 'react';
import { Linkedin } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Our Team</h2>
          <p className="text-lg">
            Our team of qualified professionals is dedicated to providing you with exceptional service
            and expertise to help you achieve your financial goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name="Alan Keane" 
            title="Managing Partner"
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
            description="Alan has over 30 years of experience in accounting and taxation. He specializes in business advisory and strategic planning."
          />
          <TeamMember 
            name="Sarah Murphy" 
            title="Tax Director"
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
            description="Sarah is a tax specialist with expertise in personal and corporate taxation, helping clients navigate complex tax regulations."
          />
          <TeamMember 
            name="Michael O'Brien" 
            title="Audit Manager"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            description="Michael leads our audit team, ensuring compliance with accounting standards and identifying areas for business improvement."
          />
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ name, title, image, description }: { name: string; title: string; image: string; description: string }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-80 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-navy">{name}</h3>
        <p className="text-gold font-medium mb-4">{title}</p>
        <p className="mb-4">{description}</p>
        <div className="flex justify-start">
          <a href="#" className="text-navy hover:text-gold transition-colors duration-200">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
