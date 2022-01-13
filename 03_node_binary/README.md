# The node binary

### Used command line flags:

- node --help
- node --v8-options (additional flags for modifying the JavaScript runtime engine: V8)
- node --check app.error.js (check syntax) or node -c app.error.js (if the code parses successfully, there will be no output)

### Dynamic evaluation:

- node --print "2+1" (node -p "2+1") - evaluates an expression and prints the result
- node --eval "2+1" (node -e "console.log(2+1)") - evaluates without printing the result of the expression.
- node -p "fs.readdirSync('.').filter((f) => /.js$/.test(f))" - prints all js files in current directory
- node -p "fs.readdirSync('.').filter((f) => /.md$/.test(f))" - prints all md files in current directory

### Preloading Modules

The command line flag -r or --require can be used to preload a module before anything else loads. Preloading modules is useful when using consuming modules that instrument or configure the process in some way. One example would be the dotenv module.<br>
node -r ./preload.js app.js (node --require ./preload.js app.js)

### Stack Trace Limit
