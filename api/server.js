const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
const UsersRouter = require("./users/users-router");
server.use("/api/users", UsersRouter);
// note for other releases: use for when you want a main page
// server.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client', 'index.html'));
//   });
server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});
server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    contact_alex: `He's got the bug spray`,
    message: err.message,
    stack: err.stack,
  });
});
module.exports = server;
