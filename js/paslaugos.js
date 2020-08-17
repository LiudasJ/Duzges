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