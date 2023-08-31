import { makeSelector } from '../utils/page-factory';
const { test } = require('@playwright/test');

/**
 * Базовый класс для работы с элементами
 */
class BaseElement {
  constructor({ signature, qaId, selector, page, frameSelector }) {
    this.page = page;
    this._signature = signature;
    this._selector = selector;
    this._qaId = qaId;
    this._frameSelector = frameSelector;
  }

  getLocator(qaId) {
    const template = makeSelector(qaId || this._qaId);
    return this.page.locator(template);
  }

  getElementInFrame(frameSelector, qaId) {
    const locator = this.page.frameLocator(frameSelector || this._frameSelector);
    const selector = makeSelector(qaId || this._qaId);
    return locator.locator(selector);
  }

  get typeOf() {
    return 'element';
  }

  get elementSignature() {
    if (!this._signature) {
      throw Error('Укажите свойство "signature"');
    }

    return this._signature;
  }

  async click(frameSelector, qaId) {
    await test.step(`Клик на ${this.typeOf} с именем "${this._signature}"`, async () => {
      const locator = this.getElementInFrame(frameSelector, qaId);
      await locator.click();
    });
  }
}

exports.BaseElement = BaseElement;
