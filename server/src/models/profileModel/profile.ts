import mongoose, { Schema, Document } from "mongoose";

export interface Iprofile extends Document {
  //    profilePicture: string;
  userName: string;
  fullName: string;
  email: string;
  dob: Date;
  address: string;
  city: string;
  state: string;
  pincode: number;
}

const profileSchema: Schema = new Schema({
  userName: { type: String, required: true },
  fullName: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  dob: { type: Number, require: true },
  address: { type: String, require: true },
  city: { type: String, require: true },
  state: { type: String, require: true },
  pincode: { type: Number, require: true },
});

const Profile = mongoose.model<Iprofile>("Profile", profileSchema);
export default Profile;
