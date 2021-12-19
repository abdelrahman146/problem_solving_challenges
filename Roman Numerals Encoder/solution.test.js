const { assert } = require('chai');
const solution = require('./solution');

describe('solution', () => {
  it('should handle small numbers', () => {
    assert.equal(solution(1), 'I', '1 should, "I"');
    assert.equal(solution(2), 'II', '2 should, "II"');
    assert.equal(solution(3), 'III', '3 should, "III"');
    assert.equal(solution(4), 'IV', '4 should, "IV"');
    assert.equal(solution(5), 'V', '5 should, "V"');
    assert.equal(solution(9), 'IX', '9 should, "IX"');
    assert.equal(solution(10), 'X', '10 should, "X"');
    assert.equal(solution(11), 'XI');
    assert.equal(solution(19), 'XIX');
    assert.equal(solution(22), 'XXII');
    assert.equal(solution(15), 'XV');
  });
});
