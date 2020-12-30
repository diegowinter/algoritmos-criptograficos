const aes = require('./aes');
const hash = require('./hash');
const rsa = require('./rsa');

const messageToEncrypt = 'Mensagem segura';

const randomWords = [
  "pneumonia","perfume","industry","enthusiasm","campaign","overall","section",
  "workshop","pasture","document","bedroom","principle","opinion","purpose","monstrous",
  "glasses","cont","emporary","residence","athlete","nationalist","important","defendant",
  "referee","prosecution","compliance","secretary","overeat","uncertainty","basketball","machinery"]

  function main(){
    console.time('aes')
    for (let index = 0; index < 30; index++) {
     aes.runAes(messageToEncrypt)
    }
    console.timeEnd('aes')
  
  console.time('hash')
  for (let index = 0; index < 30; index++) {
    hash.runHash(messageToEncrypt)
   }
  console.timeEnd('hash')

  console.time('rsa')
  for (let index = 0; index < 30; index++) {
    rsa.runRsa(messageToEncrypt)
  }
  console.timeEnd('rsa')
}

main()