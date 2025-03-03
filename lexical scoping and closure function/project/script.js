
(function () {
let createButton = document.getElementById("creat-button")
let allButtonList = document.getElementById("button-container")
let dropdown = document.getElementById("color-list");


function createColorOPtion() {
    
    const colors = [
        { name: "Red", code: "#FF0000" },
        { name: "Green", code: "#008000" },
        { name: "Blue", code: "#0000FF" },
        { name: "Yellow", code: "#FFFF00" },
        { name: "Orange", code: "#FFA500" },
        { name: "Purple", code: "#800080" },
        { name: "Pink", code: "#FFC0CB" },
        { name: "Brown", code: "#A52A2A" },
        { name: "Black", code: "#000000" },
        { name: "White", code: "#FFFFFF" },
        { name: "Gray", code: "#808080" },
        { name: "Cyan", code: "#00FFFF" },
        { name: "Magenta", code: "#FF00FF" },
        { name: "Lime", code: "#00FF00" },
        { name: "Teal", code: "#008080" },
        { name: "Indigo", code: "#4B0082" },
        { name: "Violet", code: "#EE82EE" },
        { name: "Gold", code: "#FFD700" },
        { name: "Silver", code: "#C0C0C0" },
        { name: "Beige", code: "#F5F5DC" }
    ];

    const dropdown = document.getElementById("color-list");

    colors.forEach((color) => {
        let createOption = document.createElement("option");
        createOption.value = color.code;
        createOption.textContent = color.name;
        createOption.style.backgroundColor = color.code; 
        dropdown.appendChild(createOption);
    });

    
}

createButton.addEventListener("click",createButtonList)


function createButtonList() {
    // let selectedValue = dropdown.code
    var selectedValue = dropdown.value;
    if (selectedValue === "") {
        allButtonList.innerHTML = "";
        document.body.style.backgroundColor = "#f4f4f4"; 
        return; 
    }
    var selectedName = dropdown.options[dropdown.selectedIndex].text;

    let existingButtons = allButtonList.getElementsByTagName("button");
    // console.log(existingButtons);
    for (let i = 0; i < existingButtons.length; i++) {
        if (existingButtons[i].innerText === selectedName) {
            alert("Button for this color already exists!");
            return; 
        }
    }

    let newButton = createButtons(selectedValue,selectedName)
    allButtonList.appendChild(newButton);
}

function createButtons(colorCode,colorName) {
    
    let button = document.createElement("button")
    button.innerText = colorName
    button.classList.add("button")
    button.style.backgroundColor = colorCode
    button.style.marginLeft = "10px"
    button.addEventListener("click",function () {
        document.body.style.backgroundColor = colorCode;
    })

    return button
}

createColorOPtion()

})();
