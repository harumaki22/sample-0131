
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'サービス', href: '#services' },
    { label: '当事務所について', href: '#about' },
    { label: 'お手続きの流れ', href: '#process' },
    { label: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black flex items-center justify-center rounded-lg">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className={`text-xl font-bold tracking-tight serif ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
            NEXUS <span className="font-light text-sm ml-1">行政書士事務所</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all"
          >
            無料相談予約
          </a>
        </nav>

        <button className="md:hidden text-gray-900">
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
