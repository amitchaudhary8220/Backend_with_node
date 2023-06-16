const EventEmitter= require('events');

//we must register event first (listen event first ) ,then emit it , other wise listening funtion will not execute

//EventEmitter is constructor function 

//forming the object of EventEmitter class

const customEmitter=new EventEmitter();


//  on method of the customEmitter object to register an event listener for the 'response' event. The listener is a callback function that will be executed when the event is emitted.
customEmitter.on('response',(name,age)=>{
    console.log(`Successfully got the reponse name :${name} and age:${age}`);
});

customEmitter.on('response',(name)=>{
    console.log(`concurrntly listening to various events ${name}`);
})


//emitting the event

// customEmitter.emit('response');

//we can also pass arguments in emit 

customEmitter.emit('response','amit',22);