const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/crud", require("./routes/crudRoutes.js"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server has been run in ${PORT} port`));
