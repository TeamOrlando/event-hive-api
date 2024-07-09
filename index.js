import express from "express";
import { dbconnection} from "./config/db.js";

const Event_hive = express();
const PORT = process.env.PORT || 8999

dbconnection();
//listening to port

Event_hive.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`)
})

