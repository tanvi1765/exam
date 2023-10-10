const express = require("express");
const { productvalidation } = require("../validations");
const { productController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create product */
router.post(
  "/create-product",
  validate(productvalidation.createproduct),
  productController.createproduct
);

/** Get product list */
router.get(
  "/list",
  productController.getproductList
);

/** Get product details by id */
router.get(
  "/get-details/:productId",
  productController.getproductDetails
);
/** Delete product */
router.delete(
  "/delete-product/:productId",
  productController.deleteproduct
);

module.exports = router;
