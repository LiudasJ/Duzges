$(document).ready(function(){
    var formInput = document.getElementsByClassName('form-input');
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
    var $maxMessageLength = 300;
    $('#messageText').on('keyup', function(){
        $('#progress-bar').css({"display": "block"});
        var $value = this.value;
        var $currentLength = $value.length;
        var $progressBarLength = (($currentLength * 100)/ $maxMessageLength);
        if (isMessageTooLong($currentLength)) {
            $('#messageText').css({"border": "3px solid red"});
            $('#progress-bar').css({"width": "100%"});
            $('#progress-bar').html("100%");
            $('#message-length').html("Viršijote simbolių limitą. Žinutė nebus išsiųsta.");
        } else {
            $('#messageText').css({"border": "1px solid black"}); 
            $('#progress-bar').css({"width": $progressBarLength + "%"});
            $('#progress-bar').html(($progressBarLength).toFixed(1) + "%"); 
            $('#message-length').html("Simbolių limitas:" + $currentLength + "/ 300");
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
    }

});