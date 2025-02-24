const themeButton = document.getElementById("toggleButton")

themeButton.addEventListener("click",()=>{
    const bulb = document.getElementById("bulb");
    const body = document.getElementById("body");
    const toggleButton = document.getElementById("toggleButton");
    const status = document.getElementById("status");

    if(bulb.classList.contains('off')){

        bulb.classList.remove('off')
        body.classList.add('dark-mode')
        toggleButton.innerText = "Turn On"
        status.innerText = "Status: On"
    }else{

        bulb.classList.add('off')
        body.classList.remove('dark-mode')
        toggleButton.innerText = "Turn Off"
        status.innerText = "Status: Off"
    }


})