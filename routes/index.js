const express = require("express");
const router = express.Router();


const cartRoute = require("./cart");
router.use("/cart", cartRoute);

const categoryRoute = require("./category");
router.use("/category", categoryRoute);

const productRoute = require("./product");
router.use("/product", productRoute);

const userRoute = require("./user");
router.use("/user", userRoute);

module.exports = router;
