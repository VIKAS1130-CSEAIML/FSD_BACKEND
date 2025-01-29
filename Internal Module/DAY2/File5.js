const fs = require("fs");

const cb = (err, data) =>{
    if(err) console.log("error.....!");
    else console.log(data)

}
const myReadFile = () =>{

const data = fs.readFile("./dummy.txt", "utf-8", cb);
console.log(data)
}
module.exports = myReadFile;