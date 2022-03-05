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

### exiting

Active handles are present in some API. An `active handle` is a reference that keeps the process open. For instance, `net.createServer` creates a server with an active handle which will stop the process from exiting by itself so that it can wait for incoming requests. Timeouts and intervals also have active handles that keep the process from exiting.

#### exit codes (can be verified by `echo $?`):
- 0 - exit code of 0 means the process executed successfully
- 1 - exit code of 1 means general failure

#### exit event

The `exit` event can also used to detect when a process is closing and perform any final actions, but no asynchronous work can be done in the event handler function because the process is exiting.

### Process info

Main thing to check are:
- The current working directory of the process (`process.cwd()`)
- The platform on which the process is running (`process.platform`)
- The Process ID (`process.pid`)
- The environment variables that apply to the process (`process.env`)

Environment variables are key value pairs, when `process.env` is accessed, the host environment is dynamically queried and an object is built out of the key value pairs. This means `process.env` works more like a function, it's a getter. When used to set environment variables, for instance `process.env.FOO='my env var'` the environment variable is set for the process only, it does not leak into the host operating system.<br>

`process.env.PWD` also contains the current working directory when the process executes. But if the process changes its directory with `process.chdir()`, `process.cwd()` will return the new directory whereas `process.env.PWD` continues to store the directory that process was initially executed from.