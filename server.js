const express = require("express");
const server = express();

const PORT = 3000;
const host = "127.0.0.1";

const router = require("./routes/routes");

const session = require("express-session");

let sesionsOption = {
  secret: "fuck you",
  saveUninitialized: true,
  resave: false,
  name: "session_id",
  cookie: {
    secure: false
  }
};

server.use(session(sesionsOption));

server.use(logger);

server.use("/", router);

server.use("/public", express.static("public"));

function logger(req, res, next) {
  // if(err) return;
  if (req.url === "/") {
    console.log(new Date().toLocaleDateString());
  }

  next();
}

server.listen(PORT, host, () => {
  console.log(`server is  running on ${host}:${PORT}`);
});
