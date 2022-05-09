"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SaleSchema = new mongoose_1.default.Schema({
    user_id: {
        type: mongoose_1.default.Types.ObjectId,
        required: true,
        trim: true,
    },
    products: {
        type: Array,
        default: [],
        ref: "Product",
        required: true,
    },
    total_price: {
        type: Number,
        required: true,
        min: 0,
    }
}, { timestamps: true });
const Sale = mongoose_1.default.model("Sale", SaleSchema);
exports.default = Sale;
