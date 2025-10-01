const resizeBtn = document.querySelector(".resize-container");
const navElement = document.querySelector(".container");
const linksText = document.querySelectorAll(".link-text")
let iconState = true;

resizeBtn.addEventListener("click", () => {
    navElement.classList.toggle("minimize")
    resizeBtn.classList.toggle("resize-container-sm-container")
    addIconText(iconState)
    iconState = !iconState;
})

const addIconText = (value) => {
    if(value){
        setTimeout(()=>{
            for(let i = 0 ; i < linksText.length; i++){
                    // linksText[i].classList.toggle("full");
                    linksText[i].classList.toggle("visible")
                }
        }, 100)
        
    } else {
        setTimeout(()=>{
            for(let i = 0 ; i < linksText.length; i++){
                    // linksText[i].classList.toggle("full");
                    linksText[i].classList.toggle("visible")
                }
        }, 400)
    }
}