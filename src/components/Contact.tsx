
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Contact Us</h2>
          <p className="text-lg">
            We're here to help with any questions you may have. Reach out to us using the form below
            or contact us directly using the information provided.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    required 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    required 
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="What is this regarding?" 
                  required 
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={5} 
                  required 
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full bg-navy hover:bg-navy-light text-white py-6">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Phone size={20} />}
                  title="Phone"
                  details={["+353 (0)1 234 5678"]}
                />
                <ContactInfo 
                  icon={<Mail size={20} />}
                  title="Email"
                  details={["info@alankeane.ie"]}
                />
                <ContactInfo 
                  icon={<MapPin size={20} />}
                  title="Address"
                  details={[
                    "Alan Keane & Co.",
                    "123 Business Avenue",
                    "Dublin 2, D02 AB12",
                    "Ireland"
                  ]}
                />
                <ContactInfo 
                  icon={<Clock size={20} />}
                  title="Business Hours"
                  details={[
                    "Monday - Friday: 9:00 AM - 5:30 PM",
                    "Saturday & Sunday: Closed"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, details }: { icon: React.ReactNode; title: string; details: string[] }) => {
  return (
    <div className="flex">
      <div className="mr-4 text-navy">{icon}</div>
      <div>
        <h4 className="font-medium text-navy">{title}</h4>
        <div className="mt-1 space-y-1">
          {details.map((detail, index) => (
            <p key={index} className="text-gray-600">{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
