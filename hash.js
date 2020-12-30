const crypto = require('crypto');

const messageToEncrypt = 'Mensagem segura'

const hasher = (message,salt) => {
  let hash = crypto.createHmac('sha512', salt);
  hash.update(message);
  let hashedPassword = hash.digest('base64');
  return {
    salt,
    hashedPassword
  };
};

const encrypt = (message) => {
  const rounds = 12
  const salt = crypto.randomBytes(Math.ceil(rounds/2)).toString('hex').slice(0, rounds);
  return hasher(message,salt);
}

const decrypt = (message,hash,salt) => {
    let messageHash = hasher(message,salt);
    if (messageHash.hashedPassword === hash) {
        return true;
    }
    return false;
};

const generatedHash = encrypt(messageToEncrypt);
console.log(messageToEncrypt,'foi transformado em:', generatedHash.hashedPassword);
console.log('')
console.log('Verificando se a criptografia é valida:');
console.log('')
console.log(messageToEncrypt,'com', generatedHash);
console.log('')
console.log(decrypt(messageToEncrypt,generatedHash.hashedPassword,generatedHash.salt));
console.log('');
console.log('A seguinte criptografia, deve estar falsa:');
console.log('');
const newSalt = 'd827b71e3131';
console.log(messageToEncrypt,'com', generatedHash.hashedPassword, 'e novo salt', newSalt);
console.log(decrypt(messageToEncrypt,generatedHash.hashedPassword,newSalt))