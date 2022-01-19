# Node's module system

### CLI commands:

- `node -e "require('./index.js')"` - befaves the same like simple node call

### Detecting main module:

When a file is the entry point of a program, it's the main module. We can detect whether a particular file is the main module in two ways.<br>

We can check if `module.parent` is `null` or we can check if `require.main` is the module object.
