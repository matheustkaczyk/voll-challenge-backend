import express from 'express';
import { jwtVerify } from '../../middlewares/jwtVerify';
import roleCheck from '../../middlewares/roleCheck';
import { createProduct, editProductById, getAllProducts, removeProductById } from './product';

const router = express.Router();

router.get('/', jwtVerify, getAllProducts);
router.post('/', jwtVerify, roleCheck('admin'), createProduct);
router.put('/:id', jwtVerify, roleCheck('admin'), editProductById);
router.delete('/:id', jwtVerify, roleCheck('admin'), removeProductById);

export default router; 
