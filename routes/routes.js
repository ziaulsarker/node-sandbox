const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
  res.sendFile(path.resolve("./views/index.html"));
});

router.post("/", (req, res, next) => {
  if (req.session) {
    let { session } = req;
    session.user = {
      name: req.body.name,
      email: req.body.email
    };
  }
  res.status(200).send("OK");
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
