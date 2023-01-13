# What's Typescript?

>  TypeScript is JavaScript, but with types! Basically, TypeScript lets you write code in a way that reduces bugs from type mutability and type coercion.


:::tip Before You Begin

These are my own personal notes taken from [The Official TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html). To follow along, you'll need foundational skills in JavaScript, the command line, git, and GitHub.

:::

When you write TypeScript, you basically just add a little additional syntax to your Javascript that makes your data and computations much more structured. It provides tooling to block errors that could occur from things like type coercion, indexing into an `undefined` key, etc. We can't tell you everything it does upfront, but for now just remember it helps you write better-structured JavaScript, with fewer errors.

## Key Features

With TypeScript, you get a few key features:

- **Type Annotations**\
    As you pass data around in JavaScript, one very common source of bugs is from accidentally performing a computation on the wrong kind of data. Type annotations are little snippets added to variables, functions and objects that tell what data types are allowed to be used.
- **Type Inference**\
    Type Annotations are not required. In many cases, TS can guess what type is allowed in some code based on how its instantiated.
- **A Compiler**\
    Command Line tooling to compile your TS into JS. Comes with [configuration options](https://www.typescriptlang.org/tsconfig#strict) to define compile time behavior.
- **An Opt-in Experience**\
    The compiler config options let you incrementally define how loose or strict error checks are at compile time. At the low end, you can run any valid JS in a `.ts` file. At the high end, you can make its type-checking rules incredibly rigid... Add TS to your functioning JS project, and refactor into TS how and where you see fit.
- **Dev Tooling**\
    IDEs that support TypeScript will provide tooling for writing and debugging your code. You'd get syntax hi-lighting, auto-completion, error-spotting... and beyond.

These key features will be explained more in the following pages.

## Types in Typescript

Remember, the term *Type* describes how you can compute with a value. That means:

- What values you can pass to it and what will crash.
- How you can compute with a value and how you *can't* compute with a value.
- Example: passing wrong type of value to a function
- Example: `number` addition vs `string` concatenation

:::tip Dynamic vs. Static Typing

In dynamic typing, you check types when the code executes. In static typing, you explicitly define the type upfront. In dynamic typing, your language has a system to check types *on the fly*.

:::


### TypeScript is a typed superset of JavaScript

- TS provides a typing system.

- Example

- TS never changes runtime behavior of JS. This means you can put your JS directly in a TS file and it runs exactly the same, even if TS throws some type errors. 

- Bottom Line: The types system used during compilation has no bearing on how your programs runs, it just provides type warnings.

- Everything that applies in Javascript also applies in TypeScript.

- If you can perform an operation in JavaScript, you can perform it in TypeScript.

### Compiled Code

When your TS code is "compiled", this just means TS takes it all and then turns it into clean vanilla JS. This "compiled" JavaScript has none of the additional TS syntax. This means that for any file in your program, you can easily use TS or JS interchangeably, as you see fit, without issues.

### Non-exception Failures

- trying to access a non-existent property
- typeo's
- uncalled functions
- basic logic errors

### Types Enable Better Tooling

The TS static typing system knows what your code looks like. This means you get the following tooling in editors that support TS:

- “quick fixes” to automatically fix errors
- refactorings to easily re-organize code
- useful navigation features for jumping to definitions of a variable
- finding all references to a given variable

