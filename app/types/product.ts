export interface Product {
  id: string;
  name: string;
  character: string;
  cover: string;
  gallery: string[] | null;
  content: string[];
  description: string;
  celebration_id?: string;
}
