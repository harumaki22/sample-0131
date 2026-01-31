
import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'visa',
    title: 'ビザ・在留資格申請',
    description: '外国人雇用のための就労ビザや、永住・帰化申請をトータルサポート。',
    icon: 'fa-passport',
    details: ['就労ビザ（技術・人文知識・国際業務）', '経営・管理ビザ', '永住許可申請', '帰化許可申請']
  },
  {
    id: 'incorporation',
    title: '会社設立・起業支援',
    description: '株式会社、合同会社の設立から、許認可取得までワンストップで対応。',
    icon: 'fa-building',
    details: ['定款作成・公証', '各種許認可（建設業・飲食業等）', '創業融資コンサルティング', '補助金・助成金申請']
  },
  {
    id: 'inheritance',
    title: '遺言・相続手続き',
    description: '争族を避け、円滑な資産承継のための遺言書作成と相続手続き。',
    icon: 'fa-scroll',
    details: ['公正証書遺言の作成支援', '遺産分割協議書の作成', '相続人調査・財産目録作成', '家族信託の組成']
  },
  {
    id: 'contracts',
    title: '契約書作成・法務顧問',
    description: 'トラブルを未然に防ぐ精緻な契約書作成と、継続的な法務サポート。',
    icon: 'fa-file-signature',
    details: ['業務委託契約書', '秘密保持契約（NDA）', '利用規約の作成', '法的リスク診断']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: '田中 勝',
    company: '株式会社テックフロンティア 代表',
    content: '会社設立の際にお世話になりました。複雑なIT関連の許認可も迅速に進めていただき、予定より早く開業できました。',
    image: 'https://picsum.photos/200/200?random=1'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    company: '外資系コンサルティング会社 役員',
    content: '永住権の申請を依頼しました。英語でのコミュニケーションもスムーズで、書類の準備から提出まで完璧にこなしてくれました。',
    image: 'https://picsum.photos/200/200?random=2'
  },
  {
    id: 3,
    name: '佐藤 和子',
    company: '個人顧客',
    content: '相続の手続きで不安でしたが、親身になって相談に乗っていただき、無事に家族全員が納得する形で解決できました。',
    image: 'https://picsum.photos/200/200?random=3'
  }
];
