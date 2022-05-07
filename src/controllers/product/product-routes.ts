import express from 'express';
import { jwtVerify } from '../../middlewares/jwtVerify';
import { getAllProducts } from './product';

const router = express.Router();

router.get('/', jwtVerify, getAllProducts);

export default router;