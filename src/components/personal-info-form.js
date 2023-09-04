const { InputElement, ButtonElement } = require('../elements');
const { iframe } = require('../constants/iframe-selectors');

/**
 * Форма ввода имени, фамилии и email
 */
class PersonalInfoForm {
  constructor(page) {
    this._page = page;
  }

  get page() {
    return this._page;
  }

  /**
   * Инпут ввода имени
   * @returns {InputElement}
   */
  get nameInput() {
    return new InputElement('Инпут ввода имени', this.page, {
      qaId: 'personal-first-name',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Инпут ввода фамилии
   * @returns {InputElement}
   */
  get lastNameInput() {
    return new InputElement('Инпут ввода фамилии', this.page, {
      qaId: 'personal-last-name',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Инпут ввода email
   * @returns {InputElement}
   */
  get emailInput() {
    return new InputElement('Инпут ввода email', this.page, {
      qaId: 'personal-email',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Кнопка подтверждения доната
   * @returns {ButtonElement}
   */
  get privacyContinueButton() {
    return new ButtonElement('Кнопка подтверждения доната', this.page, {
      qaId: 'privacy-continue',
      frameSelectors: [iframe.donationWidget],
    });
  }

  /**
   * Заполняет персональные данные и подтверждает
   * @param {string} name - имя
   * @param {string} lastName - фамилия
   * @param {string} email - email
   * @returns {Promise<void>}
   */
  async fillPersonalFields(name, lastName, email) {
    await this.nameInput.type(name);
    await this.lastNameInput.type(lastName);
    await this.emailInput.type(email);
    await this.privacyContinueButton.click();
  }
}

exports.PersonalInfoForm = PersonalInfoForm;
