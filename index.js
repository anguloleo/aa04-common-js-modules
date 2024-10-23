const sayHelloObject = require('./send-messages/say-hello-to');
const sayHelloTo = sayHelloObject.sayHelloTo;

const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato');

const messagesObject = require('./messages');
const msg1 = messagesObject.message1;
const msg2 = messagesObject.message2;
const msg3 = messagesObject.message3;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);