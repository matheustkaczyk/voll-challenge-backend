import express from 'express';
import { signUp } from './controllers/user/user';

export const app = express();

app.use(express.json());

app.use('/signup', signUp);
