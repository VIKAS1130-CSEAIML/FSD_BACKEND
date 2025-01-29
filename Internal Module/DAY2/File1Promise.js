const fsPromises = require("fs/promises");

const myReadFile = async() =>{
   const res = await fsPromises.readFile("./dummy.txt", "utf-8");
   //console.log(res);
//    res.then((data) => {
//     console.log(data)
//    });
//    res.catch(() => {
//     console.log("Error.....");
//    });

console.log(res);
}

myReadFile();