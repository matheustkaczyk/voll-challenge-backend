import express from 'express';
import { jwtVerify } from '../../middlewares/jwtVerify';
import { createSale } from './sale';

const router = express.Router();

router.post('/', jwtVerify, createSale);

export default router;