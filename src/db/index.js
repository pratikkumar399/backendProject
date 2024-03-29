import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDb connected to ${connectionInstance.connection.host}`);
    }
    catch (err) {
        console.error("MongoDb connection failes", err);
        process.exit(1);
    }
}

export default connectDB;