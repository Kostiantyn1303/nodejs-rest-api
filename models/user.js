import { Schema, model } from "mongoose";
import { emailRegexp } from "../constants/user-constants.js";
import { handleMongooseError, validateAtUpdate } from "./hooks.js";
const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: emailRegexp,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  avatarURL: { type: String, required: true },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    // required: [true, "Verify token is required"],
  },
  token: String,
});
userSchema.pre("findOneAndUpdate", validateAtUpdate);

userSchema.post("save", handleMongooseError);
userSchema.post("findOneAndUpdate", handleMongooseError);

const User = model("user", userSchema);

export default User;
