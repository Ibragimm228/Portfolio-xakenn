import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Обо мне",
  },
  {
    id: "work",
    title: "Опыт",
  },
  {
    id: "contact",
    title: "Контакты",
  },
];

const services = [
  {
    title: "Frontend Разработчик",
    icon: web,
  },
  {
    title: "React Разработчик",
    icon: mobile,
  },
  {
    title: "Python Разработчик",
    icon: backend,
  },
  {
    title: "UI/UX Энтузиаст",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Разработка",
    company_name: "Самообучение",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2024 - Настоящее время",
    points: [
      "Освоил React.js и TypeScript для создания современных веб-приложений.",
      "Разрабатывал адаптивные и интерактивные пользовательские интерфейсы используя HTML, CSS и JavaScript.",
      "Реализовал управление состоянием и компонентную архитектуру.",
      "Создал множество практических проектов для демонстрации навыков.",
    ],
  },
  {
    title: "React Экосистема",
    company_name: "Практические Проекты",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "2024 - Настоящее время",
    points: [
      "Глубоко изучил React.js, включая хуки, контекст и продвинутые паттерны.",
      "Работал с современными инструментами сборки и деплоя (Vite, Vercel).",
      "Создал несколько полнофункциональных веб-приложений.",
      "Освоил современные паттерны разработки: компонентная архитектура, управление состоянием и переиспользование кода.",
    ],
  },
  {
    title: "Современные Веб-Технологии",
    company_name: "Непрерывное Обучение",
    icon: web,
    iconBg: "#383E56",
    date: "2024 - Настоящее время",
    points: [
      "Специализировался на Tailwind CSS для быстрой разработки UI.",
      "Изучил Node.js для full-stack JavaScript разработки.",
      "Практиковал контроль версий с Git и деплой на Vercel.",
      "Создал портфолио проектов, демонстрирующих различные навыки веб-разработки.",
    ],
  },
  {
    title: "Python & Telegram Bots",
    company_name: "Практические Проекты",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2024 - Настоящее время",
    points: [
      "Разработал несколько Telegram ботов на Python с использованием aiogram и aiosqlite.",
      "Создал бота для анонимных вопросов с системой уникальных ссылок и анонимных ответов.",
      "Реализовал анонимный чат-бот с системой поиска собеседников и взаимных лайков.",
      "Разработал бота-администратора для модерации групп с системой управления запрещенным контентом.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Внимание Ибрагима к деталям и современный подход к frontend разработке произвели на меня впечатление. Его React приложения чистые и удобные для пользователей.",
    name: "Алексей Иванов",
    designation: "Senior Разработчик",
    company: "Tech Community",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Работать над проектами с Ибрагимом было здорово. Он привносит свежие идеи и реализует их с помощью современных технологий.",
    name: "Мария Петрова",
    designation: "UI/UX Дизайнер",
    company: "Design Studio",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Страсть Ибрагима к изучению и совершенствованию своих навыков очевидна в каждом проекте. Его знания TypeScript и React солидны.",
    name: "Дмитрий Смирнов",
    designation: "Frontend Lead",
    company: "Dev Community",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "Buka v2",
    description:
      "Современное веб-приложение, созданное с использованием React. Демонстрирует навыки работы с современными frontend технологиями, адаптивным дизайном и пользовательским интерфейсом.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/2.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://buka-v2.vercel.app/",
  },
  {
    name: "Mini Arima",
    description:
      "Интерактивное веб-приложение, разработанное с фокусом на пользовательский опыт. Проект демонстрирует умение создавать функциональные и визуально привлекательные интерфейсы.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vercel",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/3.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://mini-arima.vercel.app/",
  },
  {
    name: "Frontend Mania Weather",
    description:
      "Современное приложение для отслеживания погоды с интуитивным интерфейсом. Демонстрирует работу с API, обработку данных в реальном времени и адаптивный дизайн для всех устройств.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "weather-api",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/4.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://frontend-mania-weather.vercel.app/",
  },
  {
    name: "Мебельщик Тверь",
    description:
      "Корпоративный сайт мебельной компании с современным дизайном и полным функционалом. Включает каталог продукции, галерею работ, систему заказов и контактную информацию.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "business",
        color: "green-text-gradient",
      },
      {
        name: "e-commerce",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/1.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://mebeliv2.vercel.app/",
  },
  {
    name: "FinPulse",
    description:
      "Современная финансовая платформа для управления личными финансами и инвестициями. Приложение предоставляет аналитику, отслеживание расходов и инструменты для финансового планирования.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fintech",
        color: "green-text-gradient",
      },
      {
        name: "analytics",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/5.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://fin-pulse-three.vercel.app/",
  },
  {
    name: "ZenSleep",
    description:
      "Персонализированное приложение для улучшения качества сна с помощью звуковых ландшафтов и дыхательных практик. ZenSleep адаптируется к вашим уникальным паттернам сна для более спокойного и восстанавливающего отдыха.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "wellness",
        color: "green-text-gradient",
      },
      {
        name: "personalized",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/6.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://zen-sleep.vercel.app/",
  },
  {
    name: "EduSpark",
    description:
      "Инновационная образовательная платформа, созданная для современного образа жизни. Предлагает мощные функции для улучшения обучения, адаптированные под потребности занятых профессионалов с интуитивным интерфейсом и персонализированным опытом.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "education",
        color: "green-text-gradient",
      },
      {
        name: "e-learning",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/13.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://edu-spark-sand.vercel.app/",
  },
  {
    name: "Circle",
    description:
      "Интерактивное приложение для рисования идеальных кругов. Просто кликните и тяните, чтобы нарисовать идеальный круг. Идеальный инструмент для художников, дизайнеров и всех, кто любит создавать геометрически точные формы.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "canvas",
        color: "green-text-gradient",
      },
      {
        name: "interactive",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/10.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://circle-three-peach.vercel.app/",
  },
  {
    name: "Pravda Desvie",
    description:
      "Игровое приложение 'Правда или Действие' с расширенным функционалом. Включает ежедневные задания, магазин, квесты, историю игр и возможность поделиться правдой или действием через уникальную ссылку с друзьями.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "game",
        color: "green-text-gradient",
      },
      {
        name: "social",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/11.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://pravda-desvie.vercel.app/",
  },
  {
    name: "Redefine Gaming",
    description:
      "Современный Landing Page для игровой платформы с футуристическим дизайном. Включает интерактивные элементы, анимированные эффекты, секции продуктов (ZIGMA, NEXUS, AZUL) и иммерсивный пользовательский опыт. Демонстрирует навыки создания высококачественных игровых лендингов.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gaming",
        color: "green-text-gradient",
      },
      {
        name: "landing-page",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/12.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://redefine-gaming-nine.vercel.app/",
  },
  {
    name: "Анонимные вопросы",
    description:
      "Telegram бот для анонимных вопросов, реализованный на Python с использованием aiogram и aiosqlite. У каждого пользователя есть уникальная ссылка на профиль, по которой можно задать анонимный вопрос. Ответы также отправляются анонимно.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "telegram-bot",
        color: "green-text-gradient",
      },
      {
        name: "aiosqlite",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/7.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://t.me/your_bot_username",
  },
  {
    name: "Анонимный чат",
    description:
      "Telegram бот для анонимного общения с системой поиска собеседников. Пользователи могут найти случайного собеседника, обмениваться сообщениями анонимно, ставить лайки/дизлайки и при взаимном лайке получать контакты для продолжения общения в личных сообщениях.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "telegram-bot",
        color: "green-text-gradient",
      },
      {
        name: "chat-system",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/8.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://t.me/your_anonymous_chat_bot",
  },
  {
    name: "Telegram бот Администратор",
    description:
      "Мощный Telegram бот для модерации групп с системой управления запрещенным контентом. Автоматически блокирует пользователей за отправку запрещенных текстов, ведет журнал модерации и предоставляет администраторам полный контроль над контентом группы.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "telegram-bot",
        color: "green-text-gradient",
      },
      {
        name: "moderation",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/9.jpg",
    source_code_link: "https://github.com/Ibragimm228",
    live_demo_link: "https://t.me/your_admin_bot",
  },
];

export { services, technologies, experiences, testimonials, projects };
