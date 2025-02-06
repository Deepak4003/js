const marvelhero=["thor" ,"ironmen","Spiderman"]
const dc=["superman","flash","batmman"]
// marvelhero.push(dc)
const allhero=marvelhero.concat(dc)
console.log(allhero)


const allnewhero=[...marvelhero,...dc]
console.log(allnewhero)
const anotherarr=[1,2,3,[4,5,6],7,,[6,7,8,[4,5]]]
const realarr=anotherarr.flat(Infinity)
console.log(realarr)



console.log(Array.isArray("deepak"))

console.log(Array.from("deepak"))

console.log(Array.from({name:"deepak"}))//intresting

let score=100;
let score2=101;
let score3=103;
console.log(Array.of(score,score2,score3))
