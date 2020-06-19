import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

const selectors = {
  calcLink: '[data-ref="calcLink"]',
  todosLink: '[data-ref="todosLink"]',
  libraryLink: '[data-ref="libraryLink"]'
}

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('verify the entire app navigation', async function(assert) {
    await visit('/');

    await click(selectors.calcLink);
    assert.equal(currentURL(), '/calc');
    assert.dom('h2').hasText('Calculator application');

    await click(selectors.todosLink);
    assert.equal(currentURL(), '/todos');
    assert.dom('h2').hasText('Todos Application');

    await click(selectors.libraryLink);
    assert.equal(currentURL(), '/library');
    assert.dom('h2').hasText('Library application');
  });
});
