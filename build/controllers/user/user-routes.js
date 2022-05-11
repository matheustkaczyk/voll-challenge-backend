"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwtVerify_1 = require("../../middlewares/jwtVerify");
const user_1 = require("./user");
const roleCheck_1 = __importDefault(require("../../middlewares/roleCheck"));
const router = express_1.default.Router();
router.patch('/currency', jwtVerify_1.jwtVerify, (0, roleCheck_1.default)('admin'), user_1.updateCurrency);
router.get('/', jwtVerify_1.jwtVerify, user_1.findUser);
router.get('/all', jwtVerify_1.jwtVerify, (0, roleCheck_1.default)('admin'), user_1.findAllUsers);
exports.default = router;
