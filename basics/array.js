//array
//in js array are resizablr
//we can store multiple data type in array
//array cannt be access through arbitary
//array in js always make shallow copy(whoes property share the same reference)
//deep copy(dont share the same refrence)

const myarray=[1,2,3,4]
const myhero=["hiii","hello"]
const myarr2=new Array(1,2,3,4)
// console.log(myarray[0]);

//array methods
myarray.push(6)//push the value in array

myarray.pop()//pop the element
myarray.unshift(0)//add 0 at begin
myarray.shift()
// console.log(myarray)
// console.log(myarray.includes(9));//also use index.


const newarrr=myarray.join()
// console.log(myarray)
// console.log(typeof newarrr)

//slice,splice
console.log("A",myarray)
const myn1=myarray.slice(1,3)//array not change and the value are print index 1 and 2
console.log(myn1);
console.log("B",myarray)



const myn2=myarray.splice(1,3)//change the array and the values print from index 1 to 3
console.log("c",myarray)
console.log(myn2);