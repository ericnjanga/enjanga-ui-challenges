🔒 Closures, Prototypes, and this
---------------------

[0.] Primitives
(https://chatgpt.com/c/68ea8d83-f440-832f-a326-291266ca5209)
-------
🟢 Basic 
  - What will each of these log? 
      - console.log(1 + '2' + 3);
      - console.log('5' - 2);
      - console.log(Boolean('false'));
      - console.log(Number(undefined));
      - console.log(null == undefined);
      - console.log(null === undefined);


Create variables of each primitive type and log their typeof.

🟡 Intermediate 
  - Explain why this code behaves oddly:

  const x = NaN;
  console.log(x === NaN);


  Create an object with both string and symbol keys and iterate over its properties.
  What happens?

  Write a function safeAdd(a, b) that:

  Converts both values to numbers if possible

  Returns NaN if conversion fails

  Handles null and undefined gracefully

🔴 Advanced

  - Implement a function deepCompare(a, b) that correctly checks equality between: 
      - Primitives (including NaN) 
      - Objects with primitive values 
      - Symbol keys ignored

  Create a custom object that overrides Symbol.toPrimitive to behave differently when used in arithmetic vs string contexts.

  const obj = { value: 42, [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.value;
    if (hint === 'string') return `Value is ${this.value}`;
    return null;
  }};
  console.log(obj + 10);
  console.log(`${obj}`);


Write a short explanation (in your own words) of how JavaScript treats primitives in memory and how this differs from objects.
