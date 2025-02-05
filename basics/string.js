const name="Deepak"
const repocount= 50

//console.log(name+repocount+"value");
console.log(`hello my name is${name} and my repocount is${repocount}`)//modern way of string

const gamename =new String('Deepak')//very helpfull

console.log(gamename[0])
console.log(gamename.__proto__);

//check methods of string go mnd at read article

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));


const newstring =gamename.substring(0,4)
console.log(newstring)


const anotherstring=gamename.slice(-3,4)//give string from back
console.log(anotherstring)