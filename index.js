const currentDateElement = document.getElementById("currentDate");
const currentTimeElement = document.getElementById("currentTime");
const currentSecondsElement = document.getElementById("currentSeconds");

currentDateElement.textContent = new Date().toDateString();
currentTimeElement.textContent = new Date().toLocaleTimeString();
currentSecondsElement.textContent = new Date().getSeconds();
    
   