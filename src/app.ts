import express from 'express';
import userRoutes from './controllers/user/user-routes';
import productRoutes from './controllers/product/product-routes';

export const app = express();

app.use(express.json());

app.use('/user', userRoutes);
app.use('/products', productRoutes)
