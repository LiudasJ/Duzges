var firstHalfEmail = " info";
var secondHalfEmail = "duzgessodyba.lt";
var slideIndex = 1;
var slides = document.getElementsByClassName("myImg");
var modalimg = document.getElementById("modal-img");
var captionText = document.getElementById("sample-showcase-alt");
var prevBtn = document.getElementsByClassName('prev')[0];
var nextBtn = document.getElementsByClassName('next')[0];

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
prevBtn.addEventListener('click', function (){
    plusSlides(-1);
});
nextBtn.addEventListener('click', function () {
    plusSlides(1);
});

for (let i = 0; i < slides.length; i++) {
    let index = i + 1;
    slides[i].onclick = function(){
        modalimg.src = slides[i].src;
        captionText.innerHTML = this.alt;
        slideIndex = index;
    };
}
function showSlides(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    modalimg.src = slides[slideIndex-1].src;
    captionText.innerHTML = slides[slideIndex-1].alt;
}

const banquetImg = document.getElementsByClassName('banquet-img');
const foodImg = document.getElementsByClassName('food-img');
const accoImg = document.getElementsByClassName('accommodation-img');
const bathtubeImg = document.getElementsByClassName('bathtube-img');

var banquetImgList = ['images/auripictures-230.jpg', 'images/pokyliu-saliu-nuoma-duzges-sodyba-changed.jpg', 'images/apvaliu-stalu-nuoma-duzges-sodyba.jpg'];
var foodImgList = ['images/duonos-tortas-duzges-sodyba.jpg', 'images/salti-patiekalai-duzges-sodyba.jpg', 'images/uzkandziai-duzges-sodyba.jpg'];
var accoImgList = ['images/apgyvendinimas.jpg', 'images/apgyvendinimas-duzges-sodyba.jpg', 'images/apgyvendinimas-duzges-sodyba.jpg'];
var bathtubeImgList = ['images/kubilas-duzges-sodyba.jpg', 'images/kubilo-nuoma-mazeikiuose.jpg', 'images/duzges-sodyba-kubilo-terasa.jpg'];

const banquetBubbleContainer = document.getElementsByClassName('banquet-bubbles-container');
const foodBubbleContainer = document.getElementsByClassName('food-bubbles-container');
const accoBubbleContainer = document.getElementsByClassName('acco-bubbles-container');
const bathtubeBubbleContainer = document.getElementsByClassName('bathtube-bubbles-container');
const bubble = document.getElementsByClassName('bubble');

createBubbles(banquetImgList, banquetBubbleContainer[0]);
createBubbles(foodImgList, foodBubbleContainer[0]);
createBubbles(accoImgList, accoBubbleContainer[0]);
createBubbles(bathtubeImgList, bathtubeBubbleContainer[0]);

changeServicesImg(banquetImg[0], banquetImgList, 0);
changeServicesImg(foodImg[0], foodImgList, 3);
changeServicesImg(accoImg[0], accoImgList, 6);
changeServicesImg(bathtubeImg[0], bathtubeImgList, 9);

function createBubbles (imgList, container) {
    for (let i = 0; i<imgList.length; i++) {
        var bubble = document.createElement('span');
        bubble.classList.add('bubble');
        container.appendChild(bubble);
    }
}

function restoreBubbleBgColor () {
    for (let i = 0; i < bubble.length; i++) {
        bubble[i].style.backgroundColor = "#5D5C61";
    }
}

function changeServicesImg (img, imgList, number) {
    var counter = 0;
    while (bubble[number].parentElement.parentElement === img.parentElement) {
        let index = number;
        let actualcounter = counter;
        bubble[index].addEventListener('click', ()=>{
            restoreBubbleBgColor();
            bubble[index].style.backgroundColor = "#d3d3d3";
            img.style.backgroundImage = `url(/${imgList[actualcounter]}`;
        })
        number++;
        counter++;
        if (number == 12) {
            break;
        }
    }
}

const serviceModal = document.getElementById('services-modal-wrapper');
const serviceModalCloseBtn = document.getElementById('services-modal-closeBtn');
const serviceModalImg = document.getElementById('service-modal-img');
const aboutImg = document.getElementsByClassName('service-about-img');

function openServiceModal () {
    serviceModal.classList.replace("scale-0", "scale-1"); 
}
function closeServiceModal () {
    serviceModal.classList.replace("scale-1", "scale-0");   
}

if (window.innerWidth > 768) {
    for (let i = 0; i < aboutImg.length; i++) {
        aboutImg[i].addEventListener('click', () => {
            openServiceModal();
            let imgUrl = aboutImg[i].style.backgroundImage;
            let newUrl = imgUrl.slice(6,(imgUrl.length - 2));
            serviceModalImg.src = newUrl;
            var aboutWrapperOffsetHeight = aboutWrapper.offsetHeight;
            var aboutWrapperOffsetTop = aboutWrapper.offsetTop;
            var aboutWrapperOffsetBottom = aboutWrapperOffsetTop + aboutWrapperOffsetHeight;
            var yAxis = window.scrollY;   
            if ((yAxis >= aboutWrapperOffsetTop) && (yAxis +  servicesModal.offsetHeight <= aboutWrapperOffsetBottom)) { 
                servicesModal.style.top = `${(yAxis - aboutWrapperOffsetTop)}px`;
            } else if (yAxis < aboutWrapperOffsetTop) {
                servicesModal.style.top = "0";
            } else if (yAxis + servicesModal.offsetHeight > aboutWrapperOffsetBottom) {
                servicesModal.style.top = `${aboutWrapperOffsetHeight - servicesModal.offsetHeight}`; 
            }
        })
    }
}

serviceModalCloseBtn.addEventListener('click', closeServiceModal);

const servicesModal = document.getElementById('services-modal-wrapper');
const aboutWrapper = document.getElementById('about-wrapper');