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

## Interactivity
- Каждый интерактивный элемент имеет `transition: var(--transition)` (0.22s ease)
- Hover на карточках: лёгкий подъём `transform: translateY(-2px)` + усиление тени
- Hover на навигации: `background: var(--clr-surface)`, цвет → `--clr-text`
- Активный nav-item: `background: var(--clr-surface)`, цвет → `--clr-text`
- Кнопки: `opacity: 0.85` на hover

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
