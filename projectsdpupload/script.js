
const passwordBox = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");


// Update length number
function updateLength() {

    lengthValue.textContent = lengthSlider.value;

}


// Generate password
function generatePassword() {

    const length = Number(lengthSlider.value);

    const uppercase =
        document.getElementById("uppercase").checked;

    const lowercase =
        document.getElementById("lowercase").checked;

    const numbers =
        document.getElementById("numbers").checked;

    const symbols =
        document.getElementById("symbols").checked;


    let characters = "";


    if (uppercase) {

        characters +=
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    }


    if (lowercase) {

        characters +=
            "abcdefghijklmnopqrstuvwxyz";

    }


    if (numbers) {

        characters +=
            "0123456789";

    }


    if (symbols) {

        characters +=
            "!@#$%^&*()_+-=[]{}|;:,.<>?";

    }


    // Nothing selected
    if (characters.length === 0) {

        alert("SELECT AT LEAST ONE CHARACTER TYPE");

        return;

    }


    let password = "";


    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(
                Math.random() * characters.length
            );

        password += characters[randomIndex];

    }


    passwordBox.value = password;

    updateStrength(length);

}


// Password strength
function updateStrength(length) {

    const bar =
        document.getElementById("strengthBar");

    const text =
        document.getElementById("strengthText");


    if (length < 8) {

        bar.style.width = "25%";
        bar.style.background = "#ff3b5c";
        bar.style.boxShadow = "0 0 10px #ff3b5c";

        text.textContent = "WEAK";
        text.style.color = "#ff3b5c";

    }

    else if (length < 12) {

        bar.style.width = "50%";
        bar.style.background = "#ffaa00";
        bar.style.boxShadow = "0 0 10px #ffaa00";

        text.textContent = "MEDIUM";
        text.style.color = "#ffaa00";

    }

    else if (length < 18) {

        bar.style.width = "75%";
        bar.style.background = "#00f5ff";
        bar.style.boxShadow = "0 0 10px #00f5ff";

        text.textContent = "STRONG";
        text.style.color = "#00f5ff";

    }

    else {

        bar.style.width = "100%";
        bar.style.background = "#00ff9d";
        bar.style.boxShadow = "0 0 10px #00ff9d";

        text.textContent = "ULTRA";
        text.style.color = "#00ff9d";

    }

}


// Copy password
function copyPassword() {

    const password = passwordBox.value;

    if (
        password === "" ||
        password === "CLICK GENERATE"
    ) {

        alert("GENERATE A PASSWORD FIRST");

        return;

    }


    navigator.clipboard.writeText(password);


    const button =
        document.getElementById("copyBtn");

    button.textContent = "✓";


    setTimeout(() => {

        button.textContent = "⧉";

    }, 1200);

}


// Generate one immediately
generatePassword();

