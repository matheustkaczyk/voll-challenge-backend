"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwtVerify_1 = require("../../middlewares/jwtVerify");
const sale_1 = require("./sale");
const router = express_1.default.Router();
router.post('/', jwtVerify_1.jwtVerify, sale_1.createSale);
exports.default = router;
