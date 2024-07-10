import {Types, models, schema} from "mongoose";

// import 'dotenv/config'
import { toJSON } from "@reis/mongoose-to-json";

const eventSchema = new Schema({
    name: { type: String, unique: true, require: true},
    description: { type: String, required: true},
    collegeId: { type: Types.ObjectId},
    location: { type: String},
    date: {type: Date},
    tags: [{type: String}],
    type: { type: String, enum: ['online', 'offline'] },
    banner: {type: String, required: true},
    createdBy: { type: Types.ObjectId, ref:'user', required: true }

},{
    timestamps: true
});

eventSchema.plugin(toJSON)
export const EventModel = model('Event', eventSchema);