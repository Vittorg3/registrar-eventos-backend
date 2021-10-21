import app from './server';

import dotenv from 'dotenv';
dotenv.config();

import { connectionMongo } from './infra/db';
connectionMongo();

app.listen(process.env.PORT, () => console.log('server running'));