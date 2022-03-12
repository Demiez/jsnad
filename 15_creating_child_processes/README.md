# CREATING CHILD PROCESSES

The child_process module provides the ability to spawn subprocesses. By default, pipes for `stdin`, `stdout`, and `stderr` are established between the parent Node.js process and the spawned subprocess.<br>

The child_process module has the following methods, all of which spawn a process some way or another:

- `exec` & `execSync`
- `spawn` & `spawnSync`
- `execFile` & `execFileSync`
- `fork`

### execSync/exec

The `execSync` method returns a `Buffer` containing the output (from STDOUT) of the command.<br>

Any command that is available on the host machine can also be executed.<br>

The `child_process.execSync()` method is generally identical to `exec` with the exception that the method will not return until the child process has fully closed. When a timeout has been encountered and killSignal is sent, the method won't return until the process has completely exited. If the child process intercepts and handles the SIGTERMsignal and doesn't exit, the parent process will wait until the child process has exited.

The ASYNC `exec` method takes a shell command as a string and executes it the same way as `execSync`. It spawns a shell then executes the command within that shell, buffering any generated output. The command string passed to the `exec` function is processed directly by the shell and special characters (vary based on shell) need to be dealt with accordingly.

### spawnSync/spawn

While `exec` and `execSync` take a full shell command, `spawn` takes the executable path as the first argument and then an array of flags that should be passed to the command as second argument.<br>

The `spawnSync` function returns an object(`SpawnSyncReturns<Buffer>`) containing information about the process that was spawned. So to get the desired `Buffer` we need to call `stdout` property or `output[1]`.<br>

Unlike `execSync`, the `spawnSync` method does not need to be wrapped in a `try/catch`. If a `spawnSync` process exits with a non-zero exit code, it does not throw!<br>

While `exec` accepts a callback, `spawn` does not. Both `exec` and `spawn` return a `ChildProcess` instance (`ChildProcessWithoutNullStreams`) however, which has `stdin`, `stdout` and `stderr` streams and inherits from `EventEmitter` allowing for exit code to be obtained after a close event is emitted.

### Main difference of spawn

There is one highly important difference between `spawn` and the other three methods (namely `exec`, `execSync` and `spawnSync`): the `spawn` method is the only method of the four that DOESN'T BUFFER CHILD PROCESS OUTPUT!<br>

Since the spawn method does not buffer at all, it will continue to stream output for the entire lifetime of the subprocess, no matter how much output it generates. Therefore, for long running child processes it's recommended to use the spawn method.
