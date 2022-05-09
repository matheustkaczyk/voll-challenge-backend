"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaleService = void 0;
const product_1 = require("../models/product");
const sale_1 = require("../models/sale");
const user_1 = require("../models/user");
const createSaleService = (user, products) => __awaiter(void 0, void 0, void 0, function* () {
    for (let product of products) {
        const foundProducts = yield (0, product_1.findProductById)(product._id);
        if (foundProducts) {
            if (foundProducts.stock < product.quantity) {
                throw new Error("Product quantity is not enough");
            }
        }
        const foundUser = yield (0, user_1.findUser)(user);
        if (foundUser) {
            if (foundUser.balance < products.reduce((acc, curr) => acc + curr.total, 0)) {
                throw new Error("You don't have enough coins");
            }
            yield (0, sale_1.decreaseFromAccount)(foundUser, products.reduce((acc, curr) => acc + curr.total, 0));
            yield (0, sale_1.decreaseProductQuantity)(products);
        }
        return yield (0, sale_1.createSale)(user, products);
    }
});
exports.createSaleService = createSaleService;
