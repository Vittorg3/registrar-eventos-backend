import Group from '../../../../../../domain/entities/Group/Group.';

import mongoose, { connection, model } from 'mongoose';
mongoose.Promise = global.Promise;

const group = new mongoose.Schema<Group>({
    id: {type: String, unique: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type: String},
    subscribers: [String],
});

const modelName = 'groups';

export default (connection && connection.models[modelName])
? connection.models[modelName]
: model(modelName, group)