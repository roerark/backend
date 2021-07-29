const Items = require("./items-model");

function verifyItemExists(req, res, next) {
  const item_id = req.params.item_id;

  Items.getItemById(item_id)
    .then((item) => {
      if (item) {
        req.item = item;
        next();
      } else {
        res.status(404).json({ message: "Item Not Found." });
      }
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
}

function validateEditContent(req, res, next) {
  if (
    req.body.name === null ||
    req.body.price === null ||
    req.body.user_id === null ||
    req.body.location_id === null ||
    req.body.name === "" ||
    req.body.price === "" ||
    req.body.user_id === "" ||
    req.body.location_id === ""
  ) {
    res.status(400).json({
      message:
        "The following fields are not allowed to be null: name, price, location_id and user_id",
    });
  } else {
    next();
  }
}

function validateItemContent(req, res, next) {
  if (
    !req.body.name ||
    !req.body.price ||
    !req.body.user_id ||
    !req.body.location_id
  ) {
    res.status(400).json({
      message:
        "The following fields are not allowed to be null: name, city, country, price, location_id and user_id",
    });
  } else {
    next();
  }
}

module.exports = {
  verifyItemExists,
  validateItemContent,
  validateEditContent,
};
