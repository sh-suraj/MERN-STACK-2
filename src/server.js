import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
const VERSION = process.env.VERSION;

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({
    port: PORT,
    version: VERSION ,
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

server.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
