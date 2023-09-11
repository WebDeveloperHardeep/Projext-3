const endDate = "11 September 2023 10:43 pm"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
// const clock = () =>{

// }
 
    function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    if(diff < 0)return; /// remove negtive valuess
    console.log(diff)
    inputs[0].value = Math.floor(diff / 3600 / 24)
    inputs[1].value = Math.floor(diff / 3600 )% 24
    inputs[2].value = Math.floor(diff / 60 )% 60
    inputs[3].value = Math.floor(diff)% 60


    // Convert into days
}

// function call 
clock()

/*  
     1 day - 24 hrs
     1 hr - 60 mint
     60 mint - 3600 sec
*/ 
setInterval(()=>{
    clock()
},1000)