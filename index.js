import express from "express";
import mongoose from "mongoose";
import { dbconnection } from "./config/db.js";
import eventRouter from "./routes/routes.js";

const Event_hive = express();
const PORT = process.env.PORT || 8999

Event_hive.use(express.json())
Event_hive.use(express.static('uploads'));
Event_hive.use(eventRouter)


dbconnection();
//listening to port

Event_hive.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`)
})

