import { app } from './app';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
  process.env.DB_CONNECTION as string,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  } as ConnectOptions
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
