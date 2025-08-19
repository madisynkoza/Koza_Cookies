//declare variables
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

//open naviagation menu when user clicks three bars 
// does so by turn on styles associated with the "active" class
hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//close nav menu after user clicks link (turns off active class)
document.querySelectorAll("nav-link").forEach(n=>n.
    addEventListener("click", ()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
)


