const palletes = document.querySelectorAll(".color-area > .container");
const boxList = document.querySelectorAll(".box");

 
const inputList = document.querySelectorAll(".color-input");

document.querySelector("#changebutton").addEventListener("click", () => {
        for (let i = 0; i < boxList.length; i++) {

            boxList.style.backgroundColor = inputList[i].value;
        }

    });

