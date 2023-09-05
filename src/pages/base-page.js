import { test } from '@playwright/test';
import { MainForm } from '../components/main-form';
import { DonateForm } from '../components/donate-form';

/**
 * Базовая страница, в ней содержатся все формы, а так же возможность перейти на эту страницу
 */
export class BasePage {
  constructor(page) {
    this.mainForm = new MainForm(page);
    this.donateForm = new DonateForm(page);
    this._page = page;
  }

  get page() {
    return this._page;
  }

  async visit(url) {
    await test.step(`Открываем url "${url}"`, async () => {
      await this.page.goto(url, { waitUntil: 'networkidle' });
    });
  }
}
