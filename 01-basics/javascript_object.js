//singleton
//literalls doesn't make singleton
//constructor make singleton

//object literals
Object.create()//constructor method create singleton object
const abc={}
const mySym=Symbol("key1")
const user={
    [mySym]:"mykey1"
}
console.log(user[mySym])
Object.freeze(user)


const tinderuser=new Object()  //create singleton object

const regularUser={
    email:'rishabh@gmail.com',
    fullname:{
        userFullName:{
            firstname:'hitesh',
            lastname:'choudhary'
        }
    }
}

//optional chaining ?
const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3={5:'e',6:'f'}

const obj4=Object.assign({},obj1,obj2,obj3)
