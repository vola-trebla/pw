const base = require('@playwright/test');
const { BasePage } = require('../pages/base-page');

exports.test = base.test.extend({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
});
exports.expect = base.expect;
