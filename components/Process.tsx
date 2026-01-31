
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'お問い合わせ・ご相談',
    description: 'まずはメールまたはお電話にてお気軽にご相談ください。24時間以内に専門スタッフよりご連絡いたします。'
  },
  {
    num: '02',
    title: 'ヒアリング・お見積り',
    description: '対面またはオンラインにて詳細をお伺いします。課題を明確にした上で、透明性の高いお見積りをご提示します。'
  },
  {
    num: '03',
    title: '受任・業務開始',
    description: '内容にご納得いただけましたら契約を締結し、速やかに書類作成や各機関への調整を開始します。'
  },
  {
    num: '04',
    title: '申請・完了',
    description: '当事務所が責任を持って申請を行います。完了後のアフターフォローも万全です。'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Workflow</h2>
          <h3 className="text-4xl font-bold serif">スムーズな解決への4ステップ</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-100 -translate-y-12"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center group">
              <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-black group-hover:text-white transition-all duration-300">
                <span className="text-xl font-bold serif">{step.num}</span>
              </div>
              <h4 className="text-lg font-bold mb-4 serif">{step.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
