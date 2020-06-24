import { module, test } from 'qunit';
import { visit, currentURL, pauseTest, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

const selectors = {
  doneTodosCount: '[data-ref="doneTodosCount"]',
  saveBtn: '[data-ref="saveBtn"]',
  newTodo: '[data-ref="newTodo"]',
  firstTodoCheckbox: 'div:nth-child(1) > [data-ref="checkbox"]',
  secondTodoCheckbox: 'div:nth-child(2) > [data-ref="checkbox"]',
};

module('Acceptance | todos', function(hooks) {
  setupApplicationTest(hooks);

  test('the working of the done todos count', async function(assert) {
    await visit('/todos');

    await fillIn(selectors.newTodo, 'Todo 1');
    await click(selectors.saveBtn);

    await fillIn(selectors.newTodo, 'Todo 2');
    await click(selectors.saveBtn);

    await click(selectors.secondTodoCheckbox);

    assert.dom(selectors.doneTodosCount).hasText('(1)');

    await click(selectors.firstTodoCheckbox);

    assert.dom(selectors.doneTodosCount).hasText('(2)');

    await click(selectors.firstTodoCheckbox);

    assert.dom(selectors.doneTodosCount).hasText('(1)');
  });
});
