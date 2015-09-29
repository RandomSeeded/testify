var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){
    it('should have all the necessary methods', function(){
      expect(todo.util).to.have.property('trimTodoName');
      todo.util.trimTodoName.should.be.a('function');
      expect(todo.util.getUniqueId).to.be.a('function');
      assert.typeOf(todo.util.isValidTodoName, 'function');
    });
    it('should have a bonus test for the length method', function() {
      expect([1,2,3]).to.have.length(3);
    });
  });
});

describe('the todo.util methods', function() {
  describe('trimTodoName', function() {
    it('should remove spaces', function() {
      expect(todo.util.trimTodoName(' abcd')).to.equal('abcd');
    });
    it('should not remove spaces from inside the todo', function() {
      expect(todo.util.trimTodoName('a b')).to.not.equal('ab');
    });
  });
  describe('isValidTodoName', function() {
    it('should return true for valid todo names', function() {
      expect(todo.util.isValidTodoName('ab')).to.equal(true);
      expect(todo.util.isValidTodoName('a b')).to.equal(false);
      expect(todo.util.isValidTodoName('a bc')).to.equal(true);
    });
    it('should return false for todo names without at least two non-space characters', function() {
      todo.util.isValidTodoName('a').should.equal(false);
      todo.util.isValidTodoName('a ').should.equal(false);
    });
  });
  describe('getUniqueId', function() {
    var seen = {};
    it('should return a unique id for every invocation', function() {
      seen[todo.util.getUniqueId()] = true;
      expect(seen[todo.util.getUniqueId()]).to.be.undefined;
    });
  });
});
