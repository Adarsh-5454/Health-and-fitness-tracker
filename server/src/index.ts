import express from "express";
import dotenv from "dotenv";
import { createServer } from "http"; // HTTP server for Socket.IO
import { Server, Socket } from "socket.io"; // Import Socket.IO
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import blogRoutes from "./routes/blogRoutes/blogRoute";
import chatRoutes from "./routes/chatRoutes/chatRoute";
import productRoutes from "./routes/shoppingRoutes/productRoutes";
import cartRoutes from "./routes/shoppingRoutes/cartRoutes";
import cors from "cors";
import morgan from "morgan";
import Message from "./models/chatModel/chat"; // Import your chat model
// import chatRoutes from "./routes/chatRoutes/chatRoute";
import profileRoutes from "./routes/profileRoutes/profileRoutes";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins, update if needed
    methods: ["GET", "POST"],
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
<<<<<<< HEAD
app.use("/api/blogs", blogRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/shopping", productRoutes);
app.use("/api/shopping/cart", cartRoutes);

// Start Server
server.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
=======
app.use("/api/profile", profileRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/shoppingRoutes", productRoutes);
app.use("/api/shoppingRoutes/cart", cartRoutes); // add controller name also

app.get("/", (req: Request, res: Response) => {
   res.send("API is running...");
});

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
>>>>>>> 92f6b8c13b19a3e8f0efb020064abbd941045584
});
