$(document).ready(function(){
    var navButton = document.getElementsByClassName('burger-wrapper');
    var mobileNavBox = document.getElementsByClassName('mobile-nav-wrapper');
    var mobileNavUl = document.getElementsByClassName('mobile-nav-ul');
    var mobileNavHeading = document.getElementsByClassName('mobile-nav-heading');
    var burgerItem = document.getElementsByClassName('burger-item');
    var formInput = document.getElementsByClassName('form-input');
    
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