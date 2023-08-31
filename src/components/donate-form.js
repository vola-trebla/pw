const { ButtonElement } = require('../elements/button');

/**
 * Форма доната
 */
class DonateForm {
  constructor(page) {
    this._page = page;
  }

  /**
   * Кнопка "Donate"
   * @returns {ButtonElement}
   */
  get donatButton() {
    return new ButtonElement({
      page: this._page,
      signature: 'Кнопка "Donate"',
      qaId: 'donate-button',
      frameSelector: 'iframe[title="Donation Widget"]',
    });
  }

  /**
   * Кнопка выбора донатить месячно "Monthly"
   * @returns {ButtonElement}
   */
  get monthlyButton() {
    return new ButtonElement({
      page: this._page,
      signature: 'Кнопка "Monthly"',
      qaId: 'more-frequent-button',
      frameSelector: 'iframe[title="Donation Widget"]',
    });
  }
}

exports.DonateForm = DonateForm;
