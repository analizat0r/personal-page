let getBurgerButton = document.querySelector(".navbar-toggler");
let getHeader = document.getElementsByTagName("header");
let getNavigation = document.querySelector(".navigation");
let getElements = document.querySelectorAll(".hero, .featured, .skills, .contact-section")


function openNav() {
    for (let i = 0; i < getHeader.length; i++) {
        getHeader[i].classList.toggle("collapsed")
    }
    getNavigation.classList.toggle("collapse");

    for (let i = 0; i < getElements.length; i++) {
        getElements[i].classList.toggle("menu-collapsed")
    }
    // getElements.classList.toggle("menu-collapsed");
    
}

getBurgerButton.addEventListener('click', openNav);
