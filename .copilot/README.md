# Pauk.Agency — Copilot Instructions

Это рабочие инструкции для GitHub Copilot при работе над сайтом Pauk.Agency.
**Перед любыми изменениями** прочитай нужные разделы.

## Файлы инструкций

| Файл | Содержание |
|------|-----------|
| [01-project.md](01-project.md) | Стек, структура файлов, деплой |
| [02-design-tokens.md](02-design-tokens.md) | CSS-переменные: цвета, шрифты, отступы |
| [03-layout.md](03-layout.md) | Секции, сетки, breakpoints, правила колонок |
| [04-css-patterns.md](04-css-patterns.md) | BEM, stripes-drift (3 слоя!), glassmorphism |
| [05-ux-rules.md](05-ux-rules.md) | Типографика, интерактивность, мобильные |
| [06-components.md](06-components.md) | HTML-структура всех компонентов |
| [07-i18n.md](07-i18n.md) | Переводы: 9 языков, добавление ключей |
| [08-git-workflow.md](08-git-workflow.md) | Коммиты, деплой, revert |

## Быстрые правила

1. **Всегда используй CSS-переменные** — не хардкодь цвета
2. **stripes-drift = ровно 3 слоя background** — нарушение ломает анимацию
3. **Любой новый текст = data-i18n + перевод в 9 файлах**
4. **После каждого изменения** → `git add . && git commit -m "..." && git push`
5. **Перед реализацией** — прочитай текущий файл, не гадай по памяти
6. **Изображение у правого края карточки**: `grid-template-columns: minmax(0,Xpx) 1fr` + `padding-right: 0` на секции + `padding-right: 64px` на visual-обёртке
7. **Если задача непонятна** — задавай уточняющие вопросы, не делай на угад
