const { ButtonElement } = require('../elements/button');

/**
 * Главная форма с одной кнопкой "Give me"
 */
class MainForm {
  constructor(page) {
    this.giveMeButton = new ButtonElement({
      page,
      signature: 'Кнопка "Give me"',
      qaId: 'fun-element',
      frameSelector: '#XBGSFAMB',
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
