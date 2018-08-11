## Partial Application

#### PARTIAL APPLICATION IN JAVASCRIPT

Definition from Wikipedia

In computer science, partial application (or partial function application) refers to the process of fixing a number of arguments to a function producing another function of smaller arity

Partial application is thus the application of part of the arguments of a function, and getting in return a function that takes the remaining arguments

Mathematical representation of partial application in action.

g(b,x) = f(2,b,x) = 2∗x+b
g(b,x) = f(2,b,x) = 2∗x+b

Here the function g has an arity of 2 and then maps to a function f which partially applies the arguments x and b.

Explanation in programmatic terms.

The partial application function will receive a callback function and a value

Then it can return another function that has another value but maps both values by applying one or more arguments.

```js
const test = require('tape');

const {
  partialApply
} = require('../src');

test('test partial application', t => {
  function counter () {
    return [].slice.call(arguments).reduce(function(prev, curr) {
      return prev + curr;
    }, 0);
  }
  const firstApplication = partialApply(counter, [1, 2, 3, 4, 5, 6]);
  const otherArgs = [7, 8, 9, 10];
  const actual = firstApplication(otherArgs);
  const expected = 55;
  t.equal(actual, expected);
  t.end();
});
```

Here is sample unit test using partial apply
