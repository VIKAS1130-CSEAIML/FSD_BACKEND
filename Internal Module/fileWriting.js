const fs = require('node:fs')
let ans = "Hello, how are you";
fs.writeFileSync("./output.txt",ans)

ans += "\n I am good !" ;
fs.writeFileSync("./output1.txt",ans)