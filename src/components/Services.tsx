import React from 'react';
import { 
  BarChart3, 
  Users2, 
  TrendingUp, 
  Lightbulb,
  Target,
  LineChart
} from 'lucide-react';

const services = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: 'Business Strategy',
    description: 'Develop comprehensive strategies to drive growth and achieve your business objectives.'
  },
  {
    icon: <Users2 className="h-8 w-8 text-blue-600" />,
    title: 'HR Consulting',
    description: 'Optimize your workforce management and enhance organizational effectiveness.'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    title: 'Market Analysis',
    description: 'Gain valuable insights into market trends and competitive landscapes.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    title: 'Innovation Management',
    description: 'Transform ideas into successful products and services.'
  },
  {
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: 'Risk Management',
    description: 'Identify and mitigate potential risks to protect your business.'
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: 'Financial Advisory',
    description: 'Expert guidance on financial planning and investment strategies.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;