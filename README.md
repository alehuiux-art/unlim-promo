# Unlim — промо-страница для бизнеса

Лендинг Unlim.ge на **Next.js 16** (App Router, TypeScript). Адаптивный, с переключателем языков (ქარ / Рус / Eng), анимациями появления, счётчиками, попапом заявки и оптимизированными изображениями.

## Локальный запуск

```bash
npm install
npm run dev      # http://localhost:3000
```

## Сборка статики

```bash
npm run build    # статический экспорт в ./out
```

## Деплой

Пуш в ветку `main` автоматически собирает и публикует сайт на **GitHub Pages**
через GitHub Actions (`.github/workflows/deploy.yml`).

Онлайн: https://alehuiux-art.github.io/unlim-landing/

## Структура

- `app/` — layout, страница, глобальные стили
- `components/` — анимации, hero-картинка, попап заявки
- `lib/i18n.ts` — переводы (ka/ru/en)
- `public/assets/` — изображения и логотип
