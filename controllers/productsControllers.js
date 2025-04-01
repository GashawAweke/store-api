const product = require('../models/productModels');

const getAllProductsStatic = async (req, res) => {
  const products = await product.find({ featured: true });
  res.status(200).json({ products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  console.log(req.query);
  const products = await product.find(req.query);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
