import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

const selectors = {
  calcLink: '[data-ref="calcLink"]',
  firstField: '[data-ref="first-field"]',
  secondField: '[data-ref="second-field"]',
  operationSelect: '[data-ref="operation-select"]',
  ansField: '[data-ref="ans-field"]',
  calcBtn: '[data-ref="calcBtn"]',
  firstLabel: '[data-ref="firstLabel"]',
  secondLabel: '[data-ref="secondLabel"]',
  operationLabel: '[data-ref="operationLabel"]',
  ansLabel: '[data-ref="ansLabel"]'
};

module('Acceptance | calculator', function(hooks) {
  setupApplicationTest(hooks);

  test('verify navigation to calculator application', async function(assert) {
    await visit('/');
    await click(selectors.calcLink);

    assert.equal(currentURL(), '/calc');
  });

  test('verify general working of the calculator component', async function(assert) {
    await visit('/');
    await click(selectors.calcLink);

    assert.dom(selectors.firstField).exists();
    assert.dom(selectors.secondField).exists();
    assert.dom(selectors.operationSelect).exists();
    assert.dom(selectors.ansField).exists();
    assert.dom(selectors.firstLabel).exists();
    assert.dom(selectors.secondLabel).exists();
    assert.dom(selectors.operationLabel).exists();
    assert.dom(selectors.ansLabel).exists();

    assert.dom(selectors.firstField).hasValue('10');
    assert.dom(selectors.secondField).hasValue('20');
    assert.dom(selectors.ansField).hasValue('30');
    assert.dom(selectors.operationSelect).hasValue('+');

    await fillIn(selectors.firstField, '30');
    await fillIn(selectors.operationSelect, '-');
    await fillIn(selectors.secondField, '10');

    await click(selectors.calcBtn);

    assert.dom(selectors.ansField).hasValue('20');

    assert.dom(selectors.firstLabel).hasText('First No: 30');
    assert.dom(selectors.operationLabel).hasText('Operation: -');
    assert.dom(selectors.secondLabel, 'Second No: 10');
    assert.dom(selectors.ansLabel, '20');
  });
});
