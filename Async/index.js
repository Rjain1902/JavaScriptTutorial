//javasscript synchronus and single threated
//execution  context 
        //Each operation one for previous one to execute

//Blocking Code 

    //Block the flow of program -> Read file sync
    
//vs Non Blocking Code
    //Do not block the flow  -> Read file async  

//Depend on the use case 
const sayRishabh=function(){console.log('Rishabh')}
const changeText=function(){
    document.querySelector('h1').
    innerHTML='best JS series'
}
const btn=document.querySelector('#stop')
const timeOut=setTimeout(changeText,2000)
btn.addEventListener('click',function(){
    console.log('TIme out stopped')
    clearTimeout(timeOut)
})
