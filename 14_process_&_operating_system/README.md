# PROCESS & OPERATING SYSTEM

### STDIO (standard input/output)

The `process` object exposes three streams:

- `process.stdin` - `Readable` stream for process input.
- `process.stdout` - `Writable` stream for process output.
- `process.stderr` - `Writable` stream for process error output.

`process.stdin`, `process.stdout` and `process.stderr` streams are UNIQUE, so they never finish, error or close!!!<br>

### tty

`tty` is a command in Unix and Unix-like operating systems to print the file name of the terminal connected to standard input. `tty` stands for TeleTYpewriter.
`process.stdin.isTTY` - allows to check if process is being piped to on the command line

