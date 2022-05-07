import { ProductModel } from "../controllers/product/product.interface";
import { getAllProducts } from "../models/product";

export const getAllProductsService = async (): Promise<ProductModel[]> => {
  return await getAllProducts();
}