const { test, expect } = require('@playwright/test');
const { BaseElement } = require('./base-element');

/**
 * Элемент чекбокса
 */
class CheckboxElement extends BaseElement {
  get typeOf() {
    return 'checkbox';
  }

  async shouldBeChecked() {
    await test.step(`${this.typeOf} с именем "${this._signature}" должен быть выделен`, async () => {
      const locator = this.getElement(this._frameSelectors, this._qaId);
      await expect(locator).toHaveAttribute('aria-checked', 'true');
    });
  }

  async shouldBeUnChecked() {
    await test.step(`${this.typeOf} с именем "${this._signature}" должен быть не выделен`, async () => {
      const locator = this.getElement(this._frameSelectors, this._qaId);
      await expect(locator).toHaveAttribute('aria-checked', 'false');
    });
  }
}

exports.CheckboxElement = CheckboxElement;
