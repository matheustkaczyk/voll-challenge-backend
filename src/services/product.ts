import { Product, ProductModel } from "../controllers/product/product.interface";
import { createProduct, getAllProducts } from "../models/product";

export const getAllProductsService = async (): Promise<ProductModel[]> => {
  return await getAllProducts();
}

export const createProductService = async (product: Product): Promise<void> => {
  await createProduct(product);
}