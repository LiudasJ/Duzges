const serviceSection = document.getElementsByClassName('main-banquet');
const serviceWrapper = document.getElementsByClassName('services-banquet-wrapper');
const tablink = document.getElementsByClassName('tablink');
const serviceItem = document.getElementsByClassName('service-item');

for(let i = 0; i < serviceItem.length; i++) {
    serviceItem[i].addEventListener('click', ()=>{
        hideServiceSection();
        restoreTablinkBottomBorderColor();
        const scroll = serviceWrapper[0].offsetTop;
        switch (i) {
            case 0:
                serviceSection[3].style.display = 'flex';
                tablink[3].style.borderBottom = '2px solid #E9A73E';
                window.scrollTo({top:scroll, behavior: "smooth"});
                break;
            case 1:
                serviceSection[2].style.display = 'flex';
                tablink[2].style.borderBottom = '2px solid #E9A73E';
                window.scrollTo({top:scroll, behavior: "smooth"});
                break;
            case 2:
                serviceSection[5].style.display = 'flex';
                tablink[5].style.borderBottom = '2px solid #E9A73E';
                window.scrollTo({top:scroll, behavior: "smooth"});
                break;       
            }
    }) 
}

function hideServiceSection () {
    for (i=0; i < serviceSection.length; i++) {
        serviceSection[i].style.display = 'none';
    }
}

function showServiceSection () {
    for (i=0; i < serviceSection.length; i++) {
        serviceSection[i].style.display = 'block';
    }   
}

function restoreTablinkBottomBorderColor () {
    for (let i=0; i < tablink.length; i++) {
        tablink[i].style.borderBottom = "2px solid #5D5C61";
    }
}
function removeActiveClass () {
    for (i = 0; i < serviceSection.length; i++) {
        serviceSection[i].classList.remove('active');
    }
}

for (let i = 0; i < tablink.length; i++) {
    tablink[i].addEventListener('click', function(){
        restoreTablinkBottomBorderColor();
        removeActiveClass();
        tablink[i].style.borderBottom = '2px solid #E9A73E';
        hideServiceSection();
        serviceSection[i].style.display = "flex";
        serviceSection[i].classList.add('active');
    });
}
window.addEventListener('resize', (e) => {
    e.preventDefault();
    if (window.innerWidth <= 1250) {
        showServiceSection();
    } else {
        hideServiceSection();
        for (let i = 0; i < serviceSection.length; i++) {
            if (serviceSection[i].classList.contains('active')) {
                serviceSection[i].style.display = 'flex'; 
                tablink[i].style.borderBottom = '2px solid #E9A73E';   
            }
        }
    }
})