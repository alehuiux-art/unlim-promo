export type Locale = "ka" | "ru" | "en";

export const LOCALES: Locale[] = ["ka", "ru", "en"];
export const LOCALE_LABELS: Record<Locale, string> = { ka: "ქარ", ru: "Рус", en: "Eng" };

export type FeatureText = {
  tag: string;
  title: string;
  descHtml: string;
  caption: string;
};

export type Dict = {
  htmlLang: string;
  forBusiness: string;
  nav: { advantages: string; free: string; benefit: string };
  startSelling: string;
  startSellingArrow: string;
  contactManager: string;
  hero: { badge: string; h1Html: string; sub2Html: string; pHtml: string; trust: string };
  stats: [string, string, string, string];
  daysWord: string;
  valueEyebrow: string;
  valueH2Html: string;
  features: FeatureText[];
  free: { kicker: string; h2Html: string; p: string };
  marquee: string;
  benefit: { eyebrow: string; h2Html: string; pHtml: string };
  cta: { h2Html: string; availableIn: string };
  footer: { tagline: string; copy: string };
  modal: {
    title: string;
    sub: string;
    name: string;
    phone: string;
    company: string;
    category: string;
    categories: string[];
    submit: string;
    note: string;
    successTitle: string;
    successText: string;
    done: string;
  };
};

export type ModalDict = Dict["modal"];

export const translations: Record<Locale, Dict> = {
  ru: {
    htmlLang: "ru",
    forBusiness: "для бизнеса",
    nav: { advantages: "Преимущества", free: "Бесплатно", benefit: "Выгода" },
    startSelling: "Начать продавать",
    startSellingArrow: "Начать продавать →",
    contactManager: "Связаться с менеджером",
    hero: {
      badge: "Unlim для бизнеса",
      h1Html: "Продай товары<br>на Unlim",
      sub2Html: 'с гарантией <span style="color:#0EA44E">100%</span>',
      pHtml:
        'Запусти <strong style="font-weight:700;color:#14181F">бесплатный интернет-магазин</strong> за пару минут, получи <strong style="font-weight:700;color:#14181F">тысячи покупателей</strong> и личного менеджера 24/7. Без комиссий за продажу — только рост.',
      trust: "Регистрация бесплатна · без скрытых платежей",
    },
    stats: ["активных объявлений", "покупателей в месяц", "объявлений за 24 часа", "среднее время продажи"],
    daysWord: "дня",
    valueEyebrow: "Unlim предоставляет",
    valueH2Html: 'Почему ты продаёшь товары со <span style="color:#0EA44E">100%</span> гарантией',
    features: [
      {
        tag: "МАГАЗИН",
        title: "Бесплатный интернет-магазин с онлайн-оплатой",
        descHtml:
          'Запусти собственную витрину с приёмом платежей онлайн за пару минут — <strong style="color:#fff;font-weight:800">без вложений</strong> и <span style="color:#FFEA00;font-weight:800">0% комиссии</span> за продажи.',
        caption: "Скриншот витрины магазина",
      },
      {
        tag: "ПОДДЕРЖКА",
        title: "Личный менеджер 24/7",
        descHtml:
          'Эксперт Unlim <strong style="color:#14181F;font-weight:700">вместе с тобой</strong> упаковывает и продаёт товары — на связи <span style="color:#0EA44E;font-weight:700">в любое время суток</span>.',
        caption: "Фото личного менеджера",
      },
      {
        tag: "АУДИТОРИЯ",
        title: "Тысячи покупателей уже здесь",
        descHtml:
          'Готовая аудитория платформы увидит твои товары <span style="color:#0EA44E;font-weight:700">с первого дня</span> — не нужно собирать трафик с нуля.',
        caption: "Аудитория покупателей",
      },
      {
        tag: "ДОСТАВКА",
        title: "Бесплатная доставка по всей Грузии",
        descHtml:
          'Логистику <strong style="color:#14181F;font-weight:700">берём на себя</strong> — ты просто продаёшь, а заказ доезжает до покупателя <span style="color:#0EA44E;font-weight:700">бесплатно</span>.',
        caption: "Курьер и доставка",
      },
      {
        tag: "МАСШТАБ",
        title: "Для малого бизнеса и крупных компаний",
        descHtml:
          'Один инструмент масштабируется <strong style="color:#14181F;font-weight:700">под любой объём</strong> — от первой продажи до <span style="color:#0EA44E;font-weight:700">тысяч заказов</span> в день.',
        caption: "Малый и крупный бизнес",
      },
      {
        tag: "ПРОДВИЖЕНИЕ",
        title: "Твои товары — в Google и Facebook",
        descHtml:
          'Автоматическое продвижение приводит клиентов из <span style="color:#0EA44E;font-weight:700">самых крупных каналов</span> — без твоего участия.',
        caption: "Реклама в Google и Facebook",
      },
      {
        tag: "ГАРАНТИЯ",
        title: "Гарантированный поток покупателей",
        descHtml:
          'По выбранному тарифу мы <span style="color:#0EA44E;font-weight:700">гарантируем</span> приток клиентов — а не просто обещаем трафик.',
        caption: "График роста покупателей",
      },
      {
        tag: "ИНТЕГРАЦИИ",
        title: "Автозагрузка товаров из любой системы",
        descHtml:
          'Импорт из любого файла или системы — товары появляются на Unlim <strong style="color:#14181F;font-weight:700">автоматически</strong>, <span style="color:#0EA44E;font-weight:700">без ручной работы</span>.',
        caption: "Импорт товаров и интеграции",
      },
    ],
    free: {
      kicker: "Сколько это стоит",
      h2Html: 'Всё это — <span style="color:#0EA44E">абсолютно бесплатно</span>',
      p: "Никаких скрытых платежей и комиссий за продажу. Ты платишь только за то, что реально помогает расти.",
    },
    marquee: "БЕСПЛАТНО",
    benefit: {
      eyebrow: "Честно",
      h2Html: 'В чём наша <span style="color:#FFEA00">выгода?</span>',
      pHtml:
        'Нам выгодно работать с <strong style="font-weight:700;color:#fff">сильными партнёрами</strong>. Когда растут они — растём и мы: привлекаем больше людей на платформу и берём новые высоты <strong style="font-weight:700;color:#FFEA00">вместе</strong>.',
    },
    cta: { h2Html: "Давай захватывать<br>рынок вместе", availableIn: "Доступно в" },
    footer: { tagline: "Маркетплейс №1 в Грузии", copy: "© 2026 Unlim.ge · для бизнеса" },
    modal: {
      title: "Оставьте заявку — менеджер поможет запустить продажи",
      sub: "Разберём каталог, подберём тариф, запустим рекламу в Google и Meta. Звонок 10–15 минут. Никаких обязательств.",
      name: "Имя",
      phone: "Телефон / WhatsApp",
      company: "Название компании",
      category: "Тип товаров (опционально)",
      categories: ["Одежда и обувь", "Электроника", "Красота и здоровье", "Дом и сад", "Детские товары", "Авто", "Продукты", "Другое"],
      submit: "Получить первые продажи",
      note: "Данные не передаём третьим лицам.",
      successTitle: "Заявка отправлена!",
      successText: "Менеджер свяжется с вами в ближайшее время — обычно в течение 15 минут.",
      done: "Готово",
    },
  },

  ka: {
    htmlLang: "ka",
    forBusiness: "ბიზნესისთვის",
    nav: { advantages: "უპირატესობები", free: "უფასოდ", benefit: "სარგებელი" },
    startSelling: "დაიწყე გაყიდვა",
    startSellingArrow: "დაიწყე გაყიდვა →",
    contactManager: "დაუკავშირდი მენეჯერს",
    hero: {
      badge: "Unlim ბიზნესისთვის",
      h1Html: "გაყიდე პროდუქცია<br>Unlim-ზე",
      sub2Html: '<span style="color:#0EA44E">100%</span> გარანტიით',
      pHtml:
        'გაუშვი <strong style="font-weight:700;color:#14181F">უფასო ონლაინ-მაღაზია</strong> რამდენიმე წუთში, მიიღე <strong style="font-weight:700;color:#14181F">ათასობით მყიდველი</strong> და პირადი მენეჯერი 24/7. გაყიდვის საკომისიოს გარეშე — მხოლოდ ზრდა.',
      trust: "რეგისტრაცია უფასოა · ფარული გადასახადების გარეშე",
    },
    stats: ["აქტიური განცხადება", "მყიდველი თვეში", "განცხადება 24 საათში", "გაყიდვის საშუალო დრო"],
    daysWord: "დღე",
    valueEyebrow: "Unlim გთავაზობთ",
    valueH2Html: 'რატომ ყიდი პროდუქციას <span style="color:#0EA44E">100%</span> გარანტიით',
    features: [
      {
        tag: "მაღაზია",
        title: "უფასო ონლაინ-მაღაზია ონლაინ-გადახდით",
        descHtml:
          'გაუშვი საკუთარი ვიტრინა ონლაინ-გადახდით რამდენიმე წუთში — <strong style="color:#fff;font-weight:800">ინვესტიციის გარეშე</strong> და გაყიდვებზე <span style="color:#FFEA00;font-weight:800">0% საკომისიო</span>.',
        caption: "მაღაზიის ვიტრინის სქრინშოტი",
      },
      {
        tag: "მხარდაჭერა",
        title: "პირადი მენეჯერი 24/7",
        descHtml:
          'Unlim-ის ექსპერტი <strong style="color:#14181F;font-weight:700">შენთან ერთად</strong> აფუთავს და ყიდის პროდუქციას — კავშირზეა <span style="color:#0EA44E;font-weight:700">დღე-ღამის ნებისმიერ დროს</span>.',
        caption: "პირადი მენეჯერის ფოტო",
      },
      {
        tag: "აუდიტორია",
        title: "ათასობით მყიდველი უკვე აქ არის",
        descHtml:
          'პლატფორმის მზა აუდიტორია დაინახავს შენს პროდუქციას <span style="color:#0EA44E;font-weight:700">პირველივე დღიდან</span> — ტრაფიკის ნულიდან შეგროვება საჭირო არ არის.',
        caption: "მყიდველთა აუდიტორია",
      },
      {
        tag: "მიწოდება",
        title: "უფასო მიწოდება მთელ საქართველოში",
        descHtml:
          'ლოგისტიკას <strong style="color:#14181F;font-weight:700">ჩვენ ვიღებთ თავზე</strong> — შენ უბრალოდ ყიდი, შეკვეთა კი მყიდველამდე <span style="color:#0EA44E;font-weight:700">უფასოდ</span> მიდის.',
        caption: "კურიერი და მიწოდება",
      },
      {
        tag: "მასშტაბი",
        title: "მცირე ბიზნესისა და მსხვილი კომპანიებისთვის",
        descHtml:
          'ერთი ინსტრუმენტი მასშტაბირდება <strong style="color:#14181F;font-weight:700">ნებისმიერ მოცულობაზე</strong> — პირველი გაყიდვიდან დღეში <span style="color:#0EA44E;font-weight:700">ათასობით შეკვეთამდე</span>.',
        caption: "მცირე და მსხვილი ბიზნესი",
      },
      {
        tag: "პრომოცია",
        title: "შენი პროდუქცია — Google-სა და Facebook-ში",
        descHtml:
          'ავტომატური პრომოცია მოგიყვანს კლიენტებს <span style="color:#0EA44E;font-weight:700">უმსხვილესი არხებიდან</span> — შენი ჩართულობის გარეშე.',
        caption: "რეკლამა Google-სა და Facebook-ში",
      },
      {
        tag: "გარანტია",
        title: "მყიდველთა გარანტირებული ნაკადი",
        descHtml:
          'არჩეული ტარიფით ჩვენ <span style="color:#0EA44E;font-weight:700">გარანტიას ვიძლევით</span> კლიენტების შემოდინებაზე — და არა უბრალოდ ვპირდებით ტრაფიკს.',
        caption: "მყიდველთა ზრდის გრაფიკი",
      },
      {
        tag: "ინტეგრაციები",
        title: "პროდუქციის ავტო-ატვირთვა ნებისმიერი სისტემიდან",
        descHtml:
          'იმპორტი ნებისმიერი ფაილიდან თუ სისტემიდან — პროდუქცია Unlim-ზე ჩნდება <strong style="color:#14181F;font-weight:700">ავტომატურად</strong>, <span style="color:#0EA44E;font-weight:700">ხელით მუშაობის გარეშე</span>.',
        caption: "პროდუქციის იმპორტი და ინტეგრაციები",
      },
    ],
    free: {
      kicker: "რა ღირს ეს",
      h2Html: 'ეს ყველაფერი — <span style="color:#0EA44E">სრულიად უფასოა</span>',
      p: "ფარული გადასახადები და გაყიდვის საკომისიო არ არის. იხდი მხოლოდ იმაში, რაც ნამდვილად გეხმარება ზრდაში.",
    },
    marquee: "უფასოდ",
    benefit: {
      eyebrow: "გულწრფელად",
      h2Html: 'რა არის ჩვენი <span style="color:#FFEA00">სარგებელი?</span>',
      pHtml:
        'ჩვენთვის მომგებიანია <strong style="font-weight:700;color:#fff">ძლიერ პარტნიორებთან</strong> მუშაობა. როცა ისინი იზრდებიან — ჩვენც ვიზრდებით: მეტ ადამიანს მოვიყვანთ პლატფორმაზე და ახალ სიმაღლეებს <strong style="font-weight:700;color:#FFEA00">ერთად</strong> დავიპყრობთ.',
    },
    cta: { h2Html: "მოდი ერთად დავიპყროთ<br>ბაზარი", availableIn: "ხელმისაწვდომია" },
    footer: { tagline: "საქართველოს №1 მარკეტფლეისი", copy: "© 2026 Unlim.ge · ბიზნესისთვის" },
    modal: {
      title: "დატოვე განაცხადი — მენეჯერი დაგეხმარება გაყიდვების დაწყებაში",
      sub: "გავარჩევთ კატალოგს, შევარჩევთ ტარიფს, გავუშვებთ რეკლამას Google-სა და Meta-ში. 10–15 წუთიანი ზარი. ვალდებულებების გარეშე.",
      name: "სახელი",
      phone: "ტელეფონი / WhatsApp",
      company: "კომპანიის სახელი",
      category: "პროდუქციის ტიპი (არჩევითი)",
      categories: ["ტანსაცმელი და ფეხსაცმელი", "ელექტრონიკა", "სილამაზე და ჯანმრთელობა", "სახლი და ბაღი", "საბავშვო", "ავტო", "სასურსათო", "სხვა"],
      submit: "მიიღე პირველი გაყიდვები",
      note: "მონაცემებს მესამე პირებს არ გადავცემთ.",
      successTitle: "განაცხადი გაიგზავნა!",
      successText: "მენეჯერი მალე დაგიკავშირდებათ — ჩვეულებრივ 15 წუთის განმავლობაში.",
      done: "მზადაა",
    },
  },

  en: {
    htmlLang: "en",
    forBusiness: "for business",
    nav: { advantages: "Advantages", free: "Free", benefit: "Benefit" },
    startSelling: "Start selling",
    startSellingArrow: "Start selling →",
    contactManager: "Contact a manager",
    hero: {
      badge: "Unlim for business",
      h1Html: "Sell products<br>on Unlim",
      sub2Html: 'with a <span style="color:#0EA44E">100%</span> guarantee',
      pHtml:
        'Launch a <strong style="font-weight:700;color:#14181F">free online store</strong> in minutes, get <strong style="font-weight:700;color:#14181F">thousands of buyers</strong> and a personal manager 24/7. No sales commission — only growth.',
      trust: "Registration is free · no hidden fees",
    },
    stats: ["active listings", "buyers per month", "listings in 24 hours", "average time to sell"],
    daysWord: "days",
    valueEyebrow: "Unlim provides",
    valueH2Html: 'Why you sell products with a <span style="color:#0EA44E">100%</span> guarantee',
    features: [
      {
        tag: "STORE",
        title: "Free online store with online payments",
        descHtml:
          'Launch your own storefront with online payments in minutes — <strong style="color:#fff;font-weight:800">with no investment</strong> and <span style="color:#FFEA00;font-weight:800">0% commission</span> on sales.',
        caption: "Store front screenshot",
      },
      {
        tag: "SUPPORT",
        title: "Personal manager 24/7",
        descHtml:
          'An Unlim expert packages and sells your products <strong style="color:#14181F;font-weight:700">together with you</strong> — available <span style="color:#0EA44E;font-weight:700">around the clock</span>.',
        caption: "Personal manager photo",
      },
      {
        tag: "AUDIENCE",
        title: "Thousands of buyers are already here",
        descHtml:
          "The platform's ready audience will see your products <span style=\"color:#0EA44E;font-weight:700\">from day one</span> — no need to build traffic from scratch.",
        caption: "Audience of buyers",
      },
      {
        tag: "DELIVERY",
        title: "Free delivery across Georgia",
        descHtml:
          'We <strong style="color:#14181F;font-weight:700">handle the logistics</strong> — you just sell, and the order reaches the buyer <span style="color:#0EA44E;font-weight:700">for free</span>.',
        caption: "Courier and delivery",
      },
      {
        tag: "SCALE",
        title: "For small businesses and large companies",
        descHtml:
          'One tool scales <strong style="color:#14181F;font-weight:700">to any volume</strong> — from your first sale to <span style="color:#0EA44E;font-weight:700">thousands of orders</span> a day.',
        caption: "Small and large business",
      },
      {
        tag: "PROMOTION",
        title: "Your products — on Google and Facebook",
        descHtml:
          'Automatic promotion brings customers from <span style="color:#0EA44E;font-weight:700">the largest channels</span> — without your involvement.',
        caption: "Ads on Google and Facebook",
      },
      {
        tag: "GUARANTEE",
        title: "A guaranteed flow of buyers",
        descHtml:
          'On the chosen plan we <span style="color:#0EA44E;font-weight:700">guarantee</span> a flow of customers — not just promise traffic.',
        caption: "Buyer growth chart",
      },
      {
        tag: "INTEGRATIONS",
        title: "Auto-import of products from any system",
        descHtml:
          'Import from any file or system — products appear on Unlim <strong style="color:#14181F;font-weight:700">automatically</strong>, <span style="color:#0EA44E;font-weight:700">with no manual work</span>.',
        caption: "Product import and integrations",
      },
    ],
    free: {
      kicker: "How much it costs",
      h2Html: 'All of this — <span style="color:#0EA44E">completely free</span>',
      p: "No hidden fees or sales commissions. You only pay for what actually helps you grow.",
    },
    marquee: "FREE",
    benefit: {
      eyebrow: "Honestly",
      h2Html: "What's our <span style=\"color:#FFEA00\">benefit?</span>",
      pHtml:
        'It pays for us to work with <strong style="font-weight:700;color:#fff">strong partners</strong>. When they grow — we grow too: we bring more people to the platform and reach new heights <strong style="font-weight:700;color:#FFEA00">together</strong>.',
    },
    cta: { h2Html: "Let's conquer<br>the market together", availableIn: "Available on" },
    footer: { tagline: "The #1 marketplace in Georgia", copy: "© 2026 Unlim.ge · for business" },
    modal: {
      title: "Leave a request — a manager will help you start selling",
      sub: "We'll review your catalog, pick a plan, and launch ads on Google and Meta. A 10–15 minute call. No obligations.",
      name: "Name",
      phone: "Phone / WhatsApp",
      company: "Company name",
      category: "Product type (optional)",
      categories: ["Clothing & footwear", "Electronics", "Beauty & health", "Home & garden", "Kids", "Auto", "Groceries", "Other"],
      submit: "Get your first sales",
      note: "We don't share your data with third parties.",
      successTitle: "Request sent!",
      successText: "A manager will contact you shortly — usually within 15 minutes.",
      done: "Done",
    },
  },
};
