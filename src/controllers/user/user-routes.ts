import express from 'express';
import { jwtVerify } from '../../middlewares/jwtVerify';
import { findAllUsers, findUser, updateCurrency } from './user';
import roleCheck from '../../middlewares/roleCheck';

const router = express.Router();

router.patch('/currency', jwtVerify, roleCheck('admin'), updateCurrency);
router.get('/', jwtVerify, findUser);
router.get('/all', jwtVerify, roleCheck('admin'), findAllUsers);

export default router;
