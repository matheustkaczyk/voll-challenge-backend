"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwtVerify_1 = require("../../middlewares/jwtVerify");
const product_1 = require("../../models/product");
const router = express_1.default.Router();
router.get('/products', jwtVerify_1.jwtVerify, product_1.getAllProducts);
exports.default = router;
