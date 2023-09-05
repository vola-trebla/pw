import { test } from '@playwright/test';
import { BaseElement } from './base-element';

/**
 * Элемент кнопки
 */
export class ButtonElement extends BaseElement {
  constructor(signature, page, { qaId, selector, frameSelectors = [] }) {
    super({ signature, page, qaId, selector, frameSelectors });
  }
  get typeOf() {
    return 'button';
  }

  async hover() {
    await test.step(`Ховер на ${this.typeOf} с именем "${this.elementSignature}"`, async () => {
      await this.element.hover();
    });
  }
}
