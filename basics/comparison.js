console.log(2>1)//result gives as a bool
//when you compare two operands then both must be same type
// avoid these type of conversion
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true bcz comparison convert null to a number treating as a zero

console.log("2"===2)//strict check
