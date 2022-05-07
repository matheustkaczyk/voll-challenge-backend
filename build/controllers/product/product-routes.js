"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwtVerify_1 = require("../../middlewares/jwtVerify");
const roleCheck_1 = __importDefault(require("../../middlewares/roleCheck"));
const product_1 = require("./product");
const router = express_1.default.Router();
router.get('/', jwtVerify_1.jwtVerify, product_1.getAllProducts);
router.post('/', jwtVerify_1.jwtVerify, (0, roleCheck_1.default)('admin'), product_1.createProduct);
router.put('/:id', jwtVerify_1.jwtVerify, (0, roleCheck_1.default)('admin'), product_1.editProductById);
router.delete('/:id', jwtVerify_1.jwtVerify, (0, roleCheck_1.default)('admin'), product_1.removeProductById);
exports.default = router;
