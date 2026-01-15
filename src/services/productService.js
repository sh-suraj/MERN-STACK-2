import fs from "fs";
const sproduct = () => {
  const rawdata = fs.readFileSync("./src/models/products.json", "utf8");
  const products = JSON.parse(rawdata);
  const filteredProducts = products.filter((rawdata) => rawdata.price < 50);

  return filteredProducts;
};
const productById = (productId) => {
  const med = fs.readFileSync("./src/models/products.json", "utf8");
  const products = JSON.parse(med);
  const filteredProducts = products.find((med) => med.id == productId);

  return filteredProducts;
};
const uProductById = () => {
  const rawdata = fs.readFileSync("./src/models/products.json", "utf8");
  const products = JSON.parse(rawdata);
  const filteredProducts = products.filter((rawdata) => rawdata.id == "MED002");

  return filteredProducts;
};

export default { sproduct, productById, uProductById };
