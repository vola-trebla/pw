const { BaseElement } = require('./base-element');
const { test } = require('@playwright/test');

/**
 * Элемент кнопки
 */
class ButtonElement extends BaseElement {
  get typeOf() {
    return 'button';
  }

  async hover(selector, qaId) {
    await test.step(`Ховер на ${this.typeOf} с именем "${this._signature}"`, async () => {
      const el = this.getElementInFrame(selector, qaId);
      await el.hover();
    });
  }

  async doubleClick(selector, qaId) {
    await test.step(`Двойной клик на ${this.typeOf} с именем "${this._signature}"`, async () => {
      const el = this.getElementInFrame(selector, qaId);
      await el.dblclick();
    });
  }
}

exports.ButtonElement = ButtonElement;
