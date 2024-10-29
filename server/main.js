import express from "express";
import userRoute from "./routes/task.route.js";
import connectDb from "./lib/db.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
dotenv.config();

const app = express();
const __dirname = path.resolve();

const PORT = 6969;

app.use(cors());

//Data Middle-ware
app.use(express.json());
app.use(express.urlencoded({ extented: true }));
//Connect Db
connectDb();

app.get("/", (req, res) => {
  res.json({ msg: "Hello Users Welcome to My App !" });
});

//Middleware
app.use("/user", userRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`The Server is Running at http://localhost:${PORT}`);
});
