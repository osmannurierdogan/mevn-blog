const { connectDatabase } = require("./database-connection.js");

module.exports = () => {
  connectDatabase();
};
