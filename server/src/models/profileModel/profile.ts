import mongoose, { Schema, Document } from "mongoose";

export interface IProfile extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  fullName: string;
  dob: Date;
  address: string;
  city: string;
  state: string;
  pincode: number;
}

const profileSchema: Schema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: Number, required: true },
});

const Profile = mongoose.model<IProfile>("Profile", profileSchema);
export default Profile;
