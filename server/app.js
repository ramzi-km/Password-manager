import cookieparser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config.js';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import { connectToDb } from './config/db.connection.js';

const app = express();
const PORT = process.env.PORT || 8000;

import userRouter from './routes/userRouter.js';

//connect to database
connectToDb();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cookieparser());
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(cors({ origin: [process.env.CLIENT_URL], credentials: true }));

//listening
app.listen(PORT, () => {
  console.log(`server started at  http://localhost:${PORT}`);
});

//route setup
app.use('/', userRouter);
