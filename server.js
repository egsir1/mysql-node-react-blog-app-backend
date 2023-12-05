import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express();
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import usersPosts from "./routes/users.js";
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req?.file;
  res.status(200).json(file?.filename);
});

app.use("/api/posts", postRoutes);
app.use("/api/users", usersPosts);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Connected");
});
