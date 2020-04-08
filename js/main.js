$(document).ready(function (){
var firstHalfEmail = " info";
var secondHalfEmail = "duzgessodyba.lt";
var slideIndex = 1;
var slides = document.getElementsByClassName("myImg");
var modalimg = document.getElementById("modal-img");
var captionText = document.getElementById("sample-showcase-alt");
var navButton = document.getElementsByClassName('burger-wrapper');
var mobileNavBox = document.getElementsByClassName('mobile-nav-wrapper');
var mobileNavUl = document.getElementsByClassName('mobile-nav-ul');
var mobileNavHeading = document.getElementsByClassName('mobile-nav-heading');
var burgerItem = document.getElementsByClassName('burger-item');
var formInput = document.getElementsByClassName('form-input');

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
$('.prev').on('click', function (){
    plusSlides(-1);
});
$('.next').on('click', function () {
    plusSlides(1);
});

// Thumbnail image controls
for (var i=0; i<slides.length; i++) {
    let ii = i + 1;
    slides[i].onclick = function(){
        modalimg.src = this.src;
        // captionText.innerHTML = this.alt;
        slideIndex = ii;
        console.log(slideIndex);
    };
}
function showSlides(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    modalimg.src = slides[slideIndex-1].src;
    captionText.innerHTML = slides[slideIndex-1].alt;
}
function showMobileNavContent () {
    mobileNavUl[0].classList.toggle('isVisible');
    mobileNavHeading[0].classList.toggle('isVisible');
}
function changeBurgerColor () {
    for (var i = 0; i < burgerItem.length; i++) {
        burgerItem[i].classList.toggle('burger-item-main-color');
    }
}
navButton[0].addEventListener('click', function(){
        mobileNavBox[0].classList.toggle('isActiveMobileNav');
        if (mobileNavUl[0].classList.contains("isVisible") &&  mobileNavHeading[0].classList.contains('isVisible')) {
            setTimeout(showMobileNavContent, 100)
        } else {
            setTimeout(showMobileNavContent, 500)
        }
        setTimeout(changeBurgerColor, 500);
    });
for (i=0; i< formInput.length; i++) {
    formInput[i].addEventListener('focusin', function (){
        this.style.border = "1px solid black"
       });
   };   
for (i=0; i < formInput.length; i++) {
    formInput[i].addEventListener('focusout', function (){
         this.style.border = "1px solid white"
        });
    };
});