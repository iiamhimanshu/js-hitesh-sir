const clock = document.querySelector("#clock");

// setInterval se ek use function hum likhe ge aur jo time interval denge wo har uss time interval ke baad chale ga

setInterval(function(){
    // ==> here we are creating date object from here we can extract date and time 
    let date = new Date();
    // console.log(date);
    // ==> this will give us just the time
    // console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString();

} , 1000)