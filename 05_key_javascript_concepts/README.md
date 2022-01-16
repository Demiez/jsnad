# Key JavaScript Concepts

### Prototypal inheritance

At a fundamental level, inheritance in JavaScript is achieved with a chain of prototypes. The approaches around creating prototype chains have evolved significantly over time, as updates to the language have brought new features and syntax.<br>

There are many approaches and variations to creating a prototype chain in JavaScript but we will explore three common approaches:

- functional
- constructor functions
- class-syntax constructors.

### Functional (proto_functional.js):

Achieved through Object.create()
Commands to check property descriptor:

- `node -p "Object.getOwnPropertyDescriptor(process, 'title')"`
- `node -p "Object.getOwnPropertyDescriptor(global, 'process')"`

### Class-syntax

Modern JavaScript (EcmaScript 2015) has a class keyword. It's important that this isn't confused with the class keyword in other Classical OOP languages.<br>

The class keyword is syntactic sugar that actually creates a function. Specifically it creates a function that should be called with new. It creates a Constructor Function.
