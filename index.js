import express from "express";
import {dbconnect} from "./config/db.js";

const Event_hive = express();
const PORT = process.env.PORT || 8999

dbconnect
//listening to port

Event_hive.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`)
})

