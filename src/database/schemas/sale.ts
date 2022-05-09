import mongoose from "mongoose";

const SaleSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
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

const Sale = mongoose.model("Sale", SaleSchema);

export default Sale;