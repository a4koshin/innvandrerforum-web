import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoute";
import authRouter from "./routes/authRoute";
import newsRouter from "./routes/newsletterRoute";
dotenv.config();
const app = express();

const port = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

//Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/newsletter", newsRouter);

// server start
app.listen(port, () => {
  console.log("Server is running on port ", port);
});
