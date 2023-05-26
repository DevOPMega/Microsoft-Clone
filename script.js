

// Hamburger 
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-navbar");
hamburger.addEventListener("click", ()=>{
    mobileNav.classList.toggle("active");
    document.body.classList.toggle("scrollable");
})

