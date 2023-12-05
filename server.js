import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

const app = express();
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import usersPosts from "./routes/users.js";
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoutes);
app.use("/api/users", usersPosts);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Connected");
});
