import mongoose from "mongoose";
import 'dotenv/config'

const mongourl = process.env.MONGO_URL

export const dbconnect = () => { 
    mongoose.connect(mongourl).then (() => {
        console.log('Database Connected');
    }) ;
    }
