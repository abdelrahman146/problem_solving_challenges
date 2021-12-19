const { assert } = require('chai');
const queueTime = require('./solution');

describe('example tests', function () {
  assert.equal(queueTime([], 1), 0);
  assert.equal(queueTime([1, 2, 3, 4], 1), 10);
  assert.equal(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
  assert.equal(queueTime([1, 2, 3, 4, 5], 100), 5);

  //add some more example tests here, if you like
});
