//primitive data type
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid)

//stack memory(primitive) ,heap memory(non primitive)

let myyoutube = "Deepakjangid"//goes in stack
let anothername = myyoutube
anothername = "chaiaurcode"//its change in copy of value not in real value so treal value remai same
console.log(anothername)
console.log(myyoutube)



let userone={
    email:"dee@gmail.com",
    upi:"@ybl"
}
let usertwo=userone
usertwo.email="hiiii";
console.log(usertwo)