const { test } = require('@playwright/test');
const { MainForm } = require('../components/main-form');
const { DonateForm } = require('../components/donate-form');

/**
 * Базовая страница, в ней содержатся все формы, а так же возможность перейти на эту страницу
 */
class BasePage {
  constructor(page) {
    this.mainForm = new MainForm(page);
    this.donateForm = new DonateForm(page);
    this._page = page;
  }

  async visit(url) {
    await test.step(`Открываем url "${url}"`, async () => {
      await this._page.goto(url, { waitUntil: 'networkidle' });
    });
  }
}

exports.BasePage = BasePage;
