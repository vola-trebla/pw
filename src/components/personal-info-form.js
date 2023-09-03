const { InputElement, ButtonElement } = require('../elements');
const { iframe } = require('../constants/iframe-selectors');

/**
 * Форма ввода имени, фамилии и email
 */
class PersonalInfoForm {
  constructor(page) {
    this._page = page;
  }

  /**
   * Инпут ввода имени
   * @returns {InputElement}
   */
  get nameInput() {
    return new InputElement('Инпут ввода имени', this._page, {
      frameSelectors: [iframe.donationWidget],
      qaId: 'personal-first-name',
    });
  }

  /**
   * Инпут ввода фамилии
   * @returns {InputElement}
   */
  get lastNameInput() {
    return new InputElement('Инпут ввода фамилии', this._page, {
      frameSelectors: [iframe.donationWidget],
      qaId: 'personal-last-name',
    });
  }

  /**
   * Инпут ввода email
   * @returns {InputElement}
   */
  get emailInput() {
    return new InputElement('Инпут ввода email', this._page, {
      frameSelectors: [iframe.donationWidget],
      selector: 'personal-email',
    });
  }

  /**
   * Кнопка подтверждения доната
   * @returns {ButtonElement}
   */
  get privacyContinueButton() {
    return new ButtonElement('Кнопка подтверждения доната', this._page, {
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
    await this.nameInput.click();
    await this.nameInput.type(name);
    await this.lastNameInput.click();
    await this.lastNameInput.type(lastName);

    // Здесь пришлось схитрить, ни в какую не находился селектор для поля email.
    // Хотя указано все правильно, не пойму в чем дело. Добавил костыль через TAB
    // await this.emailInput.type(email);
    await this._page.keyboard.press('Tab');
    await this._page.keyboard.type(email);
    await this.privacyContinueButton.click();
  }
}

exports.PersonalInfoForm = PersonalInfoForm;
