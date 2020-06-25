import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

const template = hbs`<Todos::TodoList
  @todos={{this.todos}}
  @onTodoChecked={{this.onTodoChecked}}/>`;

const selectors = {
  description: '[data-ref="description"]',
  date: '[data-ref="createdDate"]',
  firstTodoDescription: 'div:nth-child(1) > [data-ref="description"]',
  fourthTodoDescription: 'div:nth-child(4) > [data-ref="description"]',
  firstTodoCheckbox: 'div:nth-child(1) > [data-ref="checkbox"]',
  secondTodoCheckbox: 'div:nth-child(2) > [data-ref="checkbox"]',
}

let idTodo;
let checkedTodo;

module('Integration | Component | todos/todo-list', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    idTodo = null;
    checkedTodo = null;

    this.set('onTodoChecked', function (checkedStatus) {
      const { id, checked } = checkedStatus;
      idTodo = id;
      checkedTodo = checked;
    });
  }),

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

  test('it verifies the outward action data on checking/unchecking todo', async function(assert) {
    this.set('todos', [
      {
          id: 1,
          description: 'get up early',
          done: false,
          createdDate: moment(new Date()),
      },
      {
          id: 2,
          description: 'go for bath',
          done: false,
          createdDate: moment(new Date()),
      },
      {
          id: 3,
          description: 'Code',
          done: false,
          createdDate: moment(new Date()).subtract(1, 'day')
      },
      {
          id: 4,
          description: 'Lunch',
          done: false,
          createdDate: moment(new Date()).subtract(2, 'day')
      }
    ]);

    await render(template);
    await click(selectors.firstTodoCheckbox);
    assert.equal(idTodo, '1');
    assert.equal(checkedTodo, true);

    await click(selectors.secondTodoCheckbox);
    assert.equal(idTodo, '2');
    assert.equal(checkedTodo, true);

    await click(selectors.firstTodoCheckbox);
    assert.equal(idTodo, '1');
    assert.equal(checkedTodo, false);
  });

});
