const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const PORT = 8000;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
const dotenv = require("dotenv");

dotenv.config({ path: 'local.env' });

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
