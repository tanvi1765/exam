const { cart } = require("../models");

const createcart = async (reqBody) => {
  return cart.create(reqBody);
};

const getcartlist = async (req, res) => {
  return cart.find();
};

const getcartId = async (userId) => {
  return cart.findById(userId);
};

const deletecart = async (userId) => {
  return cart.findByIdAndDelete(userId);
};

module.exports = {
  createcart,
  getcartlist,
  getcartId,
  deletecart,
};
