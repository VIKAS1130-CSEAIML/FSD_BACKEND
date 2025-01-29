const fs = require("node:fs")

// const data1 = fs.readFileSync("./output.txt");
const data = fs.readFileSync("./result.txt" );
console.log(data.toString());