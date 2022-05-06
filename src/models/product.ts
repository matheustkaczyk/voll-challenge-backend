import Product from "../database/schemas/product";
import { Product as IProduct } from "../controllers/product/product.interface";

export const createProduct = async (product: IProduct): Promise<void> => {
  await Product.create(product);
}
