$(document).ready(function (){
var firstHalfEmail = " info";
var secondHalfEmail = "duzgessodyba.lt";
var slideIndex = 1;
var slides = document.getElementsByClassName("myImg");
var modalimg = document.getElementById("modal-img");
var captionText = document.getElementById("sample-showcase-alt");

showSlides(slideIndex);

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
});