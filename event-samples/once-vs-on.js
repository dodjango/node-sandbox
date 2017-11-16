(function() {
  "use strict";

  var emitter = new (require('events').EventEmitter)();
  var callback = function() {
    console.log('Once ping event');
  }

  // test if there is any listener - there should be none
  console.log(emitter.listeners('ping'));
  
  // subscribe once 
  emitter.once('ping', callback);
  // subscribe always 
  emitter.on('ping', function(){console.log('On ping event');});
  // test if both listeners are subscribed
  console.log(emitter.listeners('ping'));

  // remove referenced listener
  emitter.removeListener('ping', callback);
  console.log(emitter.listeners('ping'));

  // subscribe once again
  emitter.once('ping', callback);
  console.log(emitter.listeners('ping'));

  // emit event - once listener should be triggered and unsubscribed automatically
  emitter.emit('ping');
  console.log(emitter.listeners('ping'));

  // emit event again - on listener should be triggered again
  emitter.emit('ping');
  console.log(emitter.listeners('ping'));
  })();
