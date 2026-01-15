import productService from "../services/productService.js";
const getProducts = (req, res) => {
  const brand = req.query.brand;
  const response = productService.getProduct(brand);
  res.json(response);
  return;
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  const response = productService.productById(productId);
  res.send(response);
  return;
};
const updateProduct = (req, res) => {
  const response = productService.uProductById();
  res.status(202).send(response);
  return;
};
const deleteProduct = (req, res) => {
  console.log("Deleted a product");
  res.status(200).send("Product Deleted!");
};
const createProduct = (req, res) => {
  productService.createProduct(req.body);
  res.send("Products created");
};
export default {
  getProducts,
  updateProduct,
  getProductById,
  deleteProduct,
  createProduct,
};
