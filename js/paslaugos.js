$(document).ready(function(){

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

    var mobileServiceButton = document.getElementById('service-button');
    var mobileTablinkWrapper = document.getElementsByClassName('mobile-tablink-wrapper');
    var mobileTabLink = document.getElementsByClassName('mobile-tablink');

    mobileServiceButton.addEventListener('click', function(){
        mobileTablinkWrapper[0].classList.toggle('mobile-tablink-wrapper-active');   
    });

    for (i=0; i<mobileTabLink.length; i++) {
        let mobileIndex = i;
        mobileTabLink[i].addEventListener('click', function(){
            hideServiceSection();
            serviceSection[mobileIndex].style.display = "flex";
            mobileTablinkWrapper[0].classList.toggle('mobile-tablink-wrapper-active');   
        })
    }
});