import mongoose, { Schema, Document } from "mongoose";

export interface Ichat extends Document {
  sender: mongoose.Types.ObjectId; // User who sent the message
  receiver: mongoose.Types.ObjectId; // User who receives the message
  content: string; // The actual message content
  createdAt: Date; // Timestamp of when the message was sent
}

const chatSchema: Schema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
  receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Adding indexes for quick lookup
chatSchema.index({ sender: 1, receiver: 1, createdAt: 1 });

const chats = mongoose.model<Ichat>("chats", chatSchema);
export default chats;
