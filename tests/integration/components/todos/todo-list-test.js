import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | todos/todo-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Todos::TodoList/>`);
    await pauseTest();
  });
});
