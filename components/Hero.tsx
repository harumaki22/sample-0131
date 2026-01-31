
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 translate-x-1/4 skew-x-12 opacity-50"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Modern Legal Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight serif">
            ビジネスと人生の<br />
            <span className="text-gray-400">一歩先を</span>デザインする。
          </h1>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Nexus行政書士事務所は、単なる書類作成の代行者ではありません。
            変化の激しい現代において、お客様の法的リスクを最小化し、新たなチャンスを形にするパートナーです。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact" className="bg-black text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-gray-800 transition-all transform hover:-translate-y-1">
              まずは無料相談
            </a>
            <a href="#services" className="border border-gray-200 text-gray-900 px-8 py-4 rounded-lg font-bold text-center hover:bg-gray-50 transition-all">
              サービス一覧を見る
            </a>
          </div>
          
          <div className="flex items-center gap-8 pt-8">
            <div>
              <p className="text-2xl font-bold serif">1,200+</p>
              <p className="text-xs text-gray-500 font-medium">累計サポート件数</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <p className="text-2xl font-bold serif">98.5%</p>
              <p className="text-xs text-gray-500 font-medium">申請許可率</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <p className="text-2xl font-bold serif">24h</p>
              <p className="text-xs text-gray-500 font-medium">初回レスポンス以内</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional Office" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          {/* Floating Element */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl glass max-w-[200px] hidden lg:block">
            <p className="text-sm font-bold mb-2">プロフェッショナリズム</p>
            <p className="text-xs text-gray-500 leading-relaxed">私たちは正確さとスピードを追求し、お客様の時間を尊重します。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
