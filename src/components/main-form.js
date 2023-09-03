const { ButtonElement, BaseElement } = require('../elements/');
const { iframe } = require('../constants/iframe-selectors');

/**
 * Главная форма с одной кнопкой "Give me"
 */
class MainForm {
  constructor(page) {
    this._page = page;
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
    return new ButtonElement('Кнопка "Give me"', this._page, {
      qaId: 'fun-element',
      frameSelectors: [iframe.maneIframe],
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
