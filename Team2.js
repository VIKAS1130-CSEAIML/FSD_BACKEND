
// const data = require("./Team1.js");
// const {add, mul} = require("./Team1.js");

// console.log(mul(10,20));

const {add} = require("./Team1.js");
// const arr = [10,20,30,40];

const calculateArraySum = (input) => {
    let sum =0;
    const temp = (a) =>{
        sum = add(a,sum);
    };


    input.forEach(temp); // callback Function

    return sum;
};

module.exports = {
    calculateArraySum : calculateArraySum
}

