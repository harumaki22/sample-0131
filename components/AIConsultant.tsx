
import React, { useState, useRef, useEffect } from 'react';
import { getLegalGuidance } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'こんにちは！Nexus行政書士事務所のAIアシスタントです。法務手続きのご質問にいつでもお答えします。' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // メッセージ追加時やウィンドウ開閉時に最新のメッセージまでスクロール
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getLegalGuidance(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      console.error("UI Error in Chat:", error);
      setMessages(prev => [...prev, { role: 'model', text: '通信中に不具合が発生しました。時間をおいて再度お試しください。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* 発火ボタン */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-black text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all focus:outline-none ring-offset-2 focus:ring-2 focus:ring-black"
        aria-label="チャット相談を開始"
      >
        {isOpen ? <i className="fa-solid fa-xmark text-2xl"></i> : <i className="fa-solid fa-comment-dots text-2xl"></i>}
      </button>

      {/* チャットウィンドウ */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[420px] h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-black p-5 flex items-center gap-4">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-scale-balanced text-white text-lg"></i>
            </div>
            <div>
              <p className="text-white text-sm font-bold tracking-tight">AI 法務アシスタント</p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-white/50 text-[10px]">オンライン / 24時間対応</p>
              </div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-5 space-y-5 bg-gray-50/50"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-black text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t flex gap-2 items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="知りたいことを入力..."
              className="flex-1 bg-gray-100 border-none rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-black transition-all outline-none"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-black text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-gray-800 disabled:opacity-20 transition-all shadow-lg active:scale-90"
            >
              <i className="fa-solid fa-paper-plane text-sm"></i>
            </button>
          </div>
          <div className="px-4 pb-2 bg-white">
            <p className="text-[9px] text-gray-400 text-center">
              ※AIの回答は一般的な情報です。正確な判断には専門家への相談を推奨します。
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
