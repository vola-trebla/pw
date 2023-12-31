import { BaseElement, InputElement, ButtonElement } from '../elements';
import { iframe } from '../constants/iframe-selectors';

/**
 * Форма ввода данных карты
 */
export class CardForm {
  constructor(page) {
    this._page = page;
  }

  get page() {
    return this._page;
  }

  /**
   * Инпут ввода номера карты
   * @returns {InputElement}
   */
  get cardNumberInput() {
    return new InputElement('Инпут ввода номера карты', this.page, {
      frameSelectors: [iframe.donationWidget, iframe.secureCard],
      selector: '[name="cardnumber"]',
    });
  }

  /**
   * Инпут ввода срока окончания карты
   * @returns {InputElement}
   */
  get secureExpirationInput() {
    return new InputElement('Инпут ввода срока окончания карты', this.page, {
      frameSelectors: [iframe.donationWidget, iframe.secureExpiration],
      selector: '[name="exp-date"]',
    });
  }

  /**
   * Инпут ввода CVC
   * @returns {InputElement}
   */
  get secureCVCInput() {
    return new InputElement('Инпут ввода CVC', this.page, {
      frameSelectors: [iframe.donationWidget, iframe.secureCVC],
      selector: '[name="cvc"]',
    });
  }

  /**
   * Кнопка "Continue"
   * @returns {ButtonElement}
   */
  get continueButton() {
    return new ButtonElement('Кнопка "Continue"', this.page, {
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
      signature: 'Сообщение об ошибке',
      page: this.page,
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
