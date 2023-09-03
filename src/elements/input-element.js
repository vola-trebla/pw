const { test, expect } = require('@playwright/test');
const { BaseElement } = require('./base-element');

/**
 * Элемент инпута
 */
class InputElement extends BaseElement {
  constructor(signature, page, { qaId, selector, frameSelectors = [] }) {
    super({ signature, page, qaId, selector, frameSelectors });
  }

  get typeOf() {
    return 'input';
  }

  async fill(value) {
    await test.step(`Заполнить в ${this.typeOf} "${this._signature}" значение "${value}"`, async () => {
      await this.element.fill(value);
      await expect(this.element).toHaveValue(value);
    });
  }

  async type(value) {
    await test.step(`Напечатать в ${this.typeOf} "${this._signature}" значение "${value}"`, async () => {
      await this.element.type(value, { delay: 100 });
      await expect(this.element).toHaveValue(value);
    });
  }

  async clear() {
    await test.step(`Очистить инпут "${this._signature}"`, async () => {
      await this.element.fill('');
      await this.element.waitFor();
    });
  }
}

exports.InputElement = InputElement;
