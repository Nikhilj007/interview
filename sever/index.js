import Express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";
import Cors from "cors";

dotenv.config();

const app = new Express();
app.use(Express.json());
app.use(Cors());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err)=>console.log(err))

app.use(router);

app.listen(process.env.PORT | 5000, () =>
  console.log(`Server running on port 5000`)
);
