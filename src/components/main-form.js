const { ButtonElement } = require('../elements/button-element');
const { iframe } = require('../selectors/iframe-constants');

/**
 * Главная форма с одной кнопкой "Give me"
 */
class MainForm {
  constructor(page) {
    this._page = page;
  }

  /**
   * Кнопка "Give me"
   * @returns {ButtonElement}
   */
  get giveMeButton() {
    return new ButtonElement({
      page: this._page,
      signature: 'Кнопка "Give me"',
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
