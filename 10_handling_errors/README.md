# HANDLING ERRORS

### Kinds of errors:

- `Operational errors` - are errors that happen while a program is undertaking a task. For instance, network failure would be an operational error. Operational errors should ideally be recovered from by applying a strategy that is appropriate to the scenario. For instance, in the case of a network error, a strategy would likely be to retry the network operation.
- `Developer errors` - are where a developer has made a mistake. The main example of this is invalid input. In these cases the program should not attempt to continue running and should instead crash with a helpful description so that the developer can address their mistake.
