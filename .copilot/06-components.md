# 06 — Components

## App Card (`.app-card`)
Карточка приложения в каталоге. Flex row.
```html
<a class="app-card" href="pages/app-detail.html">
  <div class="app-card__photo"><!-- иконка/изображение --></div>
  <div class="app-card__body">
    <p class="app-card__category">...</p>
    <h3 class="app-card__name">...</h3>
    <p class="app-card__desc">...</p>
    <div class="app-card__platforms"><!-- SVG иконки iOS/Android --></div>
  </div>
</a>
```
- Высота: `min-height: 350px`
- Ширина фото-колонки: `width: 250px`
- 4-я карточка `.app-card--partner` — тёмная, hero-bg, без ссылки (`<div>`)

## Promo Block (`.promo-block`)
Блок условий партнёрства.
```html
<div class="promo-block">
  <p class="promo-block__label" data-i18n="...">Ваши условия партнёрства</p>
  <div class="promo-block__row">
    <span data-i18n="...">Комиссия</span>
    <strong class="accent-gradient" data-i18n="...">12%</strong>
  </div>
  <!-- ещё строки .promo-block__row -->
  <a href="login.html" class="btn btn--primary" ...>...</a>
</div>
```

## Stat Card (`.stat-card`)
```html
<div class="stat-card">
  <span class="stat-card__num">120k+</span>
  <span class="stat-card__label" data-i18n="...">Активных пользователей</span>
</div>
```

## Step Card (`.step-card`)
```html
<div class="step-card">
  <div class="step-card__num accent-gradient-bg">01</div>
  <h3 class="step-card__title" data-i18n="...">...</h3>
  <p class="step-card__text" data-i18n="...">...</p>
</div>
```

## Feature Block (`.feature-block`)
```html
<div class="feature-block">
  <h3 data-i18n="...">...</h3>
  <p data-i18n="...">...</p>
</div>
```
Используется в `.app-detail-features` (grid 2×2).

## Nav Item (`.nav-item`)
```html
<a class="nav-item" href="...">
  <svg ...>...</svg>
  <span data-i18n="...">...</span>
</a>
```

## App Detail Hero
Структура страницы приложения:
```
.app-detail-hero
  .app-detail-hero__inner  (grid: minmax(0,600px) 1fr)
    .app-detail-hero__left  (flex column, gap 28px)
      .app-detail-hero__top  (flex row: иконка + текст)
        .app-detail-icon
        div > eyebrow + h1 + desc + badges
      .promo-block
    .app-detail-hero__visual  (flex, justify-content: flex-end)
      .xxx__img  (270×550 или phone mockup)
```

## Sidebar Influencer Block
Блок в низу сайдбара с призывом стать партнёром. Тёмный hero-bg через `::before`.
- `.sidebar__influencer` → `position: relative`, `background: none`
- `.sidebar__influencer::before` → 3-слойный анимированный фон (см. `04-css-patterns.md`)
- `.sidebar__influencer > *` → `z-index: 1`

## Contact Form
Тёмная секция `.section--dark` с glassmorphism инпутами:
```html
<input class="glass-input" ...>
<button class="glass-btn btn--primary" ...>
```

## Language Switcher (`.sidebar__lang`)
Кастомный `<select>` с иконкой 🌐, изменяет `data-i18n` на всей странице через `i18n.js`.
