import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest, fillIn, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const template = hbs`<Todos::TodoForm @todosCount={{this.todosCount}} @save={{this.save}}/>`;
const selectors = {
  saveBtn: '[data-ref="saveBtn"]',
  newTodo: '[data-ref="newTodo"]',
  todosCount: '[data-ref="todosCount"]'
};

let newlyCreatedTodo;
module('Integration | Component | todos/todo-form', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.set('save', function (newTodo) {
      // this callback function will be passed by the parent of this component
      newlyCreatedTodo = newTodo;
    });
  });

  test('it verifies the save button enabling/disabling', async function(assert) {
    await render(template);
    assert.dom(selectors.saveBtn).isDisabled();

    await fillIn(selectors.newTodo, 'Todo 1');
    assert.dom(selectors.saveBtn).isNotDisabled();

    await fillIn(selectors.newTodo, '');
    assert.dom(selectors.saveBtn).isDisabled();
  });

  test('it verifies the display of the todos count', async function (assert) {
    this.set('todosCount', 4);
    await render(template);
    assert.dom(selectors.todosCount).hasText('(4)');
  });

  test('it sends out the newly created todo', async function (assert) {
    await render(template);
    await fillIn(selectors.newTodo, 'Todo 1');
    await click(selectors.saveBtn);
    assert.equal(newlyCreatedTodo, 'Todo 1');
    assert.dom(selectors.newTodo).hasValue('');
    assert.dom(selectors.saveBtn).isDisabled();
  });
});
