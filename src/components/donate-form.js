const { ButtonElement, InputElement, CheckboxElement } = require('../elements');
const { CardForm } = require('./card-form');
const { PersonalInfoForm } = require('./personal-info-form');
const { iframe } = require('../constants/iframe-selectors');

/**
 * Форма доната
 */
class DonateForm {
  constructor(page) {
    this._page = page;
  }

  /**
   * Форма ввода данных карты
   * @returns {CardForm}
   */
  get cardForm() {
    return new CardForm(this._page);
  }

  /**
   * Форма ввода имени, фамилии и email
   * @returns {PersonalInfoForm}
   */
  get personalInfoForm() {
    return new PersonalInfoForm(this._page);
  }

  /**
   * Кнопка "Donate"
   * @returns {ButtonElement}
   */
  get donatButton() {
    return new ButtonElement('Кнопка "Donate"', this._page, {
      qaId: 'donate-button',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Кнопка выбора донатить месячно "Monthly"
   * @returns {ButtonElement}
   */
  get monthlyButton() {
    return new ButtonElement('Кнопка "Monthly"', this._page, {
      qaId: 'more-frequent-button',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Инпут поля размера доната
   * @returns {InputElement}
   */
  get amountInput() {
    return new InputElement('Инпут ввода кол-ва денег', this._page, {
      qaId: 'amount',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Кнопка, раскрывающая доступные валюты на выбор
   * @returns {ButtonElement}
   */
  get currencySelector() {
    return new ButtonElement('Кнопка, раскрывающая доступные валюты на выбор', this._page, {
      qaId: 'currency-selector',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Чекбокс "Cover transaction costs"
   * @returns {CheckboxElement}
   */
  get coverFreeCheckbox() {
    return new CheckboxElement('Чекбокс "Cover transaction costs"', this._page, {
      qaId: 'cover-fee-checkbox',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Кнопка "Credit card"
   * @returns {ButtonElement}
   */
  get creditCardButton() {
    return new ButtonElement('Кнопка "Credit card"', this._page, {
      qaId: 'cc-button',
      frameSelectors: [iframe.donationWidget],
    });
  }
}

exports.DonateForm = DonateForm;
