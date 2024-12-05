document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10);
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSpecial = document.getElementById('include-special').checked;

    const lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersCharset = "0123456789";
    const specialCharset = "!@#$%^&*()_+[]{}|;:',.<>?";

    let charset = "";

    if (includeLowercase) charset += lowercaseCharset;
    if (includeUppercase) charset += uppercaseCharset;
    if (includeNumbers) charset += numbersCharset;
    if (includeSpecial) charset += specialCharset;
    if (charset === "") {
        alert('Please select at least one character type.');
        return;
    }
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').value = password;
});
