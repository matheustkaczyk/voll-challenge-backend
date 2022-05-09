import { IProduct } from "../controllers/product/product.interface";
import { IUserModel } from "../controllers/user/user.interface";
import Sale from "../database/schemas/sale";

export const createSale = async (user: IUserModel, products: IProduct[]) => {
  return await Sale.create(
    {
      user_id: user._id,
      products,
      total_price: products.reduce((acc, curr) => acc + curr.total, 0)
    }
  );
}
