//Immediately Invoked Function Expressions
//used to remove global scope pollution

(function chai(){
    console.log('Connected')
});
// in-order to use two IIFE function use a semicolon
((name)=>{
    console.log(`DB connected ${name}`)
})()