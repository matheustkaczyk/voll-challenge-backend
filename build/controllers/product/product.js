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
exports.editProductById = exports.createProduct = exports.getAllProducts = void 0;
const product_1 = require("../../services/product");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, product_1.getAllProductsService)();
        return res.status(200).json(products);
    }
    catch (error) {
        return res.status(404).end();
    }
});
exports.getAllProducts = getAllProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        yield (0, product_1.createProductService)(product);
        return res.status(201).end();
    }
    catch (error) {
        return res.status(404).end();
    }
});
exports.createProduct = createProduct;
const editProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const newProduct = req.body;
        yield (0, product_1.editProductByIdService)(id, newProduct);
        return res.status(200).end();
    }
    catch (error) {
        return res.status(404).end();
    }
});
exports.editProductById = editProductById;
