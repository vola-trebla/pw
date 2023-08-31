# Простой тест на playwright

Установить [NodeJS](https://nodejs.org/en/download/).

Склонировать проект:
```
git clone git@github.com:vola-trebla/pw.git
```

Перейти в папку с проектом:
```
cd pw
```

Выполнить:
```
npm install 
```

Настроить prettier:
```
1) Перейти в Settings/Preferences -> Languages and Frameworks | JavaScript | Prettier
2) В списке пакетов Prettier выбрать "prettier" для использования. (иногда WebStorm сам находит пакет prettier и поле заполняется автоматически).

Использование:
 1) Настроить горячие клавиши: перейти в Settings -> Keymap -> Plugins -> Prettier - выбрать для "Reformat with Prettier" горячие клавиши (например ctrl + s)

 2) Так же можно внутри файла вызвать контекстное меню и выбрать пункт "Reformat with Prettier"
```