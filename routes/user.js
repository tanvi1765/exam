const express = require("express");
const { uservalidation } = require("../validations");
const { userController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create user */
router.post(
  "/create-user",
  validate(uservalidation.createuser),
  userController.createuser
);

/** Get user list */
router.get(
  "/list",
  userController.getuserList
);

/** Get user details by id */
router.get(
  "/get-details/:userId",
  userController.getuserDetails
);

/** Delete user */
router.delete(
  "/delete-user/:userId",
  userController.deleteuser
);

module.exports = router;
