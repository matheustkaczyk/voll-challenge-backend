import Product from "../database/schemas/product";
import { Product as IProduct, ProductModel } from "../controllers/product/product.interface";

export const createProduct = async (product: IProduct): Promise<void> => {
  await Product.create(product);
}

export const findProductById = async (id: string): Promise<ProductModel | null> => {
  const product = await Product.findById(id);
  return product ? product.toObject() : null;
}

export const editProductById = async (id: string, newProduct: IProduct): Promise<void> => { 
  await Product.findByIdAndUpdate(id, newProduct);
}
