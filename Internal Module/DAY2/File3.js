const fs = require("fs");

const myReadFile = () =>{

const data = fs.readFileSync("./dummy.txt", "utf-8");
return data;
}
module.exports = myReadFile;