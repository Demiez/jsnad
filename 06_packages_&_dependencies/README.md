# Packages and dependencies

### CLI commands:

- `npm install -h` - flag -h shows quick help output for a particular command
- `npm init` - initializes node project
- `npm init -y` - shorthand
- `npm i pino`
- `npm install --production` - install only prod dependencies
- `node --print "fs.readdirSync('.').join(' ')"` - shows content of current folder
- `node --print "fs.readdirSync('node_modules').join('\t')"` - The node_modules folder contains the logger package, along with all the packages in its dependency tree
- `npm ls` or `npm list` - shows dependency tree
- `npm ls --depth=2` - shows subdependencies on depth 2 level
- `npm ls --prod --all` - shows only prod dependencies to full depth
- `npm ls --dev --all` - shows only dev dependencies to full depth
- `node -e "require('pino')().info('testing')"` - eval dependency
- `node -e "fs.rmdirSync('node_modules', {recursive: true})"` - DEPRECATED : remove node_modules folder
- `node -e "fs.rmSync('node_modules', {recursive: true})"` - remove node_modules folder
- `npm run lint -- --fix` - add flag fix to executed script

### Package script namespaces

There are two package scripts namespaces that have dedicated npm commands: `npm test` and `npm start`.

### Notations:

insert hard-to-see/type characters using \ notation:

- `\a` is alert/bell
- `\b` is backspace/rubout
- `\n` is newline
- `\r` is carriage return (return to left margin)
- `\t` is tab

### Semver format

Info on ['Semver website'](https://semver.org/)
Complete syntax ['syntax](https://docs.npmjs.com/cli/v6/using-npm/semver)

- using a caret (`^`) on version numbers is basically the same as using an x in the MINOR and PATCH positions, so ^6.2.1 is the same as 6.x.x.
