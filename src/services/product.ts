import { IProduct, IProductModel } from "../controllers/product/product.interface";
import { createProduct, editProductById, getAllProducts, removeProductById } from "../models/product";

export const getAllProductsService = async (): Promise<IProductModel[]> => {
  return await getAllProducts();
}

export const createProductService = async (product: IProduct): Promise<void> => {
  await createProduct(product);
}

export const editProductByIdService = async (id: string, newProduct: IProduct): Promise<void> => {
  await editProductById(id, newProduct);
}

export const removeProductByIdService = async  (id: string): Promise<void> => {
  await removeProductById(id);
}
