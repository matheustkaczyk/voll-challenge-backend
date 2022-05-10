import express from 'express';
import userRoutes from './controllers/user/user-routes';
import productRoutes from './controllers/product/product-routes';
import saleRoutes from './controllers/sale/sale-routes';
import cors from 'cors';
export const app = express();

app.use(express.json());
app.use(cors({
  origin: "*"
}))

app.use('/user', userRoutes);
app.use('/products', productRoutes);
app.use('/sale', saleRoutes);
