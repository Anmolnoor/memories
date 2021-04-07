import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyparser.json({ limit: "30mb", extends: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const Connection_url =
  "mongodb+srv://admin_anmol:admin@anmol@memories.htzem.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const port = process.env.port || 5000;

mongoose
  .connect(Connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`server Running On Port : ${port}`)))
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
