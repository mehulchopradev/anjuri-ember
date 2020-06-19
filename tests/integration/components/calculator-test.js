import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, pauseTest, fillIn, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const template = hbs`<Calculator/>`;

const selectors = {
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

module('Integration | Component | calculator', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the component with default values filled in', async function(assert) {
    await render(template);

    assert.dom(selectors.firstField).hasValue('10');
    assert.dom(selectors.secondField).hasValue('20');
    assert.dom(selectors.operationSelect).hasValue('+');
    assert.dom(selectors.ansField).hasValue('30');
  });

  test('it performs the calculation', async function(assert) {
    await render(template);

    await fillIn(selectors.firstField, '40');
    await fillIn(selectors.secondField, '20');
    await fillIn(selectors.operationSelect, '*');

    await click(selectors.calcBtn);
    assert.dom(selectors.ansField).hasValue('800');
  });

  test('it performs the calculation with default addition', async function(assert) {
    await render(template);

    await fillIn(selectors.firstField, '40');
    await fillIn(selectors.secondField, '20');

    await click(selectors.calcBtn);
    assert.dom(selectors.ansField).hasValue('60');
  });

  test('it updates the live calc results section', async function(assert) {
    await render(template);

    await fillIn(selectors.firstField, '40');
    assert.dom(selectors.firstLabel).hasText('First No: 40');

    await fillIn(selectors.secondField, '20');
    assert.dom(selectors.secondLabel).hasText('Second No: 20');

    await fillIn(selectors.operationSelect, '*');
    assert.dom(selectors.operationLabel).hasText('Operation: *');

    await click(selectors.calcBtn);
    assert.dom(selectors.ansField).hasValue('800');
    assert.dom(selectors.ansLabel).hasText('Ans is 800');
  });

  test('it disables/enables calculate button accordingly', async function(assert) {
    await render(template);

    assert.dom(selectors.calcBtn).isNotDisabled();
    await fillIn(selectors.firstField, '');
    assert.dom(selectors.calcBtn).isDisabled();

    await fillIn(selectors.firstField, '90');
    assert.dom(selectors.calcBtn).isNotDisabled();

    await fillIn(selectors.firstField, 'mehul');
    assert.dom(selectors.calcBtn).isDisabled();

    await fillIn(selectors.firstField, '90');

    assert.dom(selectors.calcBtn).isNotDisabled();
    await fillIn(selectors.secondField, '');
    assert.dom(selectors.calcBtn).isDisabled();

    await fillIn(selectors.secondField, '90');
    assert.dom(selectors.calcBtn).isNotDisabled();

    await fillIn(selectors.secondField, 'mehul');
    assert.dom(selectors.calcBtn).isDisabled();
  });
});
