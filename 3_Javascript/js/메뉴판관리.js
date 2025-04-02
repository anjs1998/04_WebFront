/**********************************************식당명을 입력하세요 */

const resName = document.getElementById("resName");

resName.addEventListener("click", (e) => {
    const resNameInput = document.getElementById("resNameInput");
    e.target.classList.add("res-name-hidden");
    resNameInput.classList.remove("res-name-hidden");
    
})

document.getElementById("resNameInput").addEventListener("blur", (e) => {
    
    e.target.classList.add("res-name-hidden");
    resName.classList.remove("res-name-hidden");
    
    resName.innerText = e.target.value;
})

/*******************************************수정button */
const updateBtn = document.getElementById("updateBtn");
const menus = document.querySelectorAll(".menu-container > .menu");
//수정 click
updateBtn.addEventListener("click", (e) => {
    console.log(e);
    const editContainer = document.querySelector(".edit-container");
    /*e.target.classList.add("b-hidden");*/
    editContainer.classList.remove("b-hidden");
    editContainer.classList.add("b-show");

    e.target.classList.add("b-hidden");
    
    for(const menu of menus){

        const menuName = menu.children[0];
        
        const menuPrice = menu.children[1];
        
        menuName.classList.add("res-name-hidden");
        menuPrice.classList.add("res-name-hidden");
        menu.innerHTML += `<input type = "text" class="menu-name-input">${menuName.innerHTML}</input>`;
        menu.innerHTML += `<input type = "text" class="menu-price-input">${menuPrice.innerHTML}</input>`;
        
        //document.querySelector(".menu-name-input").innerText = menuName.value;
        //document.querySelector(".menu-price-input").innerText = menuPrice.value;

    }
    

});
//종료 click 
document.getElementById("exitBtn").addEventListener("click", (e) => {
    console.log(e);
    const normalContainer = document.querySelector(".normal-container");
    /*e.target.classList.add("b-hidden");*/
    normalContainer.classList.remove("b-hidden");
    normalContainer.classList.add("b-show");

    const editContainer = document.querySelector(".edit-container");
    editContainer.classList.add("b-hidden");

});