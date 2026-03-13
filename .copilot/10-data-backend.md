# 10 — Data & Backend

## Текущий этап: Mock через localStorage

На старте вся логика авторизации и данных — имитация через `localStorage`.  
**Цель:** полностью рабочий UI без бэкенда, чтобы потом заменить только слой данных.

### Структура mock-данных в localStorage
```js
// Текущий пользователь
localStorage.setItem('auth_user', JSON.stringify({
  id: 'u_001',
  role: 'influencer',   // 'influencer' | 'admin'
  name: 'Ivan Petrov',
  email: 'ivan@example.com',
  lang: 'ru'
}));

// Промокоды инфлюенсера
localStorage.setItem('promo_codes', JSON.stringify([
  { app: 'appname-one', code: 'IVAN15', installs: 42, earned: 180.50 }
]));
```

### Принципы mock-слоя
- Все обращения к данным — через единый модуль `js/data.js` (функции `getData()`, `setData()`)
- Никаких прямых `localStorage.getItem` в HTML-страницах или компонентах
- Когда придёт Supabase — меняем только `js/data.js`, остальное не трогаем

---

## Будущий этап: Supabase

**Supabase** — PostgreSQL + Auth + Realtime + Storage, hosted.

### Что переедет на Supabase
| Сейчас (localStorage) | Потом (Supabase) |
|-----------------------|-----------------|
| `auth_user` | `supabase.auth.signIn()` |
| Промокоды, статистика | таблицы `promo_codes`, `installs` |
| Данные приложений | таблица `apps` |
| Выплаты | таблица `payouts` |

### Файлы для Supabase-интеграции (создать при переходе)
```
js/
  supabase.js     ← инициализация клиента (ключи из env / config)
  data.js         ← единый слой данных (сейчас mock, потом Supabase)
  auth.js         ← логика входа/выхода, проверка роли
```

### Переменные окружения (когда придёт время)
```js
// js/supabase-config.js  — НЕ коммитить в git (добавить в .gitignore)
const SUPABASE_URL = 'https://xxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJ...';
```
⚠️ `.gitignore` должен содержать `js/supabase-config.js` до подключения Supabase.

### Supabase RLS (Row Level Security) — обязательно
- Инфлюенсер видит только свои строки (`user_id = auth.uid()`)
- Разработчик видит только строки своих приложений (`developer_id = auth.uid()`)
- Таблицы без RLS — только для admin-роли через service_role key (только на сервере)

---

## Роли и доступ (актуально сейчас)

| Страница | Инфлюенсер | Администратор |
|----------|-----------|---------------|
| `index.html` | ✅ | ✅ |
| `apps.html` | ✅ | ✅ |
| `app-detail.html` | ✅ | ✅ |
| `login.html` | ✅ (перенаправление если уже вошёл) | ✅ |
| `dashboard-influencer.html` | ✅ | ✅ |
| `dashboard-admin.html` | ❌ редирект на influencer | ✅ |

Проверка роли при загрузке каждого дашборда:
```js
const user = JSON.parse(localStorage.getItem('auth_user'));
if (!user) location.href = '/pages/login.html';
if (user.role !== 'admin') location.href = '/pages/dashboard-influencer.html';
```

---

## ЛК разработчиков приложений — вне основного сайта

Дашборд для сторонних разработчиков приложений — **отдельный субдомен**, разрабатывается позже.  
Предположительно: `developers.pauk.agency`  
В основном репозитории не реализуется.
