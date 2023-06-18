import React, { useState } from "react";
import "./GronsfeldCipher.css";

const GronsfeldCipher = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const encrypt = () => {
    let encryptedText = "";
    const keyLength = key.length;
    let keyIndex = 0;
    for (let i = 0; i < plaintext.length; i++) {
      const char = plaintext[i];
      if (char === " ") {
        encryptedText += " ";
        continue;
      }
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        const normalizedCharCode = charCode - 65;
        const keyOffset = parseInt(key[keyIndex % keyLength], 10);
        const encryptedCharCode = (normalizedCharCode + keyOffset) % 26;
        encryptedText += String.fromCharCode(encryptedCharCode + 65);
        keyIndex++;
      } else {
        encryptedText += char;
      }
    }
    setCiphertext(encryptedText);
    setDecryptedText("");
  };

  const decrypt = () => {
    let decryptedText = "";
    const keyLength = key.length;
    let keyIndex = 0;
    for (let i = 0; i < ciphertext.length; i++) {
      const char = ciphertext[i];
      if (char === " ") {
        decryptedText += " ";
        continue;
      }
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        const normalizedCharCode = charCode - 65;
        const keyOffset = parseInt(key[keyIndex % keyLength], 10);
        const decryptedCharCode = (normalizedCharCode - keyOffset + 26) % 26;
        decryptedText += String.fromCharCode(decryptedCharCode + 65);
        keyIndex++;
      } else {
        decryptedText += char;
      }
    }
    setDecryptedText(decryptedText);
  };

  const handlePlaintextChange = (event) => {
    setPlaintext(event.target.value.toUpperCase());
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  return (
    <div className="gronsfeld-cipher-container">
      <h1>Gronsfeld Cipher</h1>

      <div className="input-container">
        <label htmlFor="plaintext">Plaintext:</label>
        <input
          type="text"
          id="plaintext"
          value={plaintext}
          onChange={handlePlaintextChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="key">Key:</label>
        <input type="text" id="key" value={key} onChange={handleKeyChange} />
      </div>
      <div className="button-container">
        <button className="encrypt-button" onClick={encrypt}>
          Encrypt
        </button>
        <button className="decrypt-button" onClick={decrypt}>
          Decrypt
        </button>
      </div>
      <div className="input-container">
        <label htmlFor="ciphertext">Ciphertext:</label>
        <input type="text" id="ciphertext" value={ciphertext} readOnly />
      </div>
      {decryptedText && (
        <div className="input-container">
          <label htmlFor="decryptedtext">Decrypted Text:</label>
          <input
            type="text"
            id="decryptedtext"
            value={decryptedText}
            readOnly
          />
        </div>
      )}
      <h3>Made By: Vinayak,Utkarsh and Adnan</h3>
    </div>
  );
};

export default GronsfeldCipher;
