const express = require("express");
const { cartvalidation } = require("../validations");
const { cartController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create cart */
router.post(
  "/create-cart",
  validate(cartvalidation.createcart),
  cartController.createcart
);

/** Get cart list */
router.get(
  "/list",
  cartController.getcartList
);

/** Get cart details by id */
router.get(
  "/get-details/:cartId",
  cartController.getcartDetails
);
/** Delete cart */
router.delete(
  "/delete-cart/:cartId",
  cartController.deletecart
);

module.exports = router;
