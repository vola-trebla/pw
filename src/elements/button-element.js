const { test } = require('@playwright/test');
const { BaseElement } = require('./base-element');

/**
 * Элемент кнопки
 */
class ButtonElement extends BaseElement {
  constructor(signature, page, { qaId, selector, frameSelectors = [] }) {
    super({ signature, page, qaId, selector, frameSelectors });
  }
  get typeOf() {
    return 'button';
  }

  async hover() {
    await test.step(`Ховер на ${this.typeOf} с именем "${this._signature}"`, async () => {
      await this.element.hover();
    });
  }
}

exports.ButtonElement = ButtonElement;
