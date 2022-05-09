import { IProduct } from "../controllers/product/product.interface";
import { IUserModel } from "../controllers/user/user.interface";
import { createSale } from "../models/sale"

export const createSaleService = async (user: IUserModel, products: IProduct[]) => {
  return await createSale(
    user,
    products
  );
}
