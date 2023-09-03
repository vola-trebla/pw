rd /s /q allure-report allure-results
npx playwright test --project=chromium
npx allure generate ./allure-results --clean
npx allure open ./allure-report