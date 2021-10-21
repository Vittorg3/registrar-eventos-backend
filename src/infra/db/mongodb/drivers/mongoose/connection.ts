import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

export const connectionMongo= () => {
    try {
        mongoose.connect(process.env.DATABASE_MONGO as string);
        console.log('connection has been established with database.');

    } catch (error) {
        console.log('something occurred when server tried to connect with database.', (error as Error).message);
    }
};