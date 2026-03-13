# 05 — UX Rules

## Target Audience
Micro-influencers: 1 000 – 15 000 подписчиков. Молодые, мобильные, разные страны.
**Tone of voice:** дружелюбный, прямой, без корпоративщины. Выгода выражена цифрами.

## Visual Hierarchy
1. Один главный CTA на экране (кнопка "Создать промокод")
2. Числа и проценты выделяются акцентным градиентом (`.accent-gradient`)
3. Второстепенный текст → `--clr-text-muted`, размер ≤ 13px
4. Лейблы секций (eyebrow) → uppercase, 11px, muted

## Spacing Rules
- Между логическими группами внутри секции: `gap: 28–48px`
- Внутри компонента (иконка + текст): `gap: 16–24px`
- Между строками данных: `padding: 8px 0`, разделитель `1px solid --clr-border`
- Не использовать `margin-top` и `margin-bottom` вместе — только `gap` на flex/grid родителе

## Animation Philosophy
Стиль: **Apple / Tesla / Linear** — плавно, быстро, без лишнего шума.
Принципы:
- Анимируй только `transform` и `opacity` (GPU, без reflow)
- Никакого bounce/overshoot — только `ease-out` или `cubic-bezier`
- Быстрый отклик (150–350ms), долгие переходы только для декора (600ms+)
- Движение имеет направление: элементы появляются снизу вверх, уходят вверх
- Stagger: если несколько элементов появляются вместе — задержка 60–80ms между ними

## Easing Reference
```css
/* Стандартный — вход элементов */
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1);

/* Акцентный — важные переходы (hero, модалки) */
--ease-expo:   cubic-bezier(0.19, 1, 0.22, 1);

/* Hover / микроинтерактив */
--ease-snap:   cubic-bezier(0.34, 1.56, 0.64, 1);  /* лёгкий overshoot только для scale */
```
Добавить в `:root` в `css/style.css`.

## Scroll-Triggered Reveal
Все секции и карточки появляются при скролле: fade + translateY(-24px → 0).
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1),
              transform 0.6s cubic-bezier(0.16,1,0.3,1);
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}
```
JS: `IntersectionObserver` добавляет `.is-visible` при `threshold: 0.12`.
Stagger для грид-элементов: `transition-delay: calc(var(--i, 0) * 70ms)`.

## Card Hover
```css
.app-card {
  transition: transform 0.3s cubic-bezier(0.16,1,0.3,1),
              box-shadow 0.3s cubic-bezier(0.16,1,0.3,1);
}
.app-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.13);
}
```

## Button Feedback
```css
.btn {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.btn:hover  { opacity: 0.88; transform: translateY(-1px); }
.btn:active { opacity: 1;    transform: translateY(0) scale(0.98); }
```
Кнопки с `btn--primary`: дополнительно `box-shadow` на hover усиливается.

## Link / Nav Hover
Подчёркивание снизу анимацией `scaleX`:
```css
.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 2px;
  background: var(--gradient-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s cubic-bezier(0.16,1,0.3,1);
}
.nav-item:hover::after { transform: scaleX(1); }
```

## Form Inputs
Focus state — плавное появление акцентной рамки:
```css
.input {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.input:focus {
  border-color: var(--clr-accent-a);
  box-shadow: 0 0 0 3px rgba(89,150,243,0.18);
  outline: none;
}
```

## Loading State (кнопка формы)
При сабмите: текст кнопки меняется на спиннер, кнопка `disabled`.
```html
<button class="btn btn--primary js-submit">
  <span class="btn__label">Отправить</span>
  <span class="btn__spinner" hidden>
    <svg class="spin" viewBox="0 0 24 24" ...>...</svg>
  </span>
</button>
```
```css
.spin { animation: spin 0.7s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
```

## Page Transitions
При переходе между страницами — плавное исчезновение `.main`:
```css
.main { animation: page-in 0.45s cubic-bezier(0.16,1,0.3,1); }
@keyframes page-in {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: none; }
}
```

## DO / DON'T
| ✅ DO | ❌ DON'T |
|-------|---------|
| `transform`, `opacity` | `width`, `height`, `margin` в анимациях |
| `ease-out`, `cubic-bezier` | `linear` для UI-переходов |
| Единый ритм скоростей | Разные duration на соседних элементах |
| Анимация при действии пользователя | Бесконечные анимации на тексте |
| Subtle scale (0.98–1.02) | Большие прыжки > translateY(8px) на hover |


## Typography Scale
| Элемент             | Font      | Size    | Weight |
|---------------------|-----------|---------|--------|
| H1 (hero)           | Syne      | 36–42px | 700    |
| H2 (section title)  | Syne      | 28–32px | 700    |
| H3 (card title)     | Inter     | 16px    | 600    |
| Body                | Inter     | 14–15px | 400    |
| Muted / caption     | Inter     | 12–13px | 400    |
| Eyebrow / label     | Inter     | 11px    | 600    |
| Nav item            | Inter     | 13–14px | 500    |

## Images & Placeholders
- Реальное изображение вставляется как `<img>` внутрь контейнера с фиксированными размерами
- Пока изображения нет → плейсхолдер с градиентом бренда (зелёный: `#d4f542→#a8e000`) + SVG иконка + текст "App Screenshot"
- `object-fit: cover` на всех `<img>` внутри карточек

## Mobile First Notes
- Все визуальные блоки (скриншоты, декоративные изображения) скрыть на мобильных `display: none` при ≤ 1200px
- Текстовый контент никогда не скрывается
- Touch targets минимум 44px в высоту

## Instruction Update Policy
Дизайн может меняться. После любого дизайн-изменения:
1. Реализовать изменение
2. Спросить пользователя: «Обновить инструкции под это изменение?»
3. Если да — обновить нужный `.copilot/*.md` и закоммитить отдельным коммитом: `docs: update instructions — ...`

## Accessibility
- Кнопки и ссылки: осмысленный `data-i18n` или `aria-label`
- Иконки без текста: `aria-hidden="true"`
- Цветовой контраст: основной текст на белом фоне ≥ 4.5:1
