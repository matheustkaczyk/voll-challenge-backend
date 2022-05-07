import { Product, ProductModel } from "../controllers/product/product.interface";
import { createProduct, editProductById, getAllProducts } from "../models/product";

export const getAllProductsService = async (): Promise<ProductModel[]> => {
  return await getAllProducts();
}

export const createProductService = async (product: Product): Promise<void> => {
  await createProduct(product);
}

export const editProductByIdService = async (id: string, newProduct: Product): Promise<void> => {
  await editProductById(id, newProduct);
}
