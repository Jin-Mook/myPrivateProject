// 디지털 시계 만들기
const clock = document.querySelector("#clock");

function showClock() {
    const today = new Date();
    let second = today.getSeconds();
    let minute = today.getMinutes();
    let hour = today.getHours();
    
    second = (second<10) ? "0"+second :second;
    minute = (minute<10) ? "0"+minute :minute;
    hour = (hour<10) ? "0"+hour :hour;
    
    const clockTable = `${hour}:${minute}:${second}`;
    clock.textContent = clockTable; 
}

showClock()
setInterval(showClock, 1000);