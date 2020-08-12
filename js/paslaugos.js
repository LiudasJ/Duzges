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
            tablink[j].style.borderBottom = "2px solid  #5D5C61";
        }
        tablink[index].style.borderBottom = '2px solid #E9A73E';
        hideServiceSection();
        serviceSection[index].style.display = "flex";
    });
}

// var mobileServiceButton = document.getElementById('service-button');
// var mobileTablinkWrapper = document.getElementsByClassName('mobile-tablink-wrapper');
// var mobileTabLink = document.getElementsByClassName('mobile-tablink');

// function toggleTablinks() {
//     for (i=0; i<mobileTabLink.length; i++){
//         mobileTabLink[i].classList.toggle('mobile-tablink-active')
//     }  
// }
// mobileServiceButton.addEventListener('click', function(){
//     mobileTablinkWrapper[0].classList.toggle('mobile-tablink-wrapper-active'); 
//     setTimeout(toggleTablinks,250);
// });

// for (i=0; i<mobileTabLink.length; i++) {
//     let mobileIndex = i;
//     mobileTabLink[i].addEventListener('click', function(){
//         hideServiceSection();
//         serviceSection[mobileIndex].style.display = "flex";
//         mobileTablinkWrapper[0].classList.toggle('mobile-tablink-wrapper-active'); 
//         toggleTablinks();  
//     })
// }
function makeServicesScrollable () {
    if (window.innerWidth <= 768) {
        for (let i = 0; i < serviceSection.length; i++) {
            serviceSection[i].style.display = 'block';
        }    
    } else {
        for (let i = 0; i < serviceSection.length; i++) {
            serviceSection[i].style.display = 'none';
        }
        for (j=0; j<tablink.length; j++) {
            tablink[j].style.borderBottom = "2px solid  #5D5C61";
        }
        serviceSection[0].style.display = 'flex';
        tablink[0].style.borderBottom = '2px solid #E9A73E';   
    }
}
window.addEventListener('resize', ()=>{
    makeServicesScrollable();
});