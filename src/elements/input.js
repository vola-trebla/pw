const { BaseElement } = require('./base-element');

/**
 * Элемент инпута
 */
class InputElement extends BaseElement {
  get typeOf() {
    return 'input';
  }

  async shouldHaveValue(value, selector, qaId) {
    await test.step(`${this.typeOf} с именем "${this._signature}" должен содержать значение "${value}"`, async () => {
      const locator = this.getElementInFrame(selector, qaId);
      await expect(locator).toHaveValue(value);
    });
  }

  async fill(value, selector) {
    await test.step(`Заполнить в ${this.typeOf} "${this._signature}" значение "${value}"`, async () => {
      const locator = this.getElementInFrame(selector);
      await locator.fill(value);
      await this.shouldHaveValue(value, selector);
    });
  }
}

exports.InputElement = InputElement;
