# Фреймворк с тестом на playwright

## Настройка

- Установить [NodeJS](https://nodejs.org/en/download/).

- Склонировать проект:

```
git clone git@github.com:vola-trebla/pw.git
```

- Перейти в папку с проектом:

```
cd pw
```

- Выполнить:

```
npm install
```

- Настройка prettier:

```
- Перейти в Settings/Preferences -> Languages and Frameworks | JavaScript | Prettier
- В списке пакетов Prettier выбрать "prettier" для использования. (иногда WebStorm сам находит пакет prettier и поле заполняется автоматически).

Использование:
- Настроить горячие клавиши: перейти в Settings -> Keymap -> Plugins -> Prettier - выбрать для "Reformat with Prettier" горячие клавиши (например ctrl + s)
- Так же можно внутри файла вызвать контекстное меню и выбрать пункт "Reformat with Prettier"
```

## Запуск тестов и открытие сгенерированного отчета
#### Запустить скрипт ```run_tests.sh``` в корне проекта
Что сделает скрипт:
- очистит старые тестовые результаты
- прогонит тест
- сгенерирует отчет
- откроет браузер с отчетом

## Запуск тестов

#### Для запуска тестов можно использовать скрипты из package.json

- для chrome в открытом браузере выполнить:

```
"test-web-headed": "npx playwright test --project=chromium --headed"
```

- для последовательного запуска chrome, а затем для mobile выполнить:

```
"test-sequence": "npx playwright test --workers=1"
```

- для параллельного запуска

```
 "test-parallel": "npx playwright test"
```

## Генерация отчетов в allure

#### Для генерации отчетов можно использовать скрипты из package.json

- генерация отчета в allure

```
 "generate-allure-report": "npx allure generate ./allure-results --clean"
```

- посмотреть красивый репорт

```
 "open-allure-report": "npx allure open ./allure-report"
```

- очистить проект от папок с репортами

```
 "remove-reports": "rd /s /q allure-report allure-results"
```

## Отчет

#### Пример того, как выглядит отчет при запуске тестов в параллель на chrome и mobile

<picture>
    <img alt="Report" src="./assets/allurereport.png">
</picture>
