export interface ProductModel {
  _id: string;
  name: string;
  description: string;
  img_url: string;
  price: number;
  stock: number;
  created_at: Date;
}
