import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unlim для бизнеса — продавай товары с гарантией 100%",
  description:
    "Бесплатный интернет-магазин, тысячи покупателей и личный менеджер 24/7. Продавай на Unlim быстро и без комиссии.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
