import mongoose from "mongoose";

const connectDb = async () => {
  try {
    console.log(process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDb Connected");
  } catch (error) {
    console.error(error.message);
    console.log("Connection Error");

    process.exit(1);
  }
};

export default connectDb;
