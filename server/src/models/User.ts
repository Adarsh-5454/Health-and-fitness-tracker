import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
//static method for sign up
interface IUserModel extends Model<IUser> {
  signup(name: String, email: String, password: String): Promise<void>;
}

userSchema.statics.signup = async function (
  name: String,
  email: String,
  password: String
): Promise<void> {
  try {
    const exists = await this.findOne({ email });
    if (exists) {
      throw new Error("Email is already existed");
    }
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model<IUser>("User", userSchema);
export default User;
