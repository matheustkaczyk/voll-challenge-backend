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
exports.editProductByIdService = exports.createProductService = exports.getAllProductsService = void 0;
const product_1 = require("../models/product");
const getAllProductsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, product_1.getAllProducts)();
});
exports.getAllProductsService = getAllProductsService;
const createProductService = (product) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_1.createProduct)(product);
});
exports.createProductService = createProductService;
const editProductByIdService = (id, newProduct) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_1.editProductById)(id, newProduct);
});
exports.editProductByIdService = editProductByIdService;
