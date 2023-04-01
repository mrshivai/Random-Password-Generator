outputPassword = document.getElementById("outputPassword");
copyBtn = document.getElementById("copyBtn");
outputRange = document.getElementById("outputRange");
inputRange = document.getElementById("inputRange");
capitalLaterEl = document.getElementById("capitalLaterEl");
smallLaterEl = document.getElementById("smallLaterEl");
numbersEl = document.getElementById("numbersEl");
symbolsEl = document.getElementById("symbolsEl");
generatePasswordBtn = document.getElementById("generatePasswordBtn");

generatePasswordBtn.addEventListener("click", () => {
    const symbols = "!@#$%^&*()_+<>?:|{}";
    const passwordLength = inputRange.value;
    let password = "";

    // capitalLater = String.fromCharCode(Math.round(Math.random() * 26) + 65);
    // smallLater = String.fromCharCode(Math.round(Math.random() * 26) + 97);
    // number = String.fromCharCode(Math.round(Math.random() * 10) + 48);
    // symbol = symbols[Math.round(Math.random() * (symbols.length - 1))];

    //Create array with name userInput to store random value of characters.
    const userInput = [];


    if (capitalLaterEl.checked) { userInput.push("capital"); }
    if (smallLaterEl.checked) userInput.push("small");
    if (numbersEl.checked) userInput.push("number");
    if (symbolsEl.checked) userInput.push("symbol");

    if (userInput != 0) {

        for (let i = 0; i < passwordLength; i++) {
            const inputType = userInput[Math.floor(Math.random() * userInput.length)];

            if (inputType === "capital") {
                password += String.fromCharCode(Math.round(Math.random() * 25) + 65);
            } else if (inputType === "small") {
                password += String.fromCharCode(Math.round(Math.random() * 25) + 97);
            } else if (inputType === "number") {
                password += String.fromCharCode(Math.round(Math.random() * 9) + 48);
            } else if (inputType === "symbol") {
                password += symbols[Math.round(Math.random() * (symbols.length - 1))];
            }
        }
    }else
    {
        alert("Check atleast one checkbox");
    }


    outputPassword.value = password;

});

inputRange.oninput = function () {
    outputRange.innerHTML = "Password Length " + inputRange.value;
}

copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(outputPassword.value);

    // outputPassword.select();
    // document.execCommand("copy");
    alert("Password copied to clipboard!");
})