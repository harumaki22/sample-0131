
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* About Short Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Philosophy</h2>
                <h3 className="text-4xl font-bold serif mb-8 leading-tight">
                  複雑な法務を、<br />シンプルな体験へ。
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  日本の行政手続きは依然として複雑で難解です。私たちは最新のテクノロジーと専門知識を融合させ、お客様が本来の目的（ビジネスや生活の充実）に集中できる環境を提供します。
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span className="font-bold">24時間体制のAI相談サポート</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span className="font-bold">完全オンライン対応可能</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span className="font-bold">各分野のスペシャリストが直接担当</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" 
                  alt="Office" 
                  className="rounded-2xl w-full h-64 object-cover mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400" 
                  alt="Meeting" 
                  className="rounded-2xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Services />
        
        <Process />

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold serif mb-8">あなたの挑戦を、法務の力で加速させる。</h3>
            <a href="#contact" className="inline-block bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
              無料相談のお申し込みはこちら
            </a>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      
      {/* Floating AI Consultant */}
      <AIConsultant />
    </div>
  );
};

export default App;
