const { BaseElement } = require('./base-element');
const { test } = require('@playwright/test');

/**
 * Элемент кнопки
 */
class ButtonElement extends BaseElement {
  get typeOf() {
    return 'button';
  }

  async hover() {
    await test.step(`Ховер на ${this.typeOf} с именем "${this._signature}"`, async () => {
      const el = this.getElement(this._frameSelectors, this._qaId);
      await el.hover();
    });
  }
}

exports.ButtonElement = ButtonElement;
