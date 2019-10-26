var textInput = document.getElementById("textInput");
var range = document.getElementById("formControlRange");
var specialChar = document.getElementById("specialChar");
var numeric = document.getElementById("numeric");
var lowerCase = document.getElementById("lowerCase");
var upperCase = document.getElementById("upperCase");
var finalPassword = document.querySelector("#password");
var copyBtn = document.querySelector("#copy");

window.addEventListener('keydown', function (e) {
    if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
        if (e.target.nodeName == 'INPUT' && e.target.type == 'text') {
            e.preventDefault(); return false;
        }
    }
}, true);
function updateTextInput(val) {
    textInput.value = val;
}
function updateSlider(val) {
    range.value = val;
    if (val < 8) {
        textInput.value = 8;
    }
    else if (val > 256) {
        textInput.value = 256;
    }
}
function generatePass() {
    var charSet = "";
    var password = {
    passWord: "",
    passChar: textInput.value,
    passSpec: specialChar.checked,
    passNum: numeric.checked,
    passLower: lowerCase.checked,
    passUpper: upperCase.checked,
}

if (password.passChar.length === 0 ){
    alert("Please enter a valid password length");
}
else if( 
    password.passSpec === false &&
    password.passNum === false &&
    password.passLower === false &&
    password.passUpper === false ){
    alert("Please enter a valid password criteria");
}
else{
    buildPass();
    }
    console.log(password.passChar);
    console.log(password.passSpec);
    console.log(password.passNum);
    console.log(password.passLower);
    console.log(password.passUpper);

    function buildPass(){
        if(password.passLower === true){
            charSet += "abcdefghijklmnopqrstuvwxyz"
        }
        if(password.passUpper === true){
            charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if(password.passNum === true){
            charSet += "0123456789"
        }
        if(password.passSpec === true){
            charSet += "!@#$%^&*()"
        }
        for (var i = 0, n = charSet.length; i < password.passChar; ++i) {
            password.passWord += charSet.charAt(Math.floor(Math.random() * n));
        }
        finalPassword.value = password.passWord;
        console.log(charSet);
        console.log(password.passWord);
    }
}
// function copy() {
//     var copyText = finalPassword;
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);
//   }

  copyBtn.addEventListener("click", function copy() {
    var copyText = finalPassword;
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  });
    // console.log(password.passChar);
    // console.log(password.passSpec);
    // console.log(password.passNum);
    // console.log(password.passLower);
    // console.log(password.passUpper);


