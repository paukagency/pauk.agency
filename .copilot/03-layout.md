# 03 — Layout System

## Page Layout
Страница = фиксированный сайдбар слева + прокручиваемый контент справа.

```css
.main {
  margin: 12px 12px 12px calc(var(--sidebar-w) + 24px);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
```

## Section
Каждый смысловой блок = `.section`:
```css
.section {
  padding: 64px 64px;
  background: var(--clr-card);   /* белый блок */
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
}
```
- Между секциями gap 12px (от `.main`)
- **Не вкладывать `.section` друг в друга**

## Breakpoints
| Точка     | Изменения |
|-----------|-----------|
| ≤ 1200px  | `padding: 64px 48px`, коллапс сложных гридов в 1 колонку |
| ≤ 1024px  | мобильный сайдбар (скрывается, бургер) |
| ≤ 900px   | `--sidebar-w: 220px`, грид-карточки → 1 колонка |
| ≤ 720px   | `padding: 40px 24px`, футер в колонку, steps → 1 колонка |

## Grids
Стандартный паттерн для двух колонок:
```css
display: grid;
grid-template-columns: (левая) (правая);
gap: 48px;
align-items: start;
```

Правила для правой колонки-изображения:
- `grid-template-columns: minmax(0, Xpx) 1fr` — левая колонка фиксированная, правая растягивается
- Изображение/визуал помещается в обёртку `.xxx__visual` с `justify-content: flex-end`
- Чтобы отступы изображения от края карточки были равны паддингу секции (64px) → `padding-right: 0` на `.section`, `padding-right: 64px` на `.xxx__visual`
- На мобильных (≤ 1200px) визуал скрывается: `display: none`, секции возвращается `padding-right: 48px`

## Hero Blocks (dark)
Секции с тёмным фоном (`.section--dark`) используют псевдо-элемент `::before` для анимированного фона.  
Подробнее: `04-css-patterns.md` → stripes-drift.

## Sidebar Structure
```
.sidebar
  .sidebar__logo
  .sidebar__nav         (flex: 0 0 auto на мобильных)
  .sidebar__influencer  (margin: auto 16px 0 — прижимается к низу)
  .sidebar__lang        (margin-bottom: 20px)
```
