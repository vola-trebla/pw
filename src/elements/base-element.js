import { expect } from '@playwright/test';

const { test } = require('@playwright/test');
import { makeSelector } from '../utils/page-factory';

/**
 * Базовый класс для работы с элементами
 */
class BaseElement {
  constructor({ signature, qaId, selector, page, frameSelectors = [] }) {
    this._page = page;
    this._signature = signature;
    this._selector = selector;
    this._qaId = qaId;
    this._frameSelectors = frameSelectors;
  }

  get page() {
    return this._page;
  }

  /**
   * Получает элемент.
   * Если находится внутри фрейма, то с помощью frameLocator идет до него по массиву iframe-ов
   *
   * @param frameSelectors
   * @param qaId
   * @param selector
   * @returns {Locator}
   */
  getElement(frameSelectors = [], qaId, selector) {
    let locator = this.page.frameLocator(frameSelectors[0]);
    let sel;
    frameSelectors.slice(1).forEach((frame, i) => {
      locator = locator.frameLocator(frame);
    });
    if (qaId || this._qaId) {
      sel = makeSelector(qaId || this._qaId);
    } else {
      sel = selector || this._selector;
    }
    return locator.locator(sel);
  }

  /**
   * Можно использовать, если необходим Handle элемента
   * @param frameSelectors
   * @param qaId
   * @param selector
   * @returns {Promise<ElementHandle<SVGElement | HTMLElement>>}
   */
  async getElementHandle(frameSelectors = [], qaId, selector) {
    return await this.getElement(frameSelectors, qaId, selector).elementHandle();
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

  async click() {
    await test.step(`Клик на ${this.typeOf} с именем "${this._signature}"`, async () => {
      const locator = this.getElement(this._frameSelectors, this._qaId);
      await locator.waitFor();
      await locator.click();
    });
  }

  async doubleClick() {
    await test.step(`Двойной клик на ${this.typeOf} с именем "${this._signature}"`, async () => {
      const locator = this.getElement(this._frameSelectors, this._qaId);
      await locator.dblclick();
    });
  }

  async selectOption(value) {
    await test.step(`Выбрать option"`, async () => {
      const locator = this.getElement(this._frameSelectors, this._selector);
      await locator.selectOption(value);
    });
  }

  async shouldBeVisible() {
    await test.step(`${this.typeOf} с именем "${this._signature}" должен быть виден`, async () => {
      const locator = this.getElement(this._frameSelectors, this._qaId);
      await expect(locator).toBeVisible();
    });
  }
}

exports.BaseElement = BaseElement;
