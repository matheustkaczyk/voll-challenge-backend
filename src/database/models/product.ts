import mongoose from 'mongoose';
import { Product } from '../../controllers/product/product.interface';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255,

  },
  img_url: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
}, { timestamps: true });

const Product = mongoose.model<Product>('Product', ProductSchema);
export default Product;
