import { IProductSale } from "../controllers/product/product.interface";
import { IUserModel } from "../controllers/user/user.interface";
import { findProductById } from "../models/product";
import { createSale, decreaseFromAccount } from "../models/sale"
import { findUser } from "../models/user";

export const createSaleService = async (user: IUserModel, products: IProductSale[]) => {
  for (let product of products) {
    const foundProducts = await findProductById(product._id)

    if (foundProducts) {
      if (foundProducts.stock < product.quantity) {
        throw new Error("Product quantity is not enough");
      }
  }

  const foundUser = await findUser(user);
  if (foundUser) {
    if (foundUser.balance < products.reduce((acc, curr) => acc + curr.total, 0)) {
      throw new Error("You don't have enough coins");
    }
    await decreaseFromAccount(foundUser, products.reduce((acc, curr) => acc + curr.total, 0))
  }

  return await createSale(
    user,
    products
  );
  }
}
