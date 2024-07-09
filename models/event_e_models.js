import {Types, models, schema} from "mongoose";
import normalize from "normalize-mongoose";

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

recipeSchema.plugin(normalize);

export const EventModel = model('Event', eventSchema);