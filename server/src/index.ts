import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { createServer } from "http"; // HTTP server for Socket.IO
import { Server, Socket } from "socket.io"; // Import Socket.IO
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import blogRoutes from "./routes/blogRoutes/blogRoute";
import chatRoutes from "./routes/chatRoutes/chatRoute";
import productRoutes from "./routes/shoppingRoutes/productRoutes";
import cartRoutes from "./routes/shoppingRoutes/cartRoutes";
import profileRoutes from "./routes/profileRoutes/profileRoutes"; // Import profile routes
import cors from "cors";
import morgan from "morgan";
import Message from "./models/chatModel/chat"; // Import your chat model
import contactRoutes from "./routes/contactRoutes/contactRoute";
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = createServer(app);

// Log to confirm server start
console.log(`Starting server on port ${PORT}`);

// Initialize Socket.IO with updated CORS settings
const io = new Server(server, {
   cors: {
      origin: "*", // Allow all origins (for testing)
      methods: ["GET", "POST"],
      credentials: true,
   },
});

// Store connected users
const users: { [key: string]: string } = {}; // { userId: socketId }

io.on("connection", (socket: Socket) => {
   console.log("A user connected:", socket.id);

   // **Handle user joining with userId**
   socket.on("join", (userId: string) => {
      users[userId] = socket.id;
      console.log(`${userId} joined with socket ID: ${socket.id}`);
   });

   // **Handle sending messages**
   socket.on("sendMessage", async ({ sender, receiver, content }) => {
      try {
         // Save message to database
         const newMessage = new Message({ sender, receiver, content });
         await newMessage.save();

         // Send message to receiver if online
         const receiverSocketId = users[receiver];
         if (receiverSocketId) {
            io.to(receiverSocketId).emit("receiveMessage", newMessage);
         }
      } catch (error) {
         console.error("Error saving message:", error);
      }
   });

   // **Handle user disconnection**
   socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
      const userId = Object.keys(users).find((key) => users[key] === socket.id);
      if (userId) {
         delete users[userId];
      }
   });
});

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/shoppingRoutes", productRoutes);
app.use("/api/shoppingRoutes/cart", cartRoutes); // add controller name also
app.use("/api/contact", contactRoutes);

app.get("/", (req: Request, res: Response) => {
   res.send("API is running...");
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: Function) => {
   console.error(err.stack);
   res.status(500).send("Something broke!");
});

server.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
