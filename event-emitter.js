const EventEmitter = require('events');
const customEmitter = new EventEmitter();

//The on method is used to register a listener for the response event.
// The listener is a callback function that logs data received to the 
//console when the response event is emitted.
customEmitter.on('response',()=>{
    console.log(`data received`)
})

//The emit method is used to trigger the response event.
customEmitter.emit('response')