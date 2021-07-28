const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');
function tokenBuilder(user) {
  const payload = {
    username: user.username
  };
  const options = {
   expiresIn: '3d',
  };
  const token = jwt.sign(
    payload,
    JWT_SECRET,
    options,
  );
  return token;
}
module.exports = tokenBuilder