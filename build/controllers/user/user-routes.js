"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwtVerify_1 = require("../../middlewares/jwtVerify");
const roleCheck_1 = __importDefault(require("../../middlewares/roleCheck"));
const user_1 = require("./user");
const router = express_1.default.Router();
router.post('/signup', user_1.signUp);
router.post('/signin', user_1.signIn);
router.patch('/currency', jwtVerify_1.jwtVerify, (0, roleCheck_1.default)('admin'), user_1.updateCurrency);
router.get('/user', jwtVerify_1.jwtVerify, user_1.findUser);
exports.default = router;
