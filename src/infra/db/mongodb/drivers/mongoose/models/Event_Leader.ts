import mongoose, { connection, model } from 'mongoose';
mongoose.Promise = global.Promise;

export type EventLeader = {
    id: string;
    user_name: string;
    event: string;
};

const Event_Leaders = new mongoose.Schema<EventLeader>({
    id: {type: String, unique: true},
    user_name: {type: String, required: true},
    event: {type: String, required: true}
});

const modelName = 'event_leaders';

export default (connection && connection.models[modelName])
? connection.models[modelName]
: model(modelName, Event_Leaders)