

let myHeros=["thor","spiderman"]
let heroPower={
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.rishabh=function(){
    console.log(`Rishabh is present in all objects`)
}
heroPower.rishabh()
myHeros.rishabh()

String.prototype.trueLength=function(){
    console.log(this.trim().length)
}
let myName="Rishabh  "
let mCourse="Javascript  "
myName.trueLength()

//inheritence

const user={
    name:'chai',
    email:'chai@google.com'
}

const teacher={
    makeVideo:true
}

const student={
    subject:'javascript',
    __proto__:teacher
}

Object.setPrototypeOf(student,teacher)