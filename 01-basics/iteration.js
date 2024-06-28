 const coding=['js','python','java','cpp','ruby']
 const arr=[
    {
        language:'js'
    },
    {
        language:'python'
    },
    {
        language:'java'
    },
    {
        language:'ruby'
    }
 ]

//  arr.forEach((obj)=>(console.log(obj.language)))
//  coding.forEach(function(item){
//     console.log(item)
//  })

//coding.forEach((item,index,arr)=>(console.log(item,index,arr)))

// coding.forEach((item)=>(printMe(item)))

// function printMe(item){
//     console.log(item)
// }

const num=[1,2,3,4,5,6,7,8]
//const newnum=num.filter((num)=>(num>4))
const newnum=num.filter((num)=>{return num>4})
console.log(newnum)