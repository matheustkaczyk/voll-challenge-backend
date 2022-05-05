"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const user_1 = require("../../services/user");
const signUp = (req, res) => {
    return (0, user_1.signUpService)(req);
};
exports.signUp = signUp;
