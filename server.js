const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/crud", require("./routes/crudRoutes.js"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server has been run in ${PORT} port`));
