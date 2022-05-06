import express from 'express';
import userRoutes from './controllers/user/user-routes';

export const app = express();

app.use(express.json());

app.use('/user', userRoutes);
