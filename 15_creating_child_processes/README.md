# CREATING CHILD PROCESSES

The child_process module provides the ability to spawn subprocesses. By default, pipes for `stdin`, `stdout`, and `stderr` are established between the parent Node.js process and the spawned subprocess.<br>

The child_process module has the following methods, all of which spawn a process some way or another:

- `exec` & `execSync`
- `spawn` & `spawnSync`
- `execFile` & `execFileSync`
- `fork`

### execSync

The `execSync` method returns a buffer containing the output (from STDOUT) of the command.<br>

Any command that is available on the host machine can also be executed.<br>

The `child_process.execSync()` method is generally identical to `exec` with the exception that the method will not return until the child process has fully closed. When a timeout has been encountered and killSignal is sent, the method won't return until the process has completely exited. If the child process intercepts and handles the SIGTERMsignal and doesn't exit, the parent process will wait until the child process has exited.

The ASYNC `exec` method takes a shell command as a string and executes it the same way as `execSync`. It spawns a shell then executes the command within that shell, buffering any generated output. The command string passed to the `exec` function is processed directly by the shell and special characters (vary based on shell) need to be dealt with accordingly.
