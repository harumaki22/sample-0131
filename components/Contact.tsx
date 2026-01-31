
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto space-y-6">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto text-4xl text-white">
              <i className="fa-solid fa-check"></i>
            </div>
            <h3 className="text-3xl font-bold serif">お問い合わせありがとうございます</h3>
            <p className="text-gray-400">内容を確認の上、1営業日以内に担当者よりご連絡させていただきます。</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-sm font-bold border-b-2 border-white/30 pb-1 hover:border-white transition-all"
            >
              フォームに戻る
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
        <div className="space-y-12">
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Contact</h2>
            <h3 className="text-5xl font-bold serif leading-tight">
              あなたのビジョンを、<br />
              <span className="text-white/40">確かなカタチ</span>へ。
            </h3>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-xl">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">お電話でのご相談（平日 9:00 - 18:00）</p>
                <p className="text-2xl font-bold">03-XXXX-XXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-xl">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">所在地</p>
                <p className="text-lg">東京都千代田区丸の内 1-X-X<br />丸の内パークタワー 15F</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">お名前</label>
                <input 
                  required
                  type="text" 
                  placeholder="山田 太郎"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">会社名（任意）</label>
                <input 
                  type="text" 
                  placeholder="株式会社Nexus"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">メールアドレス</label>
              <input 
                required
                type="email" 
                placeholder="example@mail.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">相談内容</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors">
                <option className="bg-gray-900">ビザ・在留資格について</option>
                <option className="bg-gray-900">会社設立・起業について</option>
                <option className="bg-gray-900">相続・遺言について</option>
                <option className="bg-gray-900">その他</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">メッセージ</label>
              <textarea 
                rows={4}
                placeholder="具体的な相談内容をご記入ください。"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              送信する
            </button>
            <p className="text-[10px] text-center text-gray-500">
              ※送信することでプライバシーポリシーに同意したものとみなされます。
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
