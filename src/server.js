import express from "express";
import bodyParser from "body-parser";

import config from "./config/config.js";
import productRoutes from "../src/routes/ProductRoute.js";
const server = express();

server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.status(200).json({
    port: config.port,
    version: config.version,
  });
});
server.get("/not-found", (request, response) => {
  response.status(404).send("page not found");
});
server.post("/", (req, res) => {
  res.status(201).send("Data created");
});
server.put("/", (req, res) => {
  res.status(201).send("Data updated successfully");
});

server.use("/products", productRoutes);
server.listen(config.port, () => {
  console.log(`server running at port ${config.port}`);
});
