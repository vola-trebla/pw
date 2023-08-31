const { ButtonElement } = require('../elements/button-element');
const { InputElement } = require('../elements/input-element');
const { CheckboxElement } = require('../elements/checkbox-element');
const { CardForm } = require('./card-form');
const { PersonalInfoForm } = require('./personal-info-form');
const { iframe } = require('../selectors/iframe-constants');

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
    return new ButtonElement({
      page: this._page,
      signature: 'Кнопка "Donate"',
      qaId: 'donate-button',
      frameSelectors: [iframe.donationWidget],
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
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Инпут поля размера доната
   * @returns {InputElement}
   */
  get amountInput() {
    return new InputElement({
      page: this._page,
      signature: 'Инпут ввода кол-ва денег',
      qaId: 'amount',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Кнопка, раскрывающая доступные валюты на выбор
   * @returns {ButtonElement}
   */
  get currencySelector() {
    return new ButtonElement({
      page: this._page,
      signature: 'Кнопка, раскрывающая доступные валюты на выбор',
      qaId: 'currency-selector',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Чекбокс "Cover transaction costs"
   * @returns {CheckboxElement}
   */
  get coverFreeCheckbox() {
    return new CheckboxElement({
      page: this._page,
      signature: 'Чекбокс "Cover transaction costs"',
      qaId: 'cover-fee-checkbox',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Кнопка "Credit card"
   * @returns {ButtonElement}
   */
  get creditCardButton() {
    return new ButtonElement({
      page: this._page,
      signature: 'Кнопка "Credit card"',
      qaId: 'cc-button',
      frameSelectors: [iframe.donationWidget],
    });
  }
}

exports.DonateForm = DonateForm;
