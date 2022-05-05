"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpService = void 0;
const user_1 = require("../models/user");
const signUpService = (user) => {
    return (0, user_1.createUser)(user);
};
exports.signUpService = signUpService;
