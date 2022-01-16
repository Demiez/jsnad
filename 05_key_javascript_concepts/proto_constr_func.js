function Wolf(name) {
  this.name = name;
}

Wolf.prototype.howl = function () {
  console.log(this.name + ': awoooooooo');
};

function Dog(name) {
  Wolf.call(this, name + ' the dog');
}

function inherit(proto) {
  function ChainLink() {}
  ChainLink.prototype = proto;
  return new ChainLink();
}

Dog.prototype = inherit(Wolf.prototype);

// Instead of inherit just assign reference to wolf prototype function
// Dog.prototype.howl = Wolf.prototype.howl;

Dog.prototype.woof = function () {
  console.log(this.name + ': woof');
};

const rufus = new Dog('Rufus');
rufus.woof(); // prints "Rufus the dog: woof"
rufus.howl(); // prints "Rufus the dog: awoooooooo"

// REMEMBER the prototype of Wolf.prototype is Object.prototype
// This will setup the same prototype chain as in the functional Prototypal Inheritance example:
console.log(Object.getPrototypeOf(rufus) === Dog.prototype); //true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype); //true
console.log(Object.getPrototypeOf(Wolf.prototype) === Object.prototype); // true
