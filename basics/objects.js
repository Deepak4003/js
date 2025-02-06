//singleton

//object litreals
const mysum=Symbol("key1")
const JsUser={
    name:"Deepak",
    "fullname":"Deepak jangid",
    [mysum]:"my key1",
    Location:"jaipur",
    email:"Deepak@gmail.com",
    islogeedin:false,
    lastlogin:["monday","saturday"]
}

// console.log(JsUser.email)

// console.log(JsUser["fullname"])
// console.log(JsUser["email"])
// console.log(JsUser[mysum])


JsUser.email="Jangiddee99@gmail.com"//change the email
Object.freeze(JsUser)//freeze the object so no one change the value
// console.log(JsUser)


JsUser.greeting=function(){
    console.log(`Hello JS User`,$(this.name))
}
console.log(JsUser.greeting())
console.log(JsUser.greeting)