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