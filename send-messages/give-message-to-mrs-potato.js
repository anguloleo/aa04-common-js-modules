const sayHelloObject = require('./say-hello-to');
const sayHelloTo = sayHelloObject.sayHelloTo;

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

//!!START SILENT
module.exports = giveMessageToMrsPotato;
//!!END