# INTERACTING WITH THE FILE SYSTEM

### __filename and __dirname

The `__filename` variable holds the absolute path to the currently executing file, and the `__dirname` variable holds the absolute path to the directory that the currently executing file is in.

### Path module

The `path` module is important for path manipulation and normalization across platforms.<br>

Main methods are:
- `path.join()` - generates a path that's suitable any platform (resolves problems with /\ for POSIX systems and Windows)
- `path.isAbsolute()` - returns true if path is absolute
- `path.relative()` - returns relative path difference between 2 absolute paths
- `path.resolve()` - accepts multiple string arguments representing paths. Conceptually each path represents navigation to that path. The path.resolve function returns a string of the path that would result from navigating to each of the directories in order using the command line `cd` command.
- `path.normalize()` - normalizes path by removing `..` and `.` notations in it
- `path.format()` - builds a string from the object, provided by `path.parse()`

Path deconstructors are:
- `path.parse()` - returns an object with `root`, `dir`, `base`, `ext`, and `name` properties
- `path.basename()` = base (name + extension of file)
- `path.extname()` = ext
- `path.dirname()` = dir

### Path documentation

[Node Path Docs](https://nodejs.org/dist/latest-v16.x/docs/api/path.html)

### Fs module

The `fs` module has lower level and higher level APIs. The lower level API's closely mirror POSIX system calls. For instance, `fs.open` opens and possibly creates a file and provides a file descriptor handle, taking same options as the POSIX open command.<br>

Higher level API's of `fs` module are built on top of lower level APIs.

The higher level methods of `fs` module for reading and writing are provided in four abstraction types:

- Synchronous - methods end with Sync (`fs.readFileSync()`)
- Callback based
- Promise based
- Stream based

### generating permisions
`fs.chmodSync()` - allows to generate access permissions to the file [fs.chmodSync doc permission numbers](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fs_fs_fchmodsync_fd_mode)

### Fs async operations

Async flow is reached via callbacks or promises. `const { readFile, writeFile } = require('fs').promises` is backwards compatible with Node v10-v12, in other cases `const { readFile, writeFile } =  require('fs/promises')` can be used.