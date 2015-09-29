describe('API integration', function(){
  var server, setupStub, JSONresponse;

  beforeEach(function() {
    //server = sinon.fakeServer.create(); // how do we make sure this is used?
    // setupStub = sinon.stub(todo, "setup", function() {
    //   console.log('setup');
    // });
  });
  
  afterEach(function() {
    //todo.setup.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
    todo.init();
  });
  // NOTE: currently the onload callback in the todo.api.js is never being called. Unclear as to why; the server is responding just fine, and onerror isn't called either. Possibly a chromium thing?
});
