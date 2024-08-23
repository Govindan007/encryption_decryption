function encrypt() {
    const inputText = document.getElementById("inputbox").value;
    const key = parseInt(document.getElementById("keybox").value);
  
    if (isNaN(key) || key < 0 || key > 25) {
      alert("Key must be a positive integer between 0 and 25.");
      return;
    }
  
    const encryptedText = caesarCipher(inputText, key, "encrypt");
    document.getElementById("inputbox1").value = encryptedText;
  }
  
  function decrypt() {
    const inputText = document.getElementById("inputbox").value;
    const key = parseInt(document.getElementById("keybox").value);
  
    if (isNaN(key) || key < 0 || key > 25) {
      alert("Key must be a positive integer between 0 and 25.");
      return;
    }
  
    const decryptedText = caesarCipher(inputText, key, "decrypt");
    document.getElementById("inputbox1").value = decryptedText;
  }
  
  function caesarCipher(text, shift, mode) {
    if (typeof shift !== 'number' || shift < 0 || shift > 25) {
      throw new Error('Shift must be a positive integer between 0 and 25.');
    }
  
    if (mode !== 'encrypt' && mode !== 'decrypt') {
      throw new Error('Mode must be either "encrypt" or "decrypt".');
    }
  
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const result = [];
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toLowerCase();
      const index = alphabet.indexOf(char);
  
      if (index === -1) {
        result.push(char);
        continue;
      }
  
      const newIndex = (index + (mode === 'encrypt' ? shift : -shift) + alphabet.length) % alphabet.length;
      result.push(alphabet[newIndex]);
    }
  
    return result.join('');
  }
  
  function copy() {
    const resultBox = document.getElementById("inputbox1");
    resultBox.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
  }