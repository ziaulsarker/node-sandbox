const express = require("express");
const server = express();

const PORT = 3000;
const host = "127.0.0.1";

const router = require("./routes/routes");

server.use("/", router);

server.use("/public", express.static("public"));

server.listen(PORT, host, () => {
  console.log(`server is  running on ${host}:${PORT}`);
});
