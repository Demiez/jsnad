# HANDLING ERRORS

### Kinds of errors:

- `Operational errors` - are errors that happen while a program is undertaking a task. For instance, network failure would be an operational error. Operational errors should ideally be recovered from by applying a strategy that is appropriate to the scenario. For instance, in the case of a network error, a strategy would likely be to retry the network operation.
- `Developer errors` - are where a developer has made a mistake. The main example of this is invalid input. In these cases the program should not attempt to continue running and should instead crash with a helpful description so that the developer can address their mistake.

### Stack trace

Stack trace comes from the error object we created straight after using the throw keyword. The Error constructor is native to JavaScript, and takes a string as the Error message, while auto generating a stack trace when created. There's also a possibility to throw smth instead of Error instance and to check stack trace with flag `--trace-uncaught`, but it's not recommended.

### Native Error Constructors

Error is the native constructor for generating an error object. To create an error, call new Error and pass a string as a message `new Error('some-error-message')`. There are six other native error constructors that inherit from the base Error constructor:

- EvalError
- SyntaxError
- RangeError
- ReferenceError - will be automatically thrown by the JavaScript engine when attempting to refer to a non-existent reference (`node -p variable`)
- TypeError
- URIError - that occurs when encodeURI() or decodeURI() are passed invalid parameters

[Error MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
