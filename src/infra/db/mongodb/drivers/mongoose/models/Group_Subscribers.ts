import mongoose, { connection, model } from 'mongoose';
mongoose.Promise = global.Promise;

export type GroupSubscribes = {
    id: string;
    user_name: string;
    group: string;
};

const Group_Subscribers = new mongoose.Schema<GroupSubscribes>({
    id: {type: String, unique: true},
    user_name: {type: String, required: true},
    group: {type: String, required: true}
});

const modelName = 'group_subscribers';

export default (connection && connection.models[modelName])
? connection.models[modelName]
: model(modelName, Group_Subscribers)