
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-bold serif leading-tight">
            多角的な専門性で、<br />
            あなたのビジネスと生活をガードする。
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <i className={`fa-solid ${service.icon} text-2xl text-black group-hover:text-white transition-colors`}></i>
              </div>
              <h4 className="text-xl font-bold mb-4 serif">{service.title}</h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    {detail}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-black pb-1 hover:gap-4 transition-all">
                詳しく見る <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
