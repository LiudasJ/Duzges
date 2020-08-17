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

for (var i=0; i<slides.length; i++) {
    let index = i;
    let ii = i + 1;
    slides[i].onclick = function(){
        modalimg.src = slides[index].src;
        captionText.innerHTML = this.alt;
        slideIndex = ii;
    };
}
function showSlides(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    modalimg.src = slides[slideIndex-1].src;
    captionText.innerHTML = slides[slideIndex-1].alt;
}

const banquetImg = document.getElementById('banquet-img');
const foodImg = document.getElementById('food-img');
const accoImg = document.getElementById('accommodation-img');
const bathtubeImg = document.getElementById('bathtube-img');
const banquetImgContainer = document.getElementsByClassName('banquet-img');
const foodImgContainer  = document.getElementsByClassName('food-img');

var banquetImgList = ['images/pokyliu-saliu-nuoma-duzges-sodyba-changed.jpg', 'images/auripictures-230.jpg', 'images/apvaliu-stalu-nuoma-duzges-sodyba.jpg'];
var foodImgList = ['images/salti-patiekalai-duzges-sodyba.jpg', 'images/uzkandeliai-duzges-sodyba.jpg', 'images/maisto-ruosimas.jpg'];
var accoImgList = ['images/apgyvendinimas.jpg', 'images/apgyvendinimas-duzges-sodyba.jpg'];
var bathtubeImgList = ['images/kubilo-nuoma-mazeikiuose.jpg', 'images/kubilas-duzges-sodyba.jpg'];
var counter = 0;

// reikia pakeist f-ja, kuri reaguotu i bubblesu paspaudima ir pakeistu nuotrauka
// reikia f-jos, kuri paspaudus didziaja nuotrauka, iskviestu modal

const banquetBubbleContainer = document.getElementsByClassName('banquet-bubbles-container');
const foodBubbleContainer = document.getElementsByClassName('food-bubbles-container');
const accoBubbleContainer = document.getElementsByClassName('acco-bubbles-container');
const bathtubeBubbleContainer = document.getElementsByClassName('bathtube-bubbles-container');

createBubbles(banquetImgList, banquetBubbleContainer[0]);
createBubbles(foodImgList, foodBubbleContainer[0]);
createBubbles(accoImgList, accoBubbleContainer[0]);
createBubbles(bathtubeImgList, bathtubeBubbleContainer[0]);

changeServicesImg(banquetImg, banquetImgList, 0);
changeServicesImg(foodImg, foodImgList, 3);
changeServicesImg(accoImg, accoImgList, 6);
changeServicesImg(bathtubeImg, bathtubeImgList, 8);

function createBubbles (imgList, container) {
    for (let i = 0; i<imgList.length; i++) {
        var bubble = document.createElement('span');
        bubble.classList.add('bubble');
        container.appendChild(bubble);
    }
}
function changeServicesImg (img, imgList, number) {
    var bubble = document.getElementsByClassName('bubble');
    var counter = 0;
    while (bubble[number].parentElement.parentElement === img.parentElement.parentElement) {
        let index = number;
        let actualcounter = counter;
        bubble[index].addEventListener('click', ()=>{
            img.src = imgList[actualcounter];
        })
        console.log(bubble[number].parentElement.parentElement);
        number++;
        counter++;
        if (number == 10) {
            break;
        }
    }
}

function openServiceModal () {
    const serviceModal = document.getElementById('services-modal-wrapper');
    const serviceModalImg = document.getElementById('service-modal-img');
    const aboutImg = document.getElementsByClassName('service-about-img');

    for (i = 0; i < aboutImg.length; i++) {
        let index = i;
        aboutImg[index].addEventListener('click', () => {
            serviceModal.style.display = "block";
            serviceModalImg.src = aboutImg[index].src;
        })
    }
}
openServiceModal ();
const servicesModal = document.getElementById('services-modal-wrapper');
const aboutWrapper = document.getElementById('about-wrapper');

window.addEventListener('scroll', () => {
    var aboutWrapperOffsetHeight = aboutWrapper.offsetHeight;
    var aboutWrapperOffsetTop = aboutWrapper.offsetTop;
    var aboutWrapperOffsetBottom = aboutWrapperOffsetTop + aboutWrapperOffsetHeight;
    var yAxis = window.scrollY;

    if ((yAxis >= aboutWrapperOffsetTop) && (yAxis +  servicesModal.offsetHeight <= aboutWrapperOffsetBottom)) {
        servicesModal.style.top = `${(yAxis - aboutWrapperOffsetTop) + 360}px`;       
    }
});