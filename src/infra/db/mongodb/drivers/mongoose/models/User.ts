import User from '../../../../../../domain/entities/User/User';

import mongoose, { connection, model } from 'mongoose';
mongoose.Promise = global.Promise;


const user = new mongoose.Schema<User>({
    id: {type: String, unique: true},
    name: {type: String, required: true},
    age: {type: Number, required: true},
    group: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const modelName = 'users';

export default (connection && connection.models[modelName])
? connection.models[modelName]
: model(modelName, user)