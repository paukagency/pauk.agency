# 08 — Git Workflow

## Commit Convention
```
тип: краткое описание на английском
```

| Тип      | Когда использовать |
|----------|--------------------|
| `feat`   | новый компонент, страница, функция |
| `fix`    | исправление бага или визуального дефекта |
| `style`  | только CSS-изменения без логики |
| `refactor` | переструктурирование без изменения внешнего вида |
| `content`| замена placeholder-текста на реальный контент |

Примеры:
```
feat: app-detail iPhone mockup right column
fix: image pushed to right edge of card
style: promo-block typography spacing
content: update hero description text
```

## After Every Change
```bash
git add . && git commit -m "тип: описание" && git push
```

## When to Ask Before Acting
Всегда спрашивать перед:
- `git reset --hard` (необратимо)
- `git push --force`
- Удалением файлов
- Переименованием страниц (ломает все ссылки)

## Revert
Если нужно отменить последний коммит (сохраняя историю):
```bash
git revert HEAD --no-edit && git push
```

## GitHub Pages
- Деплой автоматический из ветки `main`
- Задержка ~1 минута после push
- URL: `https://paukagency.github.io/pauk.agency/`
- Страницы в `/pages/` доступны по: `.../pauk.agency/pages/app-detail.html`
