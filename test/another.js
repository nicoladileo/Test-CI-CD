var assert = require('assert');
describe('Nicola', function() {
  describe('#method()', function() {
    it('string should by my name', function() {
	  let string = 'NICOLA';
      assert.equal(string, 'NICOLA');
    });
  });
});