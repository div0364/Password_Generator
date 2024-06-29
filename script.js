const passwordElement = document.getElementById('password');
const generateButton = document.getElementById('generate');
const includeUppercase = document.getElementById('uppercase');
const includeLowercase = document.getElementById('lowercase');
const includeNumbers = document.getElementById('numbers');
const includeSymbols = document.getElementById('symbols');
const lengthElement = document.getElementById('length');
const lengthValueElement = document.getElementById('lengthValue');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

// Update the length value display when the range slider changes
lengthElement.addEventListener('input', () => {
    lengthValueElement.textContent = lengthElement.value;
});

generateButton.addEventListener('click', generatePassword);

function generatePassword() {
    let characters = '';
    if (includeUppercase.checked) characters += uppercaseChars;
    if (includeLowercase.checked) characters += lowercaseChars;
    if (includeNumbers.checked) characters += numberChars;
    if (includeSymbols.checked) characters += symbolChars;

    const length = lengthElement.value;
    passwordElement.value = createPassword(characters, length);
}

function createPassword(characters, length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
