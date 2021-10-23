import mongoose, { connection, model } from 'mongoose';
mongoose.Promise = global.Promise;

export type GroupLeader = {
    id: string;
    user_name: string;
    group: string;
};

const Group_Subscribers = new mongoose.Schema<GroupLeader>({
    id: {type: String, unique: true},
    user_name: {type: String, required: true},
    group: {type: String, required: true}
});

const modelName = 'group_leaders';

export default (connection && connection.models[modelName])
? connection.models[modelName]
: model(modelName, Group_Subscribers)