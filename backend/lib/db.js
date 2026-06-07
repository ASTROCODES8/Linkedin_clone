import mongoose from "mongoose";

let isConnected = false;

const connectDb = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("Mongo db connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;