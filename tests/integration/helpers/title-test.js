import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | title', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders in title case', async function(assert) {
    this.set('inputValue', 'get up early');

    await render(hbs`{{title inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Get up early');
  });

  test('it renders nothing when no input is passed', async function(assert) {
    this.set('inputValue', '');

    await render(hbs`{{title inputValue}}`);

    assert.equal(this.element.textContent.trim(), '');
  });
});
