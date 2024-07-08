import express from "express";



const Event_hive = express();
const PORT = process.env.PORT || 8999

//listening to port

Event_hive.listen(PORT, () => {
  console.log(`App is listening to ${PORT}`)
})

