import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Services() {
  const services = [
    {
      title: 'Cancer Care',
      description:
        'World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.',
    },
    {
      title: 'Labor & Delivery',
      description:
        'World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.',
    },
    {
      title: 'Heart & Vascular',
      description:
        'World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.',
    },
    {
      title: 'Mental Health',
      description:
        'World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.',
    },
    {
      title: 'Neurology',
      description:
        'World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.',
    },
    {
      title: 'Burn Treatment',
      description:
        'World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.',
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 bg-light-background text-light-foreground">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Our Services</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#f9fafb' }} // Light background color for the cards
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
              <div className="flex justify-between items-center mt-6">
                <span className="bg-blue-200 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center">
                  {index + 1}
                </span>
                {/* / */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
