import { test, expect } from '@playwright/test';
import { BaseElement } from './base-element';

/**
 * Элемент чекбокса
 */
export class CheckboxElement extends BaseElement {
  constructor(signature, page, { qaId, selector, frameSelectors = [] }) {
    super({ signature, page, qaId, selector, frameSelectors });
  }

  get typeOf() {
    return 'checkbox';
  }

  async shouldBeChecked() {
    await test.step(`${this.typeOf} с именем "${this.elementSignature}" должен быть выделен`, async () => {
      await expect(this.element).toBeChecked();
    });
  }

  async shouldBeUnChecked() {
    await test.step(`${this.typeOf} с именем "${this.elementSignature}" должен быть не выделен`, async () => {
      await expect(this.element).toBeChecked({ checked: false });
    });
  }

  async uncheckCheckbox() {
    await test.step(`Убирает ${this.typeOf}:${this.elementSignature}`, async () => {
      await this.element.uncheck();
      await this.shouldBeUnChecked();
    });
  }

  async checkCheckbox() {
    await test.step(`Устанавливает ${this.typeOf}:${this.elementSignature}`, async () => {
      await this.element.check();
      await this.shouldBeChecked();
    });
  }
}
