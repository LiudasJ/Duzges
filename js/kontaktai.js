const messageText = document.getElementById('messageText');
const progressBar = document.getElementById('progress-bar');
const messageLength = document.getElementById('message-length');
const maxMessageLength = 300;
const nameError = document.getElementById('error-name');
const emailError = document.getElementById('error-email');
const telError = document.getElementById('error-tel');
const titleError = document.getElementById('error-title');
const messageError = document.getElementById('error-message');
const allErrorSpans = document.getElementsByClassName('error');

messageText.addEventListener('keyup', () => {
    const value = messageText.value;
    const currentLength = value.length;
    const progressBarLength = ((currentLength * 100)/ maxMessageLength);
    progressBar.style.display = 'block';
    if (currentLength == 0) {
        progressBar.style.display = 'none';
        messageLength.innerHTML = "Simbolių limitas:0/300";
    }
    else if (isMessageTooLong(currentLength)) {
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
for (let i=0; i<input.length; i++) {
    input[i].addEventListener('focus', function(){
        input[i].style.border = "1px solid green";
        input[i].style.appearance = 'none';
        input[i].style.webkitAppearance = 'none';
    });
}
for (let i=0; i<input.length; i++) {
    input[i].addEventListener('focusout', function(){
        input[i].style.border = "1px solid black";
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
            for (let i = 0; i < allErrorSpans.length; i++) {
                allErrorSpans[i].innerHTML = "";
            }
            const response = JSON.parse(this.responseText);
            if (response['emptyName']) {
                nameError.innerHTML = response['emptyName'];
            } else if (response['wrongName']) {
                nameError.innerHTML = response['wrongName'];    
            } else if (response['longName']) {
                nameError.innerHTML = response['longName'];       
            }  
            
            if (response['emptyEmail']) {
                emailError.innerHTML = response['emptyEmail'];    
            } else if (response['longEmail']) {
                emailError.innerHTML = response['longEmail'];       
            } else if (response['wrongEmail']) {
                emailError.innerHTML = response['wrongEmail'];    
            }

            if (response['emptyTel']) {
                telError.innerHTML = response['emptyTel'];    
            } else if (response['wrongTel']) {
                telError.innerHTML = response['wrongTel'];   
            } 

            if (response['emptyTitle']) {
                titleError.innerHTML = response['emptyTitle'];    
            } else if (response['wrongTitle']) {
                titleError.innerHTML = response['wrongTitle'];   
            } else if (response['longTitle']) {
                titleError.innerHTML = response['longTitle'];     
            }

            if (response['emptyMessage']) {
                messageError.innerHTML = response['emptyMessage'];    
            } else if (response['wrongMessage']) {
                messageError.innerHTML = response['wrongMessage'];   
            } else if (response['longMessage']) {
                messageError.innerHTML = response['longMessage'];     
            }

            if(response['saved']) {
                progressBar.style.width = "100%";
                progressBar.style.height = "auto";
                progressBar.innerHTML = response['saved'];
            }
        }
    } 
    xhr.send(formValues);
});