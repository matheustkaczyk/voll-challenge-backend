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
exports.signInService = exports.signUpService = void 0;
const md5_1 = __importDefault(require("md5"));
const user_1 = require("../models/user");
const jwtSign_1 = require("../utils/jwtSign");
const signUpService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    user.password = (0, md5_1.default)(user.password);
    return yield (0, user_1.createUser)(user);
});
exports.signUpService = signUpService;
const signInService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const found = yield (0, user_1.findUser)(user);
    const hashedPassword = (0, md5_1.default)(user.password);
    let result;
    if (found) {
        if (found.password === hashedPassword) {
            result = (0, jwtSign_1.jwtSign)(found, process.env.SECRET);
        }
    }
    if (!result) {
        throw new Error('Invalid credentials');
    }
    return result;
});
exports.signInService = signInService;
