# Node's module system

### CLI commands:

- `node -e "require('./index.js')"` - befaves the same like simple node call

### Detecting main module:

When a file is the entry point of a program, it's the main module. We can detect whether a particular file is the main module in two ways.<br>

We can check if `module.parent` is `null` or we can check if `require.main` is the module object.

### How require works:

require(X) from module at path Y

1. If X is a core module,
   a. return the core module
   b. STOP
2. If X begins with '/'
   a. set Y to be the filesystem root
3. If X begins with './' or '/' or '../'
   a. LOAD_AS_FILE(Y + X)
   b. LOAD_AS_DIRECTORY(Y + X)
   c. THROW "not found"
4. If X begins with '#'
   a. LOAD_PACKAGE_IMPORTS(X, dirname(Y))
5. LOAD_PACKAGE_SELF(X, dirname(Y))
6. LOAD_NODE_MODULES(X, dirname(Y))
7. THROW "not found"
