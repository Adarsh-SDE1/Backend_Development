import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        console.log(".env variable--->",process.env.MONGO_CONNECTION_STRING);
       const connectionString = await mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}/${DB_NAME}`);
       console.log(`MongoDB connected..! Connection HOST :- ${connectionString.connection.host}`);
   } catch (error) {
       console.error('MongoDB connection error:', error);
       process.exit(1);
   }
}

export default connectDB;
