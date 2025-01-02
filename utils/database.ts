import mongoose from 'mongoose';
let isConnected = false;
export const ConnectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log("mongodb is already connected");
        return;
    }
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in the environment variables");
        }
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_DB
        });
        isConnected = true; 
    } catch (error) {
        console.log("error connecting to mongodb", error);
        return;
    }
}

export default ConnectToDB;