const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT;

async function main() {
  // start the server
  app.listen(PORT, () => {
    console.log(`Server is Listening on Port ${PORT}`);
  });

  // connect to mongoDB database
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log("database error: ", err);
      process.exit(1);
    });
}

// {
//   useNewUrlParse: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// }

main();

// handle uncaught exception
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception 🔥:", err);
  process.exit(1);
});

// handle unhandled rejection
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at 🔥:", promise, "reason:", reason);
  process.exit(1);
});
