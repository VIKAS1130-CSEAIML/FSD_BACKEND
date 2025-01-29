const http = require("http")

const newServer = http.createServer(async (req, res)=>{
    console.log(req);
   res.write("Hello");
//    res.setHeader("content-type", "text/html")
//    console.log("------->",req.url);
   
//     const fetchResponse = await fetch("https://dummyjson.com/products/1");
//     console.log(fetchRespons)
//     const data = await fetchResponse.json();
//     console.log("data", data);

   res.end("<h1 style=color:red> Hello</h1>");

});

newServer.listen(1100, ()=>{
 console.log("Server Runing !");
//     const addr = server.address();
//     console.log("server runing on port is :", addr.port)

 })
