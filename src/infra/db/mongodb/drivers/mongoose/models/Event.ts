import mongoose, { connection, model } from 'mongoose';
mongoose.Promise = global.Promise;

export type Event = {
    id: string;
    name: string;
    description: string;
    photo: string;
    date: Date;
};

const Event = new mongoose.Schema<Event>({
    id: {type: String, unique: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type: String, required: true},
    date: {type: Date, required: true}
});

const modelName = 'events';

export default (connection && connection.models[modelName])
? connection.models[modelName]
: model(modelName, Event)