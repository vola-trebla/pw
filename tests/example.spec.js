const { test } = require('../src/fixtures/fixtures');
test.beforeEach(async ({ basePage }) => {
  await basePage.visit('/qa-test-7R58U3/');
});

test('simple test', async ({ basePage }) => {
  await basePage.mainForm.openDonateForm();
  await basePage.donateForm.monthlyButton.click();
});
