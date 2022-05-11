import express from 'express';
import { jwtVerify } from '../../middlewares/jwtVerify';
import roleCheck from '../../middlewares/roleCheck';
import { findAllUsers, findUser, updateCurrency } from './user';

const router = express.Router();

router.patch('/currency', jwtVerify, roleCheck('admin'), updateCurrency);
router.get('/', jwtVerify, findUser);
router.get('/all', jwtVerify, findAllUsers);

export default router;
