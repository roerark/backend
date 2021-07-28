const Users = require("./users-model");
const bcrypt = require("bcryptjs");

const verifyLogin = (req, res, next) => {
  const { username, password } = req.body;
  Users.findBy({ username }).then(([user]) => {
    if (user && bcrypt.compareSync(password, user.password)) {
      next();
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  });
};

async function checkUsernameFree(req, res, next) {
    try {
      const users = await Users.findBy({ username: req.body.username });
      if (!users.length) {
        next();
      } else {
        next({ message: "Username taken", status: 422 });
      }
    } catch (err) {
      next(err);
    }
  }

  module.exports = {
      verifyLogin,
      checkUsernameFree
  }