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
exports.updateCurrency = exports.findAllUsers = exports.findUser = exports.createUser = void 0;
const user_1 = __importDefault(require("../database/schemas/user"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.create(user);
});
exports.createUser = createUser;
const findUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findOne({ email: user.email });
});
exports.findUser = findUser;
const findAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.find();
});
exports.findAllUsers = findAllUsers;
const updateCurrency = (user, currency) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.updateOne({ email: user.email }, { $set: { balance: currency } });
});
exports.updateCurrency = updateCurrency;
