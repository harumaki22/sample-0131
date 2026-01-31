
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
