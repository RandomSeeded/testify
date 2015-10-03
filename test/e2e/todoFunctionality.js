/* globals casper, document */
casper.test.begin('App is setup correctly', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
    this.fill('form.todo-form', {
      todo: 'new todo'
    }, true);
  });
  
  casper.then(function() {
    test.assertEval(function() {
      return __utils__.findAll('.todo-item').length >= 2;
    });
  });

  casper.run(function() {
    test.done();
  });
});


