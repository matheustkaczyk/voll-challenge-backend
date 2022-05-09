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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decreaseProductQuantity = exports.decreaseFromAccount = exports.createSale = void 0;
const product_1 = __importDefault(require("../database/schemas/product"));
const sale_1 = __importDefault(require("../database/schemas/sale"));
const user_1 = __importDefault(require("../database/schemas/user"));
const createSale = (user, products) => __awaiter(void 0, void 0, void 0, function* () {
    return yield sale_1.default.create({
        user_id: user._id,
        products,
        total_price: products.reduce((acc, curr) => acc + curr.total, 0)
    });
});
exports.createSale = createSale;
const decreaseFromAccount = (user, total) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.updateOne({
        _id: user._id
    }, {
        balance: user.balance - total
    });
});
exports.decreaseFromAccount = decreaseFromAccount;
const decreaseProductQuantity = (products) => __awaiter(void 0, void 0, void 0, function* () {
    for (let product of products) {
        const foundProducts = yield product_1.default.findById(product._id);
        if (foundProducts) {
            yield product_1.default.updateOne({
                _id: product._id
            }, {
                stock: foundProducts.stock - product.quantity
            });
        }
    }
});
exports.decreaseProductQuantity = decreaseProductQuantity;
