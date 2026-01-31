
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getLegalGuidance = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [{ text: `あなたは日本の行政書士事務所「Nexus行政書士事務所」のAIアシスタントです。ユーザーからの法務・行政手続きに関する質問（ビザ、会社設立、相続、許認可など）に対して、プロフェッショナルかつ丁寧な日本語で回答してください。
          
          注意点：
          - 回答の最後には必ず「正確な判断には個別具体的な検討が必要ですので、ぜひ当事務所の無料相談をご活用ください」という趣旨の一言を添えてください。
          - 弁護士法などの法律に抵触するような具体的な法的判断（紛争の解決など）は避け、行政書士の範囲内での回答に留めてください。
          
          質問内容: ${query}` }]
        }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 1000,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "申し訳ありません。現在AIアシスタントに接続できません。直接お電話またはフォームよりお問い合わせください。";
  }
};
