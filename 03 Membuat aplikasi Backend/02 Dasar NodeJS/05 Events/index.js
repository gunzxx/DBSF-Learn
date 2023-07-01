// TODO 1
const { EventEmitter } = require("events")
 
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name} 🥳🥳🥳🥳 !`);
}
 
// TODO 2
const myEmitter = new EventEmitter();

// TODO 3
myEmitter.on('birthday', birthdayEventListener);

// TODO 4
myEmitter.emit('birthday',"Guntur")