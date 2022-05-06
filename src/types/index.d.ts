import { ProductModel } from "../controllers/product/product.interface";

export {};

declare global {
  namespace Express {
    interface Request {
      user: Object;
    }
  }
}