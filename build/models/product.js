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
exports.removeProductById = exports.editProductById = exports.findProductById = exports.createProduct = exports.getAllProducts = void 0;
const product_1 = __importDefault(require("../database/schemas/product"));
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.find();
    return products.map(product => product.toObject());
});
exports.getAllProducts = getAllProducts;
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_1.default.create(product);
});
exports.createProduct = createProduct;
const findProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_1.default.findById(id);
    return product ? product.toObject() : null;
});
exports.findProductById = findProductById;
const editProductById = (id, newProduct) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_1.default.findByIdAndUpdate(id, newProduct);
});
exports.editProductById = editProductById;
const removeProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_1.default.findByIdAndDelete(id);
});
exports.removeProductById = removeProductById;
