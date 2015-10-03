describe('API integration', function(){
  var server, setupStub;
  var JSONresponse = JSON.stringify({todos: ['1', '2', '3']});

  beforeEach(function() {
    server = sinon.fakeServer.create();
    server.respondWith([200, { "Content-Type": "application/json" }, JSONresponse]);
    setupStub = sinon.stub(todo, "setup", function() {
    });
  });
  
  afterEach(function() {
    todo.setup.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function (done) {
    todo.init();
    server.respond();
    setTimeout(function() {
      assert(setupStub.calledWith(['1','2','3']));
      done();
    }, 1000);
  });
});
