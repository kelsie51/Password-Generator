var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
    // Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
    // Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Convert to uppercase
space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};
    // Uppercase variable
alpha2 = alpha.map(toUpper);

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


    // initialize password variable
    var password = [];
  
    var upperLowerAlpha = alpha.concat(alpha2)

    if (confirmCharacter && confirmNumber) 
        choices = upperLowerAlpha.concat(number, character);    
    else if(confirmNumber)
        choices = upperLowerAlpha.concat(number);
    else if(confirmCharacter)
        choices = upperLowerAlpha.concat(character);
    else
        choices = upperLowerAlpha;
    
    // Starts a Random selection for every variable: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var ps = password.join("");
    UserInput(ps);
    return ps;
}
    // Changed input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

