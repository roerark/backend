const router = require("express").Router();
const bcrypt = require("bcryptjs");
const tokenBuilder = require('../middleware/token-builder')

const { verifyLogin, checkUsernameFree } = require("./users-middleware.js");
const Users = require("./users-model.js");

router.get("/", (req, res, next) => {
  Users.findAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(next);
});

router.post("/login", verifyLogin, (req, res, next) => {
  const {username} = req.body
    
  Users.findBy({username})
  .then(([user]) => {
      const token = tokenBuilder(user)
      const user_id = user.user_id
      res.json({
          message: `Login successful`,
          user_id,
          token 
      })
  })
  .catch(next)
});

router.post('/register', checkUsernameFree, (req, res, next) => {
  const {username, password, location_id} = req.body
  const hash = bcrypt.hashSync(password, 8);

    Users.add({ username, password: hash, location_id })
      .then((saved) => {
        res.status(201).json(saved);
      })
      .catch(next);
})

module.exports = router;