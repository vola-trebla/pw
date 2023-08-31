const { test } = require('@playwright/test');
const { InputElement } = require('../elements/input-element');
const { iframe } = require('../selectors/iframe-constants');
const { ButtonElement } = require('../elements/button-element');

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
    return new InputElement({
      page: this._page,
      signature: 'Инпут ввода имени',
      frameSelectors: [iframe.donationWidget],
      qaId: 'personal-first-name',
    });
  }

  /**
   * Инпут ввода фамилии
   * @returns {InputElement}
   */
  get lastNameInput() {
    return new InputElement({
      page: this._page,
      signature: 'Инпут ввода фамилии',
      frameSelectors: [iframe.donationWidget],
      qaId: 'personal-last-name',
    });
  }

  /**
   * Инпут ввода email
   * @returns {InputElement}
   */
  get emailInput() {
    return new InputElement({
      page: this._page,
      signature: 'Инпут ввода email',
      frameSelectors: [iframe.donationWidget],
      selector: 'personal-email',
    });
  }

  /**
   * Кнопка подтверждения доната
   * @returns {ButtonElement}
   */
  get privacyContinueButton() {
    return new ButtonElement({
      page: this._page,
      signature: 'Кнопка подтверждения доната',
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
