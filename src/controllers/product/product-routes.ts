import express from 'express';
import { jwtVerify } from '../../middlewares/jwtVerify';
import roleCheck from '../../middlewares/roleCheck';
import { createProduct, getAllProducts } from './product';

const router = express.Router();

router.get('/', jwtVerify, getAllProducts);
router.post('/', jwtVerify, roleCheck('admin'), createProduct);

export default router;