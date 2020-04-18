$(document).ready(function(){

var email1 = "info@";
var email2 = "duzgessodyba.lt";
var emailLink = document.getElementsByClassName('email-link');

for (i=0; i<emailLink.length; i++) {
    emailLink[i].href = "mailto:info@duzgessodyba.lt";
    emailLink[i].innerHTML = email1 + email2;
}
});