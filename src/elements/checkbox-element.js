const { test, expect } = require('@playwright/test');
const { BaseElement } = require('./base-element');

/**
 * Элемент чекбокса
 */
class CheckboxElement extends BaseElement {
  constructor(signature, page, { qaId, selector, frameSelectors = [] }) {
    super({ signature, page, qaId, selector, frameSelectors });
  }

  get typeOf() {
    return 'checkbox';
  }

  async shouldBeChecked() {
    await test.step(`${this.typeOf} с именем "${this._signature}" должен быть выделен`, async () => {
      await expect(this.element).toBeChecked();
    });
  }

  async shouldBeUnChecked() {
    await test.step(`${this.typeOf} с именем "${this._signature}" должен быть не выделен`, async () => {
      await expect(this.element).toBeChecked({ checked: false });
    });
  }

  async uncheckCheckbox() {
    await test.step(`Убирает ${this.typeOf}:${this._signature}`, async () => {
      await this.element.uncheck();
      await this.shouldBeUnChecked();
    });
  }

  async checkCheckbox() {
    await test.step(`Устанавливает ${this.typeOf}:${this._signature}`, async () => {
      await this.element.check();
      await this.shouldBeChecked();
    });
  }
}

exports.CheckboxElement = CheckboxElement;
