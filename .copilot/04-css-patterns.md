# 04 — CSS Patterns

## Naming Convention (BEM-like)
```
.block                   /* компонент */
.block__element          /* часть компонента */
.block--modifier         /* вариант компонента */
```
Примеры: `.app-card`, `.app-card__photo`, `.app-card--partner`

## ⚠️ КРИТИЧЕСКОЕ ПРАВИЛО: stripes-drift (3 слоя)

Анимация `stripes-drift` у keyframe ожидает ровно **3 слоя** `background-position`:
```css
@keyframes stripes-drift {
  from { background-position: 0 0,    0 0,    0 0; }
  to   { background-position: 0 0, 18px 0,    0 0; }
}
```

Любой элемент с `animation: stripes-drift` ОБЯЗАН иметь **ровно 3** слоя `background`:
```css
/* Правильно: */
background:
  linear-gradient(transparent, transparent),   /* слой 1: прозрачный-заглушка */
  repeating-linear-gradient(...),               /* слой 2: движущиеся полосы */
  linear-gradient(...);                         /* слой 3: основной фон */

/* Неправильно: 2 или 4 слоя → анимация ломается */
```

## Hero / Dark Section Background
Тёмный Hero-блок создаётся через `::before` (не на самом элементе):
```css
.element {
  position: relative;
  overflow: hidden;
  /* цвет текста: белый */
}

.element::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  animation: stripes-drift 6s linear infinite;
  background:
    linear-gradient(transparent, transparent),
    repeating-linear-gradient(
      90deg,
      rgba(255,255,255,0.03) 0px,
      rgba(255,255,255,0.03) 1px,
      transparent 1px,
      transparent 18px
    ),
    linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  background-size: auto, 18px 100%, 100% 100%;
}

/* Весь контент внутри должен быть выше ::before */
.element > * { position: relative; z-index: 1; }
```

## Glassmorphism
```css
background: rgba(255, 255, 255, 0.10);
border: 1px solid rgba(255, 255, 255, 0.18);
backdrop-filter: blur(8px);
border-radius: var(--radius);
```
Используется на: инпуты контактной формы, кнопка в сайдбаре, партнёрская форма.

## Accent Gradient Text
```css
.accent-gradient {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## Badges
```css
.badge {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
}
```

## Buttons
- `.btn.btn--primary` — акцентный градиент, белый текст
- `.btn.btn--ghost` — прозрачный, рамка `--clr-border`
- Иконочная кнопка: `display: flex; align-items: center; gap: 6px;`

## Section Eyebrow
```css
.section__eyebrow {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--clr-text-muted);
}
```
Всегда идёт перед заголовком: `<p class="section__eyebrow">...</p><h2 class="section__title">...</h2>`
