function generatePassword() {

    let length = document.getElementById("length").value;

    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;

    let characters = "";

    if (uppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numbers) {
        characters += "0123456789";
    }

    if (symbols) {
        characters += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }

    if (characters.length === 0) {
        alert("Select at least one character option!");
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {

        let randomIndex = Math.floor(
            Math.random() * characters.length
        );

        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;
}


function copyPassword() {

    let password = document.getElementById("password").value;

    if (password === "") {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(password);

    alert("Password copied!");
}