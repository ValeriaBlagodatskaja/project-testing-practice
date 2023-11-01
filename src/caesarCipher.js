export function caesarCipher(string, shift) {
  // Ensure that shifts are within the range 0-25.
  shift = shift % 26;
  if (shift < 0) {
    shift += 26;
  }

  let s = string.split("");
  for (let i = 0; i < s.length; i++) {
    //Determining the character's ASCII value:
    let charCode = s[i].charCodeAt(0);

    // If character is an uppercase letter. Applying the shift to uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      s[i] = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    }
    // If character is a lowercase letter. Applying the shift to lowercase letters
    else if (charCode >= 97 && charCode <= 122) {
      s[i] = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    }
    // Other characters (like punctuation, numbers, and spaces) remain unchanged.
  }
  return s.join("");
}

//The shift value is normalized to fall within the 0-25 range, and negative values wrap around.
//If someone entered a shift of 27, it would behave the same as a shift of 1.
//This also handles negative shifts correctly. For example, a shift of -1 would shift characters backward by one letter.
