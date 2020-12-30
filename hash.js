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

exports.runHash = function(messageToEncrypt){
  const generatedHash = encrypt(messageToEncrypt);
  decrypt(messageToEncrypt,generatedHash.hashedPassword,generatedHash.salt)
}
