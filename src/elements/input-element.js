import { test, expect } from '@playwright/test';
import { BaseElement } from './base-element';

/**
 * Элемент инпута
 */
export class InputElement extends BaseElement {
  constructor(signature, page, { qaId, selector, frameSelectors = [] }) {
    super({ signature, page, qaId, selector, frameSelectors });
  }

  get typeOf() {
    return 'input';
  }

  async fill(value) {
    await test.step(`Заполнить в ${this.typeOf} "${this.elementSignature}" значение "${value}"`, async () => {
      await this.element.fill(value);
      await expect(this.element).toHaveValue(value);
    });
  }

  async type(value) {
    await test.step(`Напечатать в ${this.typeOf} "${this.elementSignature}" значение "${value}"`, async () => {
      await this.element.type(value, { delay: 20 });
      await expect(this.element).toHaveValue(value);
    });
  }

  async clear() {
    await test.step(`Очистить инпут "${this.elementSignature}"`, async () => {
      await this.element.fill('');
      await this.element.waitFor();
    });
  }
}
