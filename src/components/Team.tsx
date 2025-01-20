import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Michael Chen',
    role: 'Strategy Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Emily Rodriguez',
    role: 'HR Consultant',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'David Kim',
    role: 'Financial Advisor',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    linkedin: '#',
    twitter: '#'
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            Meet our team of experienced professionals
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} className="text-gray-600 hover:text-blue-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.twitter} className="text-gray-600 hover:text-blue-600">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;