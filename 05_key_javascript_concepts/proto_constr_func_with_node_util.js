// Node.js has a utility function: util.inherits that is often used in code bases using constructor functions:
const util = require('util');

function Wolf(name) {
  this.name = name;
}

function Dog(name) {
  Wolf.call(this, name + ' the dog');
}

Dog.prototype.woof = function () {
  console.log(this.name + ': woof');
};

// In contemporary Node.js, util.inherits uses the EcmaScript 2015 (ES6) method Object.setPrototypeOf under the hood. It's essentially executing the following:
// Object.setPrototypeOf(Dog.prototype, Wolf.prototype)
util.inherits(Dog, Wolf);

const dog = new Dog('Jack');
dog.woof();
