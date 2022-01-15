# Debugging and diagnostics

Node.js process must be started in `Inspect mode` in order to debug. Inspect puts the process into a debuggable state and exposes a remote protocol, which can be connected to via debugger. In addition it grants the ability to run other diagnostic checks on a Node.js process.<br>

The remote debugging protocol uses WebSockets which is why a `ws://` protocol address is printed.<br>

To debug in Chrome browser tab's address bar shoudl be set to `chrome://inspect`. At devices clicking the "inspect" link will open an instance of Chrome Devtools that is connected to the Node process. Also don't forget to add folder to workspace.

### Used command line flags:

- `--inspect` or `--inspect-brk` (cause the process to start with an active breakpoint)

### debugger statement

Using a Code Keyword `debugger;`, it is added directly to the code.

### official doc

[official doc](https://nodejs.org/en/docs/guides/debugging-getting-started/)
