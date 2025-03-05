const toggleButton = document.querySelector('.toggle-btn')
const closeButton = document.querySelector('.close-btn')
const menuItem = document.querySelectorAll('.menu-item')

toggleButton.addEventListener("click",function () {
    const button = document.querySelector(".panel")
    
    button.classList.toggle("active")
})

closeButton.addEventListener("click",function () {
    const button = document.querySelector(".panel")
    
    button.classList.remove("active")
})

menuItem.forEach(item => {
    item.addEventListener("click", function() {
        alert(this.textContent); // Logs the text inside the clicked div
    });
});