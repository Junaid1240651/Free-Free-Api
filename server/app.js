const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const { userRemoverJob } = require("./scheduler/userDailyRemoveScheduler");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/resourceRoute");

app.use(userRoute);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connected to database");
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));
