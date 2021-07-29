const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const restricted = require("./middleware/restricted");
const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
const UsersRouter = require("./users/users-router");
const ItemsRouter = require("./items/items-router");
server.use("/api/users", UsersRouter);
server.use("/api/items", restricted, ItemsRouter);
// note for other releases: use for when you want a main page
// server.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client', 'index.html'));
//   });
server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});
// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    contact_alex: `He's got the bug spray`,
    message: err.message,
    stack: err.stack,
  });
});
module.exports = server;
