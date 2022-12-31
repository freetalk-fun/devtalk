# What's Typescript?

>  TypeScript is JavaScript, but with types! When you write TS code, you specify types on inputs and outputs. Your TS code will be compiled and these types will be checked. If you have type errors, TypeScript will warn you.

:::tip

This series represents my own personal notes taken from [The Official TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) and peppered with info from other sources as well.

:::


:::tip before You Begin

TypeScript basically just adds a type system to Javascript. It provides training wheels to block errors that could occur from things like type coercion, indexing into an `undefined` key, etc. To understand it, you'll first need to understand JavaScript.

- `JavaScript`
- `git`
- `GitHub`

:::

With TypeScript, you get a few key features:

- **Type Annotations**\
    A little snippet in your code that tell what types are allowed to be passed.
- **Type Inference**\
    Type Annotations are not required. In many cases, TS can guess what type is allowed in some code based on how its instantiated.
- **A Compiler**\
    Command Line tooling to compile your TS into JS. Comes with [configuration options](https://www.typescriptlang.org/tsconfig#strict) to define compile time behavior.
- **An Opt-in Experience**\
    The compiler config options let you incrementally define how loose or strict error checks are at compile time. At the low end, you can run any valid JS in a `.ts` file. At the high end, you can make its type-checking rules incredibly rigid. Add TS to your functioning JS project, and refactor into TS how and where you see fit.
- **Dev Tooling**\
    IDEs that support TypeScript will provide tooling for writing and debugging your code. You'd get syntax hi-lighting, auto-completion, error-spotting... and beyond.

These key features will be further introduced in this page and explained at greater depth in the following pages. Please keep in mind, this is a 20/80 guide. It is meant to outline 20% of TypeScript features that we'll use 80% of the time.

## Types in Typescript

The *type* of a value describes how you can compute with it.

- what values you can pass to it and what will crash.
- how you can compute with a value and how you *can't* compute with a value.

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

When your TS code is "compiled", it produces clean vanilla JS. It has none of the additional TS syntax.

This means you can easily transition between TS and JS without issues.


### Static Type Checking

As you're writing your code, Typescript can highlight type-errors.

<!-- Provide an example -->

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


## The Compiler

## Emitting with Errors

## Explicit Types

### Type Inference
### Type Annotations

## Downleveling

## Strictness

CLI 

`strict`

tsconfig.json

`"strict": true`

:::tip

When possible, you should always turn these strictness checks on for your codebase.

:::

### `noImplicitAny`

Turning on the noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as any.

### `strictNullChecks`

