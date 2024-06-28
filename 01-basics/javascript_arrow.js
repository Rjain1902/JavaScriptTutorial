// function inner(){
//     let username='rishabh'
//      const outer={
        
//          inner:()=>{
//             console.log(this.username)
//         }
        
//     }

// }

// inner()

//with curly braces use return statement
const addTwo=(num1,num2)=>{ 
    return num1+num2
}

// with brackets  u don't use return statement
const addOne=(num1,num2)=>(num1+num2)

const add=(num1,num2)=>({username:'hitesh'}) // objects need to be wrapped inside braces