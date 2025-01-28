import { Request, Response } from "express";
import chats, { Ichat } from "../../models/chatModel/chat";

/**
 * Send a message from one user to another
 */
export const postMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { sender, receiver, content } = req.body;

    // Validate input
    if (!sender || !receiver || !content) {
      res
        .status(400)
        .json({ error: "Sender, receiver, and content are required." });
      return;
    }

    // Create a new message
    const newMessage = new chats({
      sender,
      receiver,
      content,
    });

    // Save the message to the database
    const savedMessage = await newMessage.save();
    res
      .status(201)
      .json({ message: "Message sent successfully", savedMessage });

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

/**
 * Get all messages between two users
 */
export const fetchMessages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId1, userId2 } = req.params;

    // Validate input
    if (!userId1 || !userId2) {
      res.status(400).json({ error: "Both user IDs are required." });
    }

    // Get all messages between the two users
    const messages = await chats
      .find({
        $or: [
          { sender: userId1, receiver: userId2 },
          { sender: userId2, receiver: userId1 },
        ],
      })
      .populate("sender", "name avatar") // Optionally populate sender info
      .populate("receiver", "name avatar") // Optionally populate receiver info
      .sort({ createdAt: 1 }); // Sort messages by creation time

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};
