import express from 'express';
import { jwtVerify } from '../../middlewares/jwtVerify';
import { getAllProducts } from '../../models/product';

const router = express.Router();

router.get('/products', jwtVerify, getAllProducts);