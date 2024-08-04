const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const appRouter = require("./routes/routes");
const handleErrors = require("./middlewares/errorHandler");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/api/v1", appRouter);

// handling error
app.use(handleErrors);

module.exports = app;
