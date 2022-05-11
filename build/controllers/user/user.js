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
exports.findUser = exports.updateCurrency = void 0;
const user_1 = require("../../services/user");
const updateCurrency = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, user_1.updateCurrencyService)(req.body, req.body.currency);
        return res.status(200).end();
    }
    catch (error) {
        return res.status(400).end();
    }
});
exports.updateCurrency = updateCurrency;
const findUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_1.findUserService)(req.user);
        const userWithNoPassword = Object.assign({}, user);
        delete userWithNoPassword.password;
        return res.status(200).json({ data: userWithNoPassword });
    }
    catch (error) {
        return res.status(404).end();
    }
});
exports.findUser = findUser;
