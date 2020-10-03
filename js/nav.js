var navButton = document.getElementsByClassName('burger-wrapper');
var mobileNavBox = document.getElementsByClassName('mobile-nav-wrapper');
var mobileNavUl = document.getElementsByClassName('mobile-nav-ul');
var mobileNavHeading = document.getElementsByClassName('mobile-nav-heading');
var burgerItem = document.getElementsByClassName('burger-item');
const toTopArrow = document.getElementsByClassName('to-top-arrow');
const toIntro = document.getElementById('toIntro');
const intro = document.getElementById('intro');

function showMobileNavContent () {
    mobileNavUl[0].classList.toggle('isVisible');
    mobileNavHeading[0].classList.toggle('isVisibleNavHeading');
}

function changeBurgerColor () {
    for (var i = 0; i < burgerItem.length; i++) {
        burgerItem[i].classList.toggle('burger-item-main-color');
    }
}

navButton[0].addEventListener('click', function() {
    mobileNavBox[0].classList.toggle('isActiveMobileNav');

    if (mobileNavUl[0].classList.contains("isVisible") &&  mobileNavHeading[0].classList.contains('isVisibleNavHeading')) {
        setTimeout(showMobileNavContent, 100)
    } else {
        setTimeout(showMobileNavContent, 500)
    }
    setTimeout(changeBurgerColor, 500);
});

toTopArrow[0].addEventListener('click', () => {
    const header = document.getElementsByTagName('header');
    const mainTop = header[0].offsetTop;
    window.scrollTo({top:mainTop, behavior: "smooth"});   
})
if (window.location.pathname == "/") {
    toIntro.addEventListener('click', ()=>{
        const value = intro.offsetTop;
        window.scrollTo({top:value, behavior: "smooth"});
    })
}