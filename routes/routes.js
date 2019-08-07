const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const router = express.Router();

router.use(bodyParser.json());

router.get("/", (req, res, next) => {
  res.sendFile(path.resolve("./views/index.html"));
});

router.post("/", (req, res, next) => {
  console.log("post requested", req.body);
  res.send("OK");
});

router.get("/users/", function(req, res) {
  res.json([
    {
      name: "ziaul",
      learning: "FullStack with Node and React"
    },
    {
      name: "Mike",
      learning: "Learning nothing at the moment"
    }
  ]);
});

router.get("/new", (req, res) => {
  res.send(`hello ${req.query.name}`);
});

module.exports = router;
