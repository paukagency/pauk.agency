# 01 — Project Overview

## About
**Pauk.Agency** — студия веб-разработки. Создаёт мобильные приложения и продвигает их через инфлюенсеров.

**Цель сайта:** привлечь инфлюенсеров (micro-influencers, до 15 000 подписчиков) для продвижения приложений через реферальные промокоды.

## Tech Stack
- Чистый HTML5 + CSS3 + Vanilla JS (без фреймворков, без сборщиков)
- Google Fonts: Inter + Syne (через `<link>` в `<head>`)
- Хостинг: GitHub Pages → `https://paukagency.github.io/pauk.agency/`
- Git remote: `https://github.com/paukagency/pauk.agency.git`, ветка `main`
- Локальная разработка: `npx live-server` на порту 3000

## File Structure
```
/
├── index.html                  # главная страница
├── pages/
│   ├── apps.html               # каталог приложений
│   ├── app-detail.html         # страница одного приложения
│   ├── login.html              # авторизация
│   └── dashboard.html          # кабинет инфлюенсера
├── css/
│   └── style.css               # единый файл стилей
├── js/
│   ├── sidebar.js              # логика сайдбара (бургер, навигация)
│   ├── i18n.js                 # система переводов
│   ├── main.js                 # общая логика
│   └── lang/
│       ├── en.js
│       ├── ru.js
│       ├── es.js
│       ├── de.js
│       ├── fr.js
│       ├── hi.js
│       ├── it.js
│       ├── pt.js
│       └── zh.js
└── .copilot/                   # инструкции для Copilot
```

## Languages
Сайт работает на 9 языках: EN, RU, ES, DE, FR, HI, IT, PT, ZH.
При добавлении любого текста → добавить ключ во все 9 файлов `js/lang/*.js`.
Подробнее: см. `07-i18n.md`.

## Deploy
После каждого изменения коммитить и пушить:
```bash
git add . && git commit -m "тип: краткое описание" && git push
```
GitHub Pages обновляется автоматически через ~1 минуту.
