const http = require("http")
const fsPromises = require("fs/promises")

const newServer = http.createServer(async (req, res) => {
  // console.log(req);
  if (req.url == '/') {
    //res.end("<h1 style=color:red> Hello</h1>");
    const data = await fsPromises.readFile("./homepage.html");
    res.end(data);
  }
  else if (req.url == '/about') {
    const ab = await fsPromises.readFile("./about.html");
    res.end(ab);
  }
  else {
    res.end("Opps ....! not Found ")
  }
});

newServer.listen(1100, () => {
  console.log("Server Runing !");

})