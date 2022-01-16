class Wolf {
  constructor(name) {
    this.name = name;
  }
  howl() {
    console.log(this.name + ': awoooooooo');
  }
}

// The extends keyword makes prototypal inheritance a lot simpler. In the example code, class Dog extends Wolf will ensure that the prototype of Dog.prototype will be Wolf.prototype.
class Dog extends Wolf {
  //The constructor method in each class is the equivalent to the function body of a Constructor Function. So for instance function Wolf (name) { this.name = name } is the same as class Wolf { constructor (name) { this.name = name } }.
  constructor(name) {
    // The super keyword in the Dog class constructor method is a generic way to call the parent class constructor while setting the this keyword to the current instance. In the Constructor Function example Wolf.call(this, name + ' the dog') is equivalent to super(name + ' the dog') here.
    super(name + ' the dog');
  }
  // Any methods other than constructor that are defined in the class are added to the prototype object of the function that the class syntax creates.
  woof() {
    console.log(this.name + ': woof');
  }
}

const rufus = new Dog('Rufus');

rufus.woof(); // prints "Rufus the dog: woof"
rufus.howl(); // prints "Rufus the dog: awoooooooo"

//This will setup the same prototype chain as in the Functional Prototypal Inheritance and the Function Constructors Prototypal Inheritance examples:

console.log(Object.getPrototypeOf(rufus) === Dog.prototype); //true
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype); //true
