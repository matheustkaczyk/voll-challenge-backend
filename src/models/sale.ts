import { IProductSale } from "../controllers/product/product.interface";
import { IUserModel } from "../controllers/user/user.interface";
import Sale from "../database/schemas/sale";
import User from "../database/schemas/user";

export const createSale = async (user: IUserModel, products: IProductSale[]) => {
  return await Sale.create(
    {
      user_id: user._id,
      products,
      total_price: products.reduce((acc, curr) => acc + curr.total, 0)
    }
  );
}

export const decreaseFromAccount = async (user: IUserModel, total: number) => {
  return await User.updateOne(
    {
      _id: user._id
    },
    {
      balance: user.balance - total
    }
  );
}
