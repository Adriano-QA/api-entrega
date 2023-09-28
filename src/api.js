const express = require("express");
const serverless = require("serverless-http");
const entrega = require("./data/entrega.json")

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json(entrega);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
