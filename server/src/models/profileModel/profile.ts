import mongoose, { Schema, Document } from "mongoose";

export interface IProfile extends Document {
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
   fullName: { type: String, required: true },
   email: { type: String, required: true, unique: true },
   dob: { type: Date, required: true },
   address: { type: String, required: true },
   city: { type: String, required: true },
   state: { type: String, required: true },
   pincode: { type: Number, required: true },
});

const Profile = mongoose.model<IProfile>("Profile", profileSchema);
export default Profile;
