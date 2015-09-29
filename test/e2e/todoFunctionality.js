/* globals casper, document */
casper.test.begin('App is setup correctly', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
    this.fill('form.todo-form', {
      todo: 'asdf'
    }, true);
  });
  
  casper.then(function() {
  });

  casper.run(function() {
    test.done();
  });
});


