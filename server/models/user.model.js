import { Schema, model } from "mongoose";
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },

  message: {
    type: String,
    required: true,
  },
});

//Create Your Model
const User = model("User", schema);

export default User;
