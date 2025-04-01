
import React from 'react';
import { 
  Calculator, 
  BarChart3, 
  FileText, 
  Briefcase, 
  Users, 
  Building 
} from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">Our Services</h2>
          <p className="text-lg">
            We provide a comprehensive range of accounting, taxation and business advisory services
            to help you manage your finances efficiently and achieve your goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Calculator size={40} />}
            title="Accounting" 
            description="Comprehensive accounting services including bookkeeping, financial statements, and management accounts."
          />
          <ServiceCard 
            icon={<FileText size={40} />}
            title="Taxation" 
            description="Expert tax planning and compliance services for individuals and businesses to minimize tax liability."
          />
          <ServiceCard 
            icon={<BarChart3 size={40} />}
            title="Audit & Assurance" 
            description="Statutory audits, internal audits, and specialized assurance services to ensure compliance."
          />
          <ServiceCard 
            icon={<Briefcase size={40} />}
            title="Business Advisory" 
            description="Strategic advice on business planning, growth strategies, and financial management."
          />
          <ServiceCard 
            icon={<Users size={40} />}
            title="Payroll Services" 
            description="Comprehensive payroll processing, including tax calculations, pay slips, and statutory reporting."
          />
          <ServiceCard 
            icon={<Building size={40} />}
            title="Company Secretarial" 
            description="Company formations, annual compliance, and maintenance of statutory registers."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="text-navy mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-navy">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Services;
