process.env.NODE_ENV = "development";

import http from "http";
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoute.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const __dirname = path.resolve();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use(express.static("public"));

app.use("/api/users", userRoutes);

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose.connect(process.env.MONGO_DB_URI, {})
  .then(() => {
    console.log(
      "=================DB connected successfully===================="
    );
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

//

server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
