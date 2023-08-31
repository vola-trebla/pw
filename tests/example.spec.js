const { test } = require('../src/fixtures/fixtures');

const userData = {
  cardNumber: '4242 4242 4242 4242',
  cardExpire: '04 / 24',
  cardCVC: '000',
  firstName: 'First name',
  lastName: 'Last name',
  email: '',
};
test.beforeEach(async ({ basePage }) => {
  await basePage.visit('/qa-test-7R58U3/');
});

test('simple test', async ({ basePage }) => {
  // Кликает на кнопку “Give now” и открываем форму доната
  await basePage.mainForm.openDonateForm();
  const { donateForm } = await basePage;

  // Выбирает “Monthly” пожертвование
  await donateForm.monthlyButton.click();

  // Чистит поле и вводит сумму 100
  await donateForm.amountInput.clear();
  await donateForm.amountInput.fill('100');

  // Выбирает валюту USD
  await donateForm.currencySelector.selectOption('USD');

  // Нажимает “Donate monthly”
  await donateForm.donatButton.click();

  // Убирает чек-бокс покрытия комиссии “Cover transaction costs”
  await donateForm.coverFreeCheckbox.click();
  await donateForm.coverFreeCheckbox.shouldBeUnChecked();

  // Выбирает оплату кредитной картой “Credit card”
  await donateForm.creditCardButton.click();

  // Вводит карточные данные для оплаты и Нажимает “Continue"
  await donateForm.cardForm.fillCardFields(
    userData.cardNumber,
    userData.cardExpire,
    userData.cardCVC,
  );

  // Вводит “First name”,  “Last name”, “E-mail” и нажимает “Donate”
  await donateForm.personalInfoForm.fillPersonalFields(
    userData.firstName,
    userData.lastName,
    userData.email,
  );

  // Проверяет, что отобразилась ошибка и что отображается инпут поля ввода карты
  await donateForm.cardForm.errorMessage.shouldBeVisible();
  await donateForm.cardForm.cardNumberInput.shouldBeVisible();
});
