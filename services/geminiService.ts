import { GoogleGenAI } from "@google/genai";

/**
 * 行政手続きに関する法務アドバイスを生成する
 */
export const getLegalGuidance = async (query: string): Promise<string> => {
  // システム規定に基づき、APIキーは process.env.API_KEY から排他的に取得します。
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("Critical: API_KEY is not defined.");
    return "【お知らせ】現在、AI相談機能のメンテナンス中です。お手数ですが、お電話（03-XXXX-XXXX）またはお問い合わせフォームより直接ご連絡ください。";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // 法務相談のような複雑なタスクには gemini-3-pro-preview を使用します
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        {
          role: 'user',
          parts: [{ text: `あなたは日本の行政書士事務所「Nexus行政書士事務所」のプロフェッショナルなAIアシスタントです。
          以下のトピックについて、丁寧で信頼感のある日本語で回答してください：
          - ビザ・在留資格申請
          - 会社設立・起業支援
          - 遺言・相続手続き
          - 許認可申請
          
          回答の指針：
          1. 法律の概要や一般的な手続きの流れを説明してください。
          2. 具体的な法的判断を求める質問には、「個別の事案により異なりますので、詳細なヒアリングが必要です」と答えてください。
          3. 最後に「正確な判断には個別具体的な検討が必要ですので、ぜひ当事務所の無料相談をご活用ください」という趣旨の一言を必ず添えてください。
          
          ユーザーの質問: ${query}` }]
        }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 1000,
      }
    });

    // response.text プロパティを使用して文字列を取得
    const resultText = response.text;

    if (typeof resultText !== 'string') {
      return "回答を取得できませんでした。再度お試しください。";
    }

    return resultText;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "申し訳ございません。AIアシスタントが一時的に応答できません。お急ぎの場合はお電話にてお問い合わせください。";
  }
};