const router = require("express").Router();
const {
  verifyItemExists,
  validateItemContent,
  validateEditContent,
} = require("./items-middleware");

const Items = require("./items-model");

router.get("/", (req, res, next) => {
  Items.getAllItems()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch(next);
});

router.get("/item_id/:item_id", verifyItemExists, (req, res, next) => {
  Items.getItemById(req.params.item_id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch(next);
});

router.get("/user_id/:user_id", (req, res, next) => {
  Items.getItemsByUser(req.params.user_id)
    .then((items) => {
      res.status(200).json(items);
    })
    .catch(next);
});

router.get("/location_id/:location_id", (req, res, next) => {
  Items.getItemByLocation(req.params.location_id)
    .then((items) => {
      res.status(200).json(items);
    })
    .catch(next);
});

router.post("/", validateItemContent, (req, res, next) => {
  Items.addNewItem(req.body)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch(next);
});

router.put("/", validateEditContent, (req, res, next) => {
  Items.updateItem(req.body)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch(next);
});

router.delete("/:item_id", verifyItemExists, (req, res, next) => {
  Items.removeItem(req.params.item_id)
    .then(() => {
      res.status(201).json({ message: "Item has been deleted" });
    })
    .catch(next);
});

module.exports = router;
