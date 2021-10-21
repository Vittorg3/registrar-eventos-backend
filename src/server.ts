import express from 'express';
const app = express();

import cors from 'cors';
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

import { route } from './presentation/routes/User.route';
app.use('/', route);

export default app;