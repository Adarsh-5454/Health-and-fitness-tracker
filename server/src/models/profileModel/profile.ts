import mongoose, { Schema, Document, Types } from "mongoose";

export interface IProfile extends Document {
  userId: Types.ObjectId; // Fixed type
  dob: Date;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: number;
}

const profileSchema = new Schema<IProfile>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  dob: { type: Date }, // Fixed type to Date
  address: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  pincode: { type: Number },
});

const Profile = mongoose.model<IProfile>("Profile", profileSchema);
export default Profile;
