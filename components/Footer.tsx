
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center rounded-lg">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-lg font-bold tracking-tight serif text-gray-900 uppercase">
              Nexus <span className="font-light text-xs ml-1">Administrative Scrivener</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-black transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-black transition-colors">利用規約</a>
            <a href="#" className="hover:text-black transition-colors">運営会社</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50 gap-4">
          <p className="text-xs text-gray-400">© 2024 Nexus Administrative Scrivener Office. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all">
              <i className="fa-brands fa-x-twitter text-sm"></i>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all">
              <i className="fa-brands fa-linkedin-in text-sm"></i>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all">
              <i className="fa-brands fa-facebook-f text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
