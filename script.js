var enter;
var confirmNumber;
var confirmCharacter;
var password = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialChar = "!#$%&'()*+-./\:\;<=>?@[\\]^_`{|}~;";

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

    // Password generate function
function generatePassword() {
    // user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Next user inputs
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");     
    };

    //conditionally adding number and character string to default alpha numeric values 
    if(confirmNumber)
        password+=numeric;
    if(confirmCharacter)
        password+=specialChar;
    
    //calling function to create password
    return createPassword(password, enter);
}
//function with parameters to create password string
function createPassword(passwordText, count) {
    var length = count,
        charset = passwordText,
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
   