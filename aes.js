const crypto = require('crypto');
const encryptionType = 'aes-256-cbc';
const encryptionEncoding = 'base64';
const bufferEncryption = 'utf-8';

const aesKey = 'ABCDEFGHJKLMNOPQRSTUVWXYZABCDEF';
const aesIV = 'ABCDEFGHIJKLMNOP';

function encrypt(text) {
    //const val = JSON.stringify(jsonObject);
    const key = crypto.createHash('sha256').update(String(aesKey)).digest('base64').substr(0, 32);
    const iv = Buffer.from(aesIV, bufferEncryption);
    const cipher = crypto.createCipheriv(encryptionType, key, iv);
    let encrypted = cipher.update(text, bufferEncryption, encryptionEncoding);
    encrypted += cipher.final(encryptionEncoding);
    return encrypted;
}

function decrypt(base64String) {
    const buff = Buffer.from(base64String, encryptionEncoding);
    const key = crypto.createHash('sha256').update(String(aesKey)).digest('base64').substr(0, 32);
    const iv = Buffer.from(aesIV, bufferEncryption);
    const decipher = crypto.createDecipheriv(encryptionType, key, iv);
    const deciphered = decipher.update(buff) + decipher.final();
    return deciphered;
}

const input = 'all this is very clear to you?';
const encrypted = encrypt(input);
console.log('Encrypted text: ' + encrypted);
const decrypted = decrypt(encrypted);
console.log('Decrypted text: ' + decrypted);