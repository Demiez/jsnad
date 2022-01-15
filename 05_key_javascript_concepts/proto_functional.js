const wolf = {
  howl: function () {
    console.log(this.name + ': awoooooooo');
  },
};

const dog = Object.create(wolf, {
  woof: {
    value: function () {
      console.log(this.name + ': woof');
    },
  },
});

const rufus = Object.create(dog, {
  name: { value: 'Rufus the dog' },
});

rufus.woof(); // prints "Rufus the dog: woof"
rufus.howl(); // prints "Rufus the dog: awoooooooo"

// Creation of instance of dog through functional paradigm as it applies to prototypal inheritance
function createDog(name) {
  return Object.create(dog, {
    name: { value: name + ' the dog' },
  });
}

const jack = createDog('Jack');

jack.woof();
jack.howl();

// The property of object
console.log(Object.getOwnPropertyDescriptor(jack, 'name'));

// The prototype of an object can be inspected with Object.getPrototypeOf:
console.log(Object.getPrototypeOf(rufus) === dog); //true
console.log(Object.getPrototypeOf(dog) === wolf); //true
