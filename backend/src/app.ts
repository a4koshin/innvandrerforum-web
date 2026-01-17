import express from "express";
import dotenv from "dotenv";
import cors from "cors";
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

// server start
app.listen(port, () => {
  console.log("Server is running on port ", port);
});
