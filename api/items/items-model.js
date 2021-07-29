const db = require("../data/dbConfig.js");

function getAllItems() {
  return db("items as i")
    .leftJoin("locations as l", "i.location_id", "l.location_id")
    .leftJoin("users as u", "u.user_id", "i.user_id")
    .select(
      "i.name",
      "i.description",
      "i.photo_url",
      "i.price",
      "i.item_id",
      "l.location_name",
      "u.username"
    );
}

function getItemById(item_id) {
  return db("items as i")
    .leftJoin("locations as l", "i.location_id", "l.location_id")
    .leftJoin("users as u", "u.user_id", "i.user_id")
    .select("i.*", "l.location_name", "u.username")
    .where("i.item_id", item_id)
    .first();
}

function getItemsByUser(user_id) {
  return db("items as i")
    .leftJoin("locations as l", "i.location_id", "l.location_id")
    .leftJoin("users as u", "u.user_id", "i.user_id")
    .where("u.user_id", user_id)
    .select(
      "i.name",
      "i.description",
      "i.photo_url",
      "i.price",
      "i.item_id",
      "l.location_name",
      "u.username"
    );
}

function getItemByLocation(location_id) {
  return db("items as i")
    .leftJoin("locations as l", "i.location_id", "l.location_id")
    .leftJoin("users as u", "u.user_id", "i.user_id")
    .where("l.location_id", location_id)
    .select(
      "i.name",
      "i.description",
      "i.photo_url",
      "i.price",
      "i.item_id",
      "l.location_name",
      "u.username"
    );
}

async function addNewItem(item) {
  const [item_id] = await db("items").insert(item, "item_id");
  return db("items as i")
    .leftJoin("locations as l", "i.location_id", "l.location_id")
    .leftJoin("users as u", "u.user_id", "i.user_id")
    .select("i.*", "l.location_name", "u.username")
    .where("i.item_id", item_id);
}

function updateItem(item) {
  return db("items").where({ item_id: item.item_id }).update(item);
}

function removeItem(item_id) {
  return db("items").where({ item_id }).del();
}

module.exports = {
  getAllItems,
  getItemById,
  getItemByLocation,
  getItemsByUser,
  addNewItem,
  updateItem,
  removeItem,
};
