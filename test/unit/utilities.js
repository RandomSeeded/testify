var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){
    it('should have all the necessary methods', function(){
      todo.util.trimTodoName.should.be.a('function');
      expect(todo.util.getUniqueId).to.be.a('function');
      assert.typeOf(todo.util.isValidTodoName, 'function');
    });
  });
});

describe('the todo.util methods', function() {
});
