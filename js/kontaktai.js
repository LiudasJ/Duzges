const messageText = document.getElementById('messageText');
const progressBar = document.getElementById('progress-bar');
const messageLength = document.getElementById('message-length');
const maxMessageLength = 300;
const nameError = document.getElementById('error-name');
const emailError = document.getElementById('error-email');
const telError = document.getElementById('error-tel');
const titleError = document.getElementById('error-title');
const messageError = document.getElementById('error-message');

const formInput = document.getElementsByClassName('form-input');
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

messageText.addEventListener('keyup', () => {
    progressBar.style.display = 'block';
    const value = messageText.value;
    const currentLength = value.length;
    const progressBarLength = ((currentLength * 100)/ maxMessageLength);
    if (isMessageTooLong(currentLength)) {
        messageText.style.border = '3px solid red';
        progressBar.style.width = '100%';
        progressBar.innerHTML = '100%';
        messageLength.innerHTML = "Viršijote simbolių limitą. Žinutė nebus išsiųsta.";
    } else {
        messageText.style.border = '1px solid black';
        progressBar.style.width = `${progressBarLength}%`;
        progressBar.innerHTML = progressBarLength.toFixed(1) + "%";
        messageLength.innerHTML = "Simbolių limitas:" + currentLength + "/ 300";
    }
});
function isMessageTooLong(messageLength) {
    if (messageLength > 300) {
        return true;
    } 
}
var input = document.getElementsByClassName('input-field');
for (i=0; i<input.length; i++) {
    let index = i;
    input[index].addEventListener('focus', function(){
        input[index].style.border = "1px solid green";
    });
}
for (i=0; i<input.length; i++) {
    let index = i;
    input[index].addEventListener('focusout', function(){
        input[index].style.border = "1px solid black";
    });
};

const form = document.getElementById('form');
const formSend = document.getElementById('formSendBtn');

formSend.addEventListener('click', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const formValues = new FormData(form);
    xhr.open("POST", "../form.php", true);
    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.responseText);
            nameError.innerHTML = response['wrongName'];
        }
    } 
    xhr.send(formValues);
});