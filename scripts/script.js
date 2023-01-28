// Selecting the body tag
const body = document.getElementsByTagName("body")[0];
// Selecting the mode div
const mode = document.getElementById("mode");
// Selecting the number box
const numberBox = document.getElementById("number-box");
// Allowing the characters to be entered in textbox that are needed to solve an equation
const allowedChars = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 45, 13, 46];

mode.addEventListener("click", changeMode);
// Adding click event listener on mode
numberBox.addEventListener("keypress", keyPress);
// Adding keypress event listener on numberBox

// Selecting all buttons
var buttons = document.getElementsByClassName("button")

// Add listener for buttons
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonPress)
}

function buttonPress(event){
    var clickedButton = event.srcElement.innerText;

    if (numberBox.value === "Error"){
        numberBox.value = "";
    }

    if (clickedButton === "DEL"){
        numberBox.value = numberBox.value.slice(0, -1);
        return;
    }

    if (clickedButton === "="){
        
        // Get the equation from the input box
        var equation = numberBox.value;
        // Use regex to replace × and ÷ with * and / respectively
        // Evaluate the equation and make the value of input box to the result
        try {
            numberBox.value = math.evaluate(equation.replace(/×/g, "*").replace(/÷/g, "/"));
        } catch (error) {
            numberBox.value = "Error";
        }
        return;

    }

    if (clickedButton === "RESET") {
        numberBox.value = "";
        return;
    }

    numberBox.value += clickedButton;
}

function changeMode() {
    // Checking if the class name is dark
    if (body.className === "dark") {
        // Making the class to "light" so the page will transform into light mode
        body.className = "light";
        // Transform the mode button to dark mode button
        mode.style.backgroundImage = "url(./images/dark-mode.svg)";
        // Transform the background of calculator to light background
        document.getElementById("calculator").style.backgroundImage = "url(./images/lightbg.jpg)"
    } else {
        // Making the class to "dark" so the page will transform into dark mode
        body.className = "dark";
        // Transform the mode button to light mode button
        mode.style.backgroundImage = "url(./images/light-mode.svg)";
        // Transform the background of calculator to dark background
        document.getElementById("calculator").style.backgroundImage = "url(./images/darkbg.jpg)"
    }
}

function keyPress(event) {

    if (numberBox.value === "Error"){
        numberBox.value = "";
    }

    // Check if the key pressed is the enter key
    if (event.charCode === 13) {
        // Get the equation from the input box
        var equation = numberBox.value;
        // Use regex to replace × and ÷ with * and / respectively
        // Evaluate the equation and make the value of input box to the result
        try {
            numberBox.value = math.evaluate(equation.replace(/×/g, "*").replace(/÷/g, "/"));
        } catch (error) {
            numberBox.value = "Error";
        }
        return;
    }
    // Check if the key pressed is the forward slash
    if (event.charCode === 47) {
        // Append ÷ to the input box
        numberBox.value += "÷";
        // Prevent the default behavior of the key press
        event.preventDefault();
        return;
    }
    // Check if the key pressed is the asterisk
    if (event.charCode === 42) {
        // Append × to the input box
        numberBox.value += "×";
        // Prevent the default behavior of the key press
        event.preventDefault();
        return;
    }

    // Check if the key pressed is the decimal point
    if (event.charCode === 46) {
        // Get the equation from the input box
        var equation = numberBox.value;
        if(equation.includes(".")) {
            // Prevent the default behavior of the key press
            event.preventDefault();
            return;
        }
    }

    // Check if the pressed key is in the allowed characters array
    if (allowedChars.indexOf(event.charCode) !== -1) {
        return;
    }
    // Prevent the default behavior of the key press
    event.preventDefault();
}

