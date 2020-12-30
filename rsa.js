const crypto = require("crypto");

function encrypt(text) {
    const encryptedText = crypto.publicEncrypt(
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        },
        Buffer.from(text)
    );

    return encryptedText;
}

function decrypt(base64String) {
    const decryptedText = crypto.privateDecrypt(
        {
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        },
        base64String
    );

    return decryptedText;
}

function showPublicAndPrivateKeys() {
    console.log(
        publicKey.export({
            type: "pkcs1",
            format: "pem",
        }),
    
        privateKey.export({
            type: "pkcs1",
            format: "pem",
        })
    );
}

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 1024,
});

exports.runRsa = function(messageToEncrypt){
  const encrypted = encrypt(messageToEncrypt);
  const decrypted = decrypt(encrypted);
}
