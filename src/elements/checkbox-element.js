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
      await expect(locator).toBeChecked();
    });
  }

  async shouldBeUnChecked() {
    await test.step(`${this.typeOf} с именем "${this._signature}" должен быть не выделен`, async () => {
      const locator = this.getElement(this._frameSelectors, this._qaId);
      await expect(locator).toBeChecked({ checked: false });
    });
  }

  async uncheckCheckbox() {
    await test.step(`Убирает ${this.typeOf}:${this._signature}`, async () => {
      const locator = this.getElement(this._frameSelectors, this._qaId);
      await locator.uncheck();
      await this.shouldBeUnChecked();
    });
  }

  async checkCheckbox() {
    await test.step(`Устанавливает ${this.typeOf}:${this._signature}`, async () => {
      const locator = this.getElement(this._frameSelectors, this._qaId);
      await locator.check();
      await this.shouldBeChecked();
    });
  }
}

exports.CheckboxElement = CheckboxElement;
