function passwordValidator(password) {
  let isValid = true;

  // Check if the password is between 6 and 10 characters
  if (password.length < 6 || password.length > 10) {
    console.log("Password must be between 6 and 10 characters");
    if (isValid) {
      isValid = false;
    }
  }

  // Check if the password is has special symbols (non-letters and non-digits)
  for (const char of password) {
    let currentIndex = char.charCodeAt(0);
    if (currentIndex <= 47 || (currentIndex >= 58 && currentIndex <= 64) ||
      (currentIndex >= 91 && currentIndex <= 96) || currentIndex >= 123) {
      console.log("Password must consist only of letters and digits");
      if (isValid) {
        isValid = false;
      }
      break;
    }
  }

  // Check if the password is has at least 2 digits
  let countDigits = 0;
  for (const char of password) {
    let currentIndex = char.charCodeAt(0);
    if (currentIndex >= 48 && currentIndex <= 57) {
      countDigits++;
    }
  }

  if (countDigits < 2) {
    console.log('Password must have at least 2 digits');
    if (isValid) {
      isValid = false;
    }
  }

  if (isValid) {
    console.log('Password is valid');
  }
}

// passwordValidator('logIn');
passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');