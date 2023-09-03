const { test } = require('@playwright/test');
const { BaseElement, InputElement, ButtonElement } = require('../elements/');
const { iframe } = require('../constants/iframe-selectors');

/**
 * Форма ввода данных карты
 */
class CardForm {
  constructor(page) {
    this._page = page;
  }

  /**
   * Инпут ввода номера карты
   * @returns {InputElement}
   */
  get cardNumberInput() {
    return new InputElement({
      page: this._page,
      signature: 'Инпут ввода номера карты',
      frameSelectors: [iframe.donationWidget, iframe.secureCard],
      selector: '[name="cardnumber"]',
    });
  }

  /**
   * Инпут ввода срока окончания карты
   * @returns {InputElement}
   */
  get secureExpirationInput() {
    return new InputElement({
      page: this._page,
      signature: 'Инпут ввода срока окончания карты',
      frameSelectors: [iframe.donationWidget, iframe.secureExpiration],
      selector: '[name="exp-date"]',
    });
  }

  /**
   * Инпут ввода CVC
   * @returns {InputElement}
   */
  get secureCVCInput() {
    return new InputElement({
      page: this._page,
      signature: 'Инпут ввода CVC',
      frameSelectors: [iframe.donationWidget, iframe.secureCVC],
      selector: '[name="cvc"]',
    });
  }

  /**
   * Кнопка "Continue"
   * @returns {ButtonElement}
   */
  get continueButton() {
    return new ButtonElement({
      page: this._page,
      signature: 'Кнопка "Continue"',
      qaId: 'card-continue',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Сообщение об ошибке
   * @returns {BaseElement}
   */
  get errorMessage() {
    return new BaseElement({
      page: this._page,
      signature: 'Сообщение об ошибке',
      qaId: 'card-continue-error-title',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Заполняет все данные кредитной карты и кликает Продолжить
   * @param {string} cardNumber - номер карты
   * @param {string} expirationDate - дата окончания карты
   * @param {string} CVC - cvc код
   * @returns {Promise<void>}
   */
  async fillCardFields(cardNumber, expirationDate, CVC) {
    // Использовал fill для поля ввода номера карты, т.к. type работал не стабильно (p.s. Смотрю в сторону явных/не явных ожиданий, пробую сделать type)
    await this.cardNumberInput.fill(cardNumber);
    await this.secureExpirationInput.fill(expirationDate);
    await this.secureCVCInput.fill(CVC);
    await this.continueButton.click();
  }
}

exports.CardForm = CardForm;
