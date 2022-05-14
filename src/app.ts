import express from 'express';
import authRoutes from './controllers/auth/auth-routes';
import userRoutes from './controllers/user/user-routes';
import productRoutes from './controllers/product/product-routes';
import saleRoutes from './controllers/sale/sale-routes';
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';

export const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}

app.use(express.json());
app.use(cors(corsOptions));

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/products', productRoutes);
app.use('/sale', saleRoutes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(require('../swagger.json')));
