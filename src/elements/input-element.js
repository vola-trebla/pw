const { test, expect } = require('@playwright/test');
const { BaseElement } = require('./base-element');

/**
 * Элемент инпута
 */
class InputElement extends BaseElement {
  get typeOf() {
    return 'input';
  }

  async fill(value) {
    await test.step(`Заполнить в ${this.typeOf} "${this._signature}" значение "${value}"`, async () => {
      const locator = this.getElement(this._frameSelectors, this._qaId);
      await locator.fill(value);
      await expect(locator).toHaveValue(value);
    });
  }

  async type(value) {
    await test.step(`Напечатать в ${this.typeOf} "${this._signature}" значение "${value}"`, async () => {
      const locator = this.getElement(this._frameSelectors, this._qaId);
      await locator.type(value, { delay: 100 });
      await expect(locator).toHaveValue(value);
    });
  }

  async clear() {
    await test.step(`Очистить инпут "${this._signature}"`, async () => {
      const locator = this.getElement(this._frameSelectors, this._qaId);
      await locator.fill('');
      await locator.waitFor();
    });
  }
}

exports.InputElement = InputElement;
