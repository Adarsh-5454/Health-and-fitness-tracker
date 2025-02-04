import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";
// import Profile from "./profileModel/profile";

// Define the IUser interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Define the static method interface

interface IUserModel extends Model<IUser> {
  signup(name: string, email: string, password: string): Promise<IUser>;
}

// Create the user schema

const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Define the static signup method

userSchema.statics.signup = async function (
  name: string,
  email: string,
  password: string
): Promise<IUser> {
  try {
    // Check if the email already exists

    const exists = await this.findOne({ email });
    if (exists) {
      throw new Error("Email already exists");
    }

    // Hash the password

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create and return the new user

    const user = await this.create({ name, email, password: hash });
    // await Profile.create({ userId: user._id });
    return user;
  } catch (error) {
    throw error;
  }
};

// Define the static LOGIN method

// userSchema.statics.login = async function name(
//   email: string,
//   password: string
// ): Promise<void> {

//   if (!email || !password) {
//     throw Error('All fields must be filled')
//   }
//   const user= await this.findOne({email});

// };

// Export the User model

const User = mongoose.model<IUser, IUserModel>("User", userSchema);
export default User;
