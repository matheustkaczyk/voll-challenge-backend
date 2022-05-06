"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtVerify = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const jwtVerify = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = process.env.secret;
    if (token) {
        jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
            if (err) {
                res.status(401).end();
            }
            else {
                req.user = decoded;
                next();
            }
        });
    }
    else {
        res.status(400).end();
    }
};
exports.jwtVerify = jwtVerify;
