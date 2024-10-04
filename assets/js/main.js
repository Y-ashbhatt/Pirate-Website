/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// Menu Show 
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Menu Close

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    // click on link remove show menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () => {
    const header = document.getElementById('header');
    // add class if bottom offset is > 50 of Viewport 
    if(this.scrollY >= 50) {
        header.classList.add('shadow-header');
    } else {
        header.classList.remove('shadow-header');
    }
}

window.addEventListener('scroll', shadowHeader);