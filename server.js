const express = require("express");
const server = express();

const PORT = 3000;
const host = "127.0.0.1";

const router = require("./routes/routes");

server.use(logger);

server.use("/", router);


server.use("/public", express.static("public"));

function logger(req, res, next){
  // if(err) return;
  if(req.url === "/") {

    console.log(new Date().toLocaleDateString());
  }


  next();
  // console.log(`${}`)

}





server.listen(PORT, host, () => {
  console.log(`server is  running on ${host}:${PORT}`);
});
