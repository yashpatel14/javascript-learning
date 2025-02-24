
const textColor = document.getElementById("mainHeading")

function changeColor(color){
    console.log(color);
    if(color=='red'){
        textColor.style.color = color
    }else if(color=='green'){
        textColor.style.color = color
    }else if(color=='blue'){
        textColor.style.color = color
    }else if(color=='purple'){
        textColor.style.color = color
    }else{
        textColor.style.color = ""
    }
}