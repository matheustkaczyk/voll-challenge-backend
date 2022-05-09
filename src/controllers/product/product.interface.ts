export interface IProductModel {
  _id: string;
  name: string;
  description: string;
  img_url: string;
  price: number;
  stock: number;
  created_at: Date;
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  img_url: string;
  price: number;
  stock: number;
  total: number;
}

export interface IProductSale {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  total: number;
}
