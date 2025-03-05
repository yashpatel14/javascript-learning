

//   const buttonList1 = document.getElementsByClassName("accordion-button"); //it's give HTMLCollection 
  const buttonList = document.querySelectorAll(".accordion-button"); //it's give Arry

//   console.log(buttonList1);

  buttonList.forEach((button) => {
      
      button.addEventListener("click",function () {

          const item = this.parentElement;
          document.querySelectorAll(".accordion-item").forEach((otherItem) => {
                    if (otherItem !== item) {
                      otherItem.classList.remove("active");
                    }
                  });
          item.classList.toggle("active")
        })

  });
  