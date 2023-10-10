const express = require("express");
const { categoryvalidation } = require("../validations");
const { categoryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  validate(categoryvalidation.createcategory),
  categoryController.createcategory
);

/** Get category list */
router.get(
  "/list",
  categoryController.getcategoryList
);

/** Get category details by id */
router.get(
  "/get-details/:categoryId",
  categoryController.getcategoryDetails
);
/** Delete category */
router.delete(
  "/delete-category/:categoryId",
  categoryController.deletecategory
);

module.exports = router;
