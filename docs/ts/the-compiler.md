# The Compiler

> The compiler takes your TypeScript and turns it into pure vanilla JavaScript, so it can run in any JS-friendly environment. You can run individual files, multiple files, entire projects, or entire projects *minus specified* files. For projects, you need a `tsconfig.json` file, which allows you to configure which files get compiled, and how they get compiled.

## Compile a File

`tsc <filename.ts>`

This takes `<filename.ts>`, compiles it into a Javascript file, and runs the JavaScript file. If there are type errors, it will alert you in the command line.

## Compile with Flags

### `strict`

`tsc --strict <filename.ts>`

The `strict` flag turns on all of the strict mode family checks. Basically, it provides maximum strictness when type checking. For more details, see the documentation for the [`strict`](https://www.typescriptlang.org/tsconfig#strict) option.

### `noEmitOnError`

`tsc --noEmitOnError <filename.ts>`

If there is an error in the TS, the JS will not compile.

## Watch a File

`tsc <filename.ts> --watch` \
...or... \
`tsc <filename.ts> -w`

Any time we update the file, it will recompile and run the corresponding `.js` file, providing continuous feedback and error checking.

## Initialize a Project

1. Navigate to the root folder of your project.
2. Run `tsc --init` on the command line.

This will create a `tsconfig.json` file in the root folder of your project.

## The `tsconfig.json` file

This file basically indicates to TS that the current folder and everything in it should be managed by TS. Inside, you'll find all `compilerOptions`, with a brief description of each. This makes it easy to pick and choose whatever you need.

There are about ~75 options to define how the compiler works. Some wll be commented out, some will not. Especially at the beginning, you'll probably never need to use most of this stuff. To start, just pay attention to the items under `compilerOptions` that are NOT commented-out by default.

```json
{
    "compilerOptions": {
        ...
    },
}
```

The following are not created at initialization, but can be added as desired.

```json
{
    "compilerOptions": {
        ...
    },
    "files": [
        "file1.ts", 
        "file2.ts"
    ],  
    "extends": "./another/config-file",
    "include": [
        "file.ts", 
        "folder/file.ts"
    ],
    "exclude": [
        "somefile.ts",                  // Basic file path
        "some/nested/file.ts",          // A nested file
        "all/files/under/here/*.js"     // * File-level wildcards work
        "**/*.js",                      // * Folder-level wildcards work too
        "node_modules"                  // This isn't necessary, as node_modules are excluded by default.
    ]
    "references": [
        { "path": "../dir-name" }
    ],
}
```

### Top Level Configs

- **`compilerOptions`** — Lets you pass options to define how the compiler works.
- **`files`** — Takes an array of files to allow in the program. I suggest using the [`include`](#the-include-option) option, which does everything this `files` option can do, *and more.*
- **`extends`** — Contains another configuration file to inherit from.
- **`include`** — Typescript will *only* compile and run the files you add here.
- **`exclude`** — Typescript will compile and run all files, *except* the files you add here.
- **`references`** — Allows you to structure your program into smaller pieces. 

:::tip `include` & `exclude`

If you use both options, it will compile everything in `include` minus everything in `exclude`.

:::

:::tip

To learn more about the compiler options, please see the official [`tsconfig.json` documentation](https://www.typescriptlang.org/tsconfig#exclude)
as well as the official [`references` documentation](https://www.typescriptlang.org/docs/handbook/project-references.html).

:::

## Watch a Project

Once you've run `tsc --init` to initialize your project, we can run `tsc -w` and this will watch *all* files in the directory.

Any time we update a `.ts` file in the project, it will recompile and run, providing continuous feedback and error checking.
