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
exports.signIn = exports.signUp = void 0;
const user_1 = require("../../services/user");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, user_1.signUpService)(req.body);
        res.status(201).end();
    }
    catch (error) {
        res.status(404).end();
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const signIn = yield (0, user_1.signInService)(req.body);
        res.status(200).json(signIn);
    }
    catch (error) {
        res.status(400).end();
    }
});
exports.signIn = signIn;
