import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

const template = hbs`<Todos::TodoList @todos={{this.todos}}/>`;
const selectors = {
  description: '[data-ref="description"]',
  date: '[data-ref="createdDate"]',
  firstTodoDescription: 'div:nth-child(1) > [data-ref="description"]',
  fourthTodoDescription: 'div:nth-child(4) > [data-ref="description"]',
}

module('Integration | Component | todos/todo-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with 4 todos', async function(assert) {
    this.set('todos', [
      {
          description: 'get up early',
          done: true,
          createdDate: moment(new Date()),
      },
      {
          description: 'go for bath',
          done: true,
          createdDate: moment(new Date()),
      },
      {
          description: 'Code',
          done: false,
          createdDate: moment(new Date()).subtract(1, 'day')
      },
      {
          description: 'Lunch',
          done: false,
          createdDate: moment(new Date()).subtract(2, 'day')
      }
    ]);

    await render(template);
    assert.dom(selectors.description).exists({ count: 4});
    assert.dom(selectors.date).exists({count: 4});
    assert.dom(selectors.firstTodoDescription).hasText('Get up early');
    assert.dom(selectors.fourthTodoDescription).hasText('Lunch');
  });
});
