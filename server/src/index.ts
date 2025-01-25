import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import blogRoutes from "./routes/blogRoutes/blogRoute";
import cartRoutes from "./routes/shoppingRoutes/cartRoutes";
// import chatRoutes from "./routes/blogRoutes/blogRoute";
import productRoutes from "./routes/shoppingRoutes/productRoutes";
import logger from "./middlewares/logger";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/blog", blogRoutes);
// app.use("/api/chatRoutes"); // add controller name also
app.use("/api/shoppingRoutes", productRoutes); // add controller name also

app.use("/api/shoppingRoutes/cart", cartRoutes); // add controller name also
app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
