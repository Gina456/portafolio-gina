const links = document.querySelectorAll(".container__ul a");
const menu = document.querySelector(".container__ul");
const btn = document.querySelector("#checkbox");
(function(){
    links.forEach((e) => {
        e.addEventListener("click", ()=>{
            
            btn.checked = false;
        
            
        })
    })
} )()