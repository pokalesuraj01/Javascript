function generatePassword() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const special = "!@#$%^&*()_+[]{}|;:,.<>?";

    // Ensure at least one character from each category
    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += digits[Math.floor(Math.random() * digits.length)];
    password += special[Math.floor(Math.random() * special.length)];

    // Fill remaining 4 characters randomly from all sets
    const allChars = upper + lower + digits + special;
    for (let i = 4; i < 8; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle password
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

// Accept user input
let name = prompt("Enter your name:");
let surname = prompt("Enter your surname:");
let dob = prompt("Enter your date of birth (DD/MM/YYYY):");

// Generate password
let password = generatePassword();

// Display result
console.log("Name:", name);
console.log("Surname:", surname);
console.log("DOB:", dob);
console.log("Generated Password:", password);