function sum(a,b)
{
    console.log("Calculating sum...");
    return a+b ;
}
function multiply(a,b)
{
    console.log("Calculating sum...");
    return a*b ;
}
const Obj  = {
            add : sum,
            mul : multiply
}


module.exports = Obj;