const aes = require('./aes');
const hash = require('./hash');
const rsa = require('./rsa');

const messageToEncrypt = 'Uma mensagem para ser criptografada...';

const randomTexts = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Sed accumsan egestas lectus, eu ultrices sapien gravida ut",
    "Nunc sollicitudin est at massa ultrices elementum",
    "Suspendisse potenti",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
    "Nam finibus, enim sit amet molestie rutrum, massa urna scelerisque nibh, vitae tristique urna diam quis orci",
    "Nam venenatis in sapien in malesuada",
    "Nullam venenatis vulputate lorem sed lacinia",
    "Proin scelerisque id nibh scelerisque facilisis",
    "Vestibulum id gravida quam",
    "Nam rutrum augue justo, sed sodales augue gravida id",
    "Vestibulum eget nisi elit",
    "Vestibulum quis mauris a leo aliquet maximus",
    "Nam magna nunc, gravida a ultrices sed, semper nec metus",
    "Vestibulum et augue sed risus placerat porttitor ut dignissim erat",
    "Aenean ut ex ut massa varius sollicitudin non vel magna",
    "Phasellus dignissim mi vel felis ultricies rutrum",
    "In pellentesque lacus urna, id varius nisl porttitor vestibulum",
    "Curabitur vel eros vitae massa auctor volutpat ac eu ante",
    "Phasellus maximus, libero quis efficitur fermentum, ligula arcu ultricies risus, bibendum erat lacus vitae est",
    "Donec nec metus auctor, commodo felis et, vulputate lacus",
    "In risus nunc, scelerisque eget ex eget, dapibus accumsan nisl",
    "Aliquam vel leo ac enim tincidunt euismod",
    "Etiam tincidunt lectus ac leo eleifend, at condimentum risus cursus",
    "Nam ut ullamcorper est, nec pretium purus",
    "Curabitur vel elit et est euismod euismod",
    "Morbi elementum, velit et dignissim mollis, leo elit mattis erat, et pellentesque mauris arcu eget augue",
    "In nulla sem, imperdiet vitae pulvinar id, dictum quis eros",
    "Sed quam nibh, fermentum in magna a, ullamcorper vestibulum sem",
    "Vestibulum rhoncus quam dolor, ac fermentum nulla maximus a"];


const textToEncrypt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar nec leo eget' +
    ' mollis. Donec finibus augue et nibh bibendum, id lobortis velit luctus. Quisque metus metus, sollicitudin id' +
    ' libero eget, ullamcorper maximus leo. Donec in eros egestas, rhoncus massa sit amet, cursus mi.';

  function main(){
    // TEXTO CURTO
    console.log('\nTextinho');
    console.time('rsa');
    for (let index = 0; index < 30; index++) {
        rsa.runRsa(textToEncrypt);
    }
    console.timeEnd('rsa');

    console.time('aes');
    for (let index = 0; index < 30; index++) {
        aes.runAes(textToEncrypt);
    }
    console.timeEnd('aes');
  
    console.time('hash');
    for (let index = 0; index < 30; index++) {
        hash.runHash(textToEncrypt);
    }
    console.timeEnd('hash');

    // FRASES
    console.log('\n30 frases diferentes');
    console.time('rsa');
    for (let index = 0; index < 30; index++) {
        rsa.runRsa(randomTexts[index]);
    }
    console.timeEnd('rsa');

    console.time('aes');
    for (let index = 0; index < 30; index++) {
        aes.runAes(randomTexts[index]);
    }
    console.timeEnd('aes');

    console.time('hash');
    for (let index = 0; index < 30; index++) {
        hash.runHash(randomTexts[index]);
    }
    console.timeEnd('hash');

    // UMA FRASE
    console.log('\nUma frase');
    console.time('rsa');
    for (let index = 0; index < 30; index++) {
        rsa.runRsa(messageToEncrypt);
    }
    console.timeEnd('rsa');

    console.time('aes');
    for (let index = 0; index < 30; index++) {
        aes.runAes(messageToEncrypt);
    };
    console.timeEnd('aes');
    
    console.time('hash');
    for (let index = 0; index < 30; index++) {
        hash.runHash(messageToEncrypt);
    }
    console.timeEnd('hash');
}

main();