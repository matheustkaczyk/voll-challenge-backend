import express from 'express';
import { jwtVerify } from '../../middlewares/jwtVerify';
import roleCheck from '../../middlewares/roleCheck';
import { signIn, signUp, updateCurrency } from './user';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.patch('/currency', jwtVerify, roleCheck('admin'), updateCurrency);

export default router;
