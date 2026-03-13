# 02 — Design Tokens

## CSS Variables (`:root` в `css/style.css`)

### Colors
```css
--clr-bg:         #f0f1f3   /* фон всей страницы */
--clr-card:       #ffffff   /* фон секций и карточек */
--clr-surface:    #f0f1f3   /* вторичная поверхность (promo-block, inputs) */
--clr-surface-2:  #e4e5e8   /* ещё более тёмная поверхность */
--clr-border:     #e4e5e8   /* разделители */
--clr-text:       #111111   /* основной текст */
--clr-text-muted: #777777   /* второстепенный текст */

--clr-accent-a:   #5996f3   /* синий (начало градиента) */
--clr-accent-b:   #0088cc   /* тёмно-синий (конец градиента) */
```

### Gradients
```css
--gradient-accent:      linear-gradient(90deg,  #5996f3, #0088cc)  /* горизонтальный */
--gradient-accent-diag: linear-gradient(135deg, #5996f3, #0088cc)  /* диагональный */
```

### Typography
```css
--font:         'Inter', system-ui, sans-serif   /* основной текст */
--font-heading: 'Syne', system-ui, sans-serif    /* заголовки, лейблы, акценты */
```
- `--font` → тело, описания, навигация, кнопки
- `--font-heading` → h1–h4, `.section__eyebrow`, `.partner-title`, `.sidebar__influencer-label`

### Shape & Motion
```css
--radius:     14px    /* карточки, блоки */
--radius-sm:  8px     /* кнопки, badges, nav-items */
--transition: 0.22s ease
```

### Sidebar
```css
--sidebar-w:           240px
--sidebar-w-collapsed: 72px
```

## Usage Rules
- ВСЕГДА использовать переменные, не хардкодить цвета
- Акцентный текст: `class="accent-gradient"` (CSS: `-webkit-background-clip: text`)
- Акцентный фон: `class="accent-gradient-bg"`
- Новые цвета для конкретного компонента (напр. иконка приложения) — инлайновый `style=""`, не в `:root`
