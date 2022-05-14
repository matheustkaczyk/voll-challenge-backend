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
    let token = req.headers.authorization;
    const secret = process.env.SECRET;
    if (token) {
        if (token.split(' ').length === 2) {
            token = token.split(' ').slice(1).join(' ');
        }
        jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(401).end();
            }
            else {
                const { payload } = decoded;
                delete payload.password;
                req.user = payload;
                next();
            }
        });
    }
};
exports.jwtVerify = jwtVerify;
