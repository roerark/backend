const db = require("../data/dbconfig");

function findAll() {
  return db("users as u")
    .leftJoin("locations as l", "u.location_id", "l.location_id")
    .select("u.user_id", "u.username", "l.location_name");
}

function findBy(filter) {
  return db("users as u")
    .leftJoin("locations as l", "u.location_id", "l.location_id")
    .where(filter)
    .orderBy("u.user_id");
}

function findByID(user_id) {
  return db("users as u")
    .leftJoin("locations as l", "u.location_id", "l.location_id")
    .select("u.user_id", "u.username", "l.location_name")
    .where( 'u.user_id', user_id )
    .first();
}

async function add(user) {
  const [user_id] = await db("users").insert(user, "user_id");
  return db("users")
    .where({ user_id })
    .select("u.user_id", "u.username", "l.location_name");
}

function update(user) {
  return db("users").where({ user_id: user.user_id }).update(user);
}

function remove(user_id) {
  return db("users").where({ user_id }).del();
}

module.exports = {
  findAll,
  findBy,
  findByID,
  add,
  update,
  remove,
};
