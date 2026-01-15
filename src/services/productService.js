import fs from "fs";
const med = fs.readFileSync("./src/models/products.json", "utf8");
const products = JSON.parse(med);

const getProduct = (query) => {
  const foundProduct = products.filter((med) => med.brand == query);
  return foundProduct;
};

const productById = (productId) => {
  const filteredProducts = products.find((med) => med.id == productId);
  return filteredProducts;
};

const uProductById = () => {
  const filteredProducts = products.filter((med) => med.id == "MED002");

  return filteredProducts;
};

export default { getProduct, productById, uProductById };
