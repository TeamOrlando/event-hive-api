import { Schema, model } from "mongoose";

//create schema

const CollegeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  banner: { type: String, required: true },
  location: { type: String },
  rating: { type: Number, required: true },
},
  { timestamps: true })

export const CollegeModel = model('colleges', CollegeSchema)