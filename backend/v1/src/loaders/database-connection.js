const mongoose = require("mongoose");

// const db = mongoose.connection;
// db.once("open", () => {
//   console.log("Database connected successfully.");
// });
const connectDatabase = async () => {
  await mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log("Database connected successfully.");
};

module.exports = {
  connectDatabase,
};
