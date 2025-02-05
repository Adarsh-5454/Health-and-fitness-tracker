import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
   fullName: string;
   email: string;
   country: string;
   role: string;
   comments: string;
}

const contactSchema: Schema = new Schema({
   fullName: { type: String, required: false },
   email: { type: String, required: true },
   country: { type: String, required: true },
   role: { type: String, required: true },
   comments: { type: String, required: true },
});

const Contact = mongoose.model<IContact>("Contact", contactSchema);
export default Contact;
