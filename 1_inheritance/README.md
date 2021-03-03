# Inheritance Homework (1st Session)

### Task

- Give a short introduction to inheritance (~3min)
  - You select the language
  - Basic usage example
  - How does it work (e.g. JS Prototype inheritance is different from Java)

### How to compile & run this

- Run `npx tsc basic.ts` to compile the .ts file.
- Run `node basic.js` to run the compiled file.

### Script

> Here's the *written* introduction to inheritance.
> The *spoken* introduction of this has been uploaded to Eduflow.

**Basic Usage:**

[Here](basic.ts) I have created a simple example of Inheritance in TypeScript.

It features two types of cars. A `BasicCar` and a `FastCar`. The latter inherits all the methods and variables from `BasicCar`, whilst overriding the `acceleration` parameter and adding the method `shoutOutOfTheWindow`.

The basic functionality that both cars share is:

- Brand & Model `string` - Info about the car
- Speed `number` - Speed may be changed
- accelerate() & decelerate() `methods` - Change the `speed` and return a message

Now if we run this, we get the following:

```
Ford Focus is driving 20
Daimler E-Coupé is driving 40
Opening window...
You shouted: YOU LOOSERS ARE TOO SLOW!
Closing window again...
```

This shows that the FastCar does indeed override the `acceleration` and the `shoutOutOfTheWindow()` method got added successfully.

**How it works:**

TypeScript class members are ***public by default***. That means, that you don't have to use make methods or variables `public` explicitly. This is a key difference from Java for example.

It is possible to declare **private** fields: `#name: string;`
The **#** makes a field private, so that it cannot be accessed from outside of the given class.

There's also a way to make fields **protected**, which works similar to *private* only that deriving classes ***may*** access the field.

Another concept to mention here is **Abstract Classes**, which are classes than cannot be instantiated. Their primary use is to allow inheritance, while not allowing instanciation.

