const assert = require('assert');

class Leopard {
  constructor(name) {
    this.name = name;
  }
  hiss() {
    console.log(this.name + ': ' + 'hiss');
  }
}

class Lynx extends Leopard {
  constructor(name) {
    super(name);
  }

  purr() {
    console.log(this.name + ': ' + 'purr');
  }
}

class Cat extends Lynx {
  constructor(name) {
    super(name + ' the cat');
  }

  meow() {
    console.log(this.name + ': ' + 'meow');
  }
}
// TODO:
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method

const felix = new Cat('Felix'); //TODO replace null with instantiation of a cat
felix.meow(); // prints Felix the cat: meow
felix.purr(); // prints Felix the cat: prrr
felix.hiss(); // prints Felix the cat: hsss

// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix);
const felixProtoProto = Object.getPrototypeOf(felixProto);
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto);

assert(Object.getOwnPropertyNames(felixProto).length, 1);
console.log(Object.getOwnPropertyNames(felixProto));
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1);
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1);
assert(typeof felixProto.meow, 'function');
assert(typeof felixProtoProto.purr, 'function');
assert(typeof felixProtoProtoProto.hiss, 'function');
console.log('prototype checks passed!');
