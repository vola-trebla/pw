const { test } = require('@playwright/test');
import { expect } from '@playwright/test';
import { makeSelector } from '../utils/page-factory';

/**
 * Базовый класс для работы с элементами
 */
export class BaseElement {
  constructor({ signature, page, qaId, selector, frameSelectors = [] }) {
    this._page = page;
    this._signature = signature;
    this._selector = selector;
    this._qaId = qaId;
    this._frameSelectors = frameSelectors;
  }

  get page() {
    return this._page;
  }

  get qaId() {
    return this._qaId;
  }

  get selector() {
    return this._selector;
  }

  get frameSelectors() {
    return this._frameSelectors;
  }

  /**
   * Получает iframe на любой вложенности
   *
   * @param {Array<string>} frameSelectors - массив селекторов iframe
   * @returns {FrameLocator}
   */
  getFrame(frameSelectors = []) {
    let frame = this.page.frameLocator(frameSelectors[0]);
    if (frameSelectors.length > 1) {
      frameSelectors.slice(1).forEach((f) => {
        frame = frame.frameLocator(f);
      });
    }
    return frame;
  }

  /**
   * Получает элемент.
   * Если находится внутри фрейма, то с помощью this.getFrame() идет до него по массиву iframe-ов
   *
   * @param {string} qaId - значение аттрибута data-qa
   * @param {string} selector - селектор
   * @param {Array<string>} frameSelectors - массив селекторов iframe
   * @returns {Locator}
   */
  getElement(qaId, selector, frameSelectors = []) {
    const locator = frameSelectors.length > 0 ? this.getFrame(frameSelectors) : this.page;
    const sel = this.qaId ? makeSelector(this.qaId) : this.selector;
    return locator.locator(sel);
  }

  /**
   * Геттер для получения локатора элемента
   * @returns {Locator}
   */
  get element() {
    return this.getElement(this.qaId, this.selector, this.frameSelectors);
  }

  /**
   * Можно использовать, если необходим Handle элемента
   *
   * @returns {Promise<ElementHandle<SVGElement | HTMLElement>>}
   */
  async getElementHandle() {
    return await this.element.elementHandle();
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
    await test.step(`Клик на ${this.typeOf} с именем "${this.elementSignature}"`, async () => {
      await this.element.waitFor();
      await this.element.click();
    });
  }

  async doubleClick() {
    await test.step(`Двойной клик на ${this.typeOf} с именем "${this.elementSignature}"`, async () => {
      await this.element.dblclick();
    });
  }

  async selectOption(value) {
    await test.step(`Выбрать option"`, async () => {
      await this.element.selectOption(value);
    });
  }

  async shouldBeVisible() {
    await test.step(`${this.typeOf} с именем "${this.elementSignature}" должен быть виден`, async () => {
      await expect(this.element).toBeVisible();
    });
  }

  async shouldContainText(text) {
    await test.step(`${this.typeOf} с именем "${this.elementSignature}" содержит текст`, async () => {
      await expect(this.element).toContainText(text);
    });
  }
}
