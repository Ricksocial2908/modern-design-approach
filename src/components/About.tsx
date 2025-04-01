
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">About Alan Keane & Co.</h2>
          <p className="text-lg">
            Since 1989, Alan Keane & Co. has been providing exceptional accounting, tax and business advisory services
            to clients throughout Ireland. Our dedicated team of professionals combines expertise with a personal approach
            to deliver tailored financial solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Our Mission" 
            description="To provide exceptional accounting and advisory services that empower our clients to achieve their financial goals and business objectives."
          />
          <FeatureCard 
            title="Our Approach" 
            description="We take a proactive approach to understanding your unique needs, offering personalized services and solutions tailored to your specific circumstances."
          />
          <FeatureCard 
            title="Our Values" 
            description="Integrity, excellence, and client focus form the foundation of our practice. We're committed to the highest professional and ethical standards."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-4 text-navy">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default About;
