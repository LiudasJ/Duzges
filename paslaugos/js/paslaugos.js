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
        var serviceSection = document.getElementsByClassName('main-banquet')
        var tablink = document.getElementsByClassName('tablink');

        function hideServiceSection () {
            for (i=0; i < serviceSection.length; i++) {
                serviceSection[i].style.display = 'none';
            }
        }
        for (i=0; i<tablink.length; i++) {
            let index = i;
            tablink[i].addEventListener('click', function(){
                for (j=0; j<tablink.length; j++) {
                    tablink[j].style.backgroundColor = "#5D5C61";
                }
                tablink[index].style.backgroundColor = 'rgba(233, 167, 62, 0.9)';
                hideServiceSection();
                serviceSection[index].style.display = "flex";
            });
        }
});