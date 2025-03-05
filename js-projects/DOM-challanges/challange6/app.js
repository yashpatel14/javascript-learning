
function dateTime() {
    
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("now-date");
    
    const now = new Date();
    const hours = now.getHours() % 12 || 12
    const minutes = now.getMinutes().toString().padStart(2,"0")
    // minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = now.getSeconds().toString().padStart(2,"0")

    const options = {
        weekday: "long",
        year: "numeric",
        day: "numeric",
        month: "long",
      };
    
    timeElement.textContent = `${hours}:${minutes}:${seconds}`
    dateElement.textContent = now.toLocaleDateString(undefined,options)

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    document.querySelector('.second').style.transform = `rotate(${secondsDegrees}deg)`;

  const minsDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  document.querySelector('.minute').style.transform = `rotate(${minsDegrees}deg)`;

  const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
  document.querySelector('.hour').style.transform = `rotate(${hourDegrees}deg)`;
}



setInterval(dateTime,1000)
dateTime()


// console.log(timeElement);

