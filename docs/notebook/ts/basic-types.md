# Basic Types

> In TypeScript, a type annotation signals what values a variable can store. TypeScript is pretty smart. Many times they aren't even needed. This pages goes through the basics of type annotations so you know how to identify and use them yourself.


:::tip 

The type names `String`, `Number`, and `Boolean` (starting with capital letters) are legal, but refer to some special built-in types that will very rarely appear in your code. Always use string, number, or boolean for types.

:::

## string

```ts

let s: string;

// runs
s = "dog"

// throws error
s = 4

```

## boolean

```ts

let isTrue: boolean =  false;

```

## number
`int` and `float` are both just `number` in typescript.

```ts

let age: number =  30;

```

## any

You can use `any` as a catch-all type. Pass anything you want and you won't get type check errors. Here's a code example from the [official TypeScript docs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any).

```ts
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

## array

```ts

let n: number[];

n = [1,2,3];

let l: string[] = ['one', "two", "three"];

```

<!-- @TODO
## tuple


## object

## literal

## union 
-->

## function

You can add type annotations to parameters.

```ts
// param1 is a string

function myFunc(param1: string) {
    console.log(param1)
}

// if you try to pass anything but a string into param1 you get an error.
```

You can also add return type annotations

```ts
// param1 is a string

function myFunc(param1): string {
    return param1
}
// This function must return a string, or else TS throws an error. 
```

Most of the time, typescript will actually infer the return type, which means this isn't necessary. But some projects add it to help document whats happening in the code.

<!-- @TODO
## enum

## void

## undefined

## none

## Custom Types
 -->