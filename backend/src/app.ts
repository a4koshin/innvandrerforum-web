import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoute";
import authRouter from "./routes/authRoute";

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

// server start
app.listen(port, () => {
  console.log("Server is running on port ", port);
});
