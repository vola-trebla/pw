const { ButtonElement, BaseElement } = require('../elements/');
const { iframe } = require('../constants/iframe-selectors');
const { ElementBuilder } = require('../utils/element-builder');

/**
 * Главная форма с одной кнопкой "Give me"
 */
class MainForm {
  constructor(page) {
    this._page = page;
    this._frameSelectors = [iframe.maneIframe];
    this.elementBuilder = new ElementBuilder(page, { frameSelectors: this._frameSelectors });
  }

  /**
   * Тайтл "Click me"
   * @returns {BaseElement}
   */
  get title() {
    return new BaseElement({
      signature: 'Тайтл "Click me"',
      page: this._page,
      selector: 'h1',
    });
  }

  /**
   * Кнопка "Give me"
   * @returns {ButtonElement}
   */
  get giveMeButton() {
    return this.elementBuilder.button('Кнопка "Give me"', {
      qaId: 'fun-element',
    });
  }

  /**
   * Открывает форму доната
   * @returns {Promise<void>}
   */
  async openDonateForm() {
    await this.giveMeButton.click();
  }
}

exports.MainForm = MainForm;
