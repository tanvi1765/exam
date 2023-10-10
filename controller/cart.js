const {cartservice} = require("../services");

/** create cartservice */
const createcart = async (req, res) => {
  try {
    const reqBody = req.body;
    const cartExists = await cartservice(reqBody.cart_name);
    if (cartExists) {
      throw new Error("cart already created by this cart service!");
    }

    const cart = await cartservice.createcart(reqBody);

    res.status(200).json({
      success: true,
      message: "cart create successfully!",
      data: { cart },
    });
  } catch (error) {
    res.status(400).json({
       success: false,
       message: error.message });
  }
};

/** Get cart list */
const getcartList= async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Get cart list successfully!",
      data: getcartlist,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
       message: error.message });
  }
};

/** Delete cart user */
const deletecart = async (req, res) => {
  try {
    const userId = req.params.userId;
    const cartExists = await cartservice.getuserById(cartId);
    if (!cartExists) {
      throw new Error(" cart User not found!");
    }

    await cartservice.deletecart(cartId);

    res.status(200).json({
      success: true,
      message: " cart User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message });
  }
};

/* update cart  */
const updatecart = async (req, res) => {
  try {
    const cartId = req.params.cartId;

    const cateExists = await cartservice.getcartById(cartId);
    if (!cateExists) {
      throw new Error("cart not found!");
    }

    await cartservice.updateDetails(cartId, req.body);

    res.status(200).json({
      success: true,
      message: "cart details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Get cart details by id */
const getcartDetails = async (req, res) => {
  try {
    const getcartDetails = await cartservice.getcartById(req.params.cartId
      );
    if (!getDetails) {
      throw new Error("cart not found!");
    }

    res.status(200).json({
      success: true,
      message: "User cart get successfully!",
      data: getcartDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createcart,
  getcartList,
  deletecart,
  updatecart,
  getcartDetails
};