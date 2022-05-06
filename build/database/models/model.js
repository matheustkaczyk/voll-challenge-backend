"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 60,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 60,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 60,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    balance: {
        type: Number,
        default: 0,
    },
    role: {
        type: String,
        default: "user",
    },
});
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
