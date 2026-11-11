const I18N = {
    ru: {
        'meta.title': 'Резюме — Еременко Станислав | ML / Data Science',
        'meta.description': 'Резюме Еременко Станислав — Junior ML / Data Science, Казань. Опыт, образование, навыки и контакты.',
        'hero.initials': 'ЕС',
        'hero.status': 'Открыт к предложениям',
        'hero.name': 'ЕРЕМЕНКО СТАНИСЛАВ',
        'hero.subtitle': 'Junior ML / Data Science · Казань',
        'hero.phone': 'Телефон',
        'profile.title': 'Профиль',
        'profile.text': 'Junior-специалист по машинному обучению и анализу данных. Сейчас веду грантовый проект: оптический поток, поля деформаций и измерительная установка. Параллельно собираю пилоты по RAG, LLM и локальным моделям. Быстро включаюсь в задачи и довожу работу до рабочего результата.',
        'profile.city': 'Город: Казань',
        'profile.format': 'Формат: стажировка или junior',
        'profile.learn': 'Готов учиться на реальных задачах',
        'skills.title': 'Ключевые навыки',
        'experience.title': 'Опыт',
        'exp.umnik.role': 'ML-разработчик, руководитель проекта',
        'exp.umnik.meta': 'Грант «Умник» · 10.05.2026 — настоящее время',
        'exp.umnik.lead': 'Автоматизированная измерительная установка: стереозрение, оптический поток и оценка механических свойств.',
        'exp.umnik.mgmt': 'Руководство проектом',
        'exp.umnik.m1': 'Собрал команду, распределил роли и задачи.',
        'exp.umnik.m2': 'Планирую этапы разработки, контролирую сроки и результаты.',
        'exp.umnik.m3': 'Готовлю отчётность перед фондом и защищаю промежуточные итоги.',
        'exp.umnik.m4': 'Организую работу над измерительной установкой.',
        'exp.umnik.ml': 'ML-разработка',
        'exp.umnik.ml1': 'Выбираю и адаптирую нейросети оптического потока: SEA-RAFT, ResNet, 4D cost volume.',
        'exp.umnik.ml2': 'Обучаю модель на данных механических испытаний, повышаю устойчивость к шумам.',
        'exp.umnik.ml3': 'Оцениваю точность, делаю постобработку и считаю механические свойства по 3D-полям деформаций.',
        'exp.umnik.ml4': 'Интегрирую ML-часть с оптической системой, стереокамерами и ПО.',
        'exp.umnik.eng': 'Интеграция и инженерия',
        'exp.umnik.e1': 'Связываю стереокамеры, жёсткую базу, мини-ПК на Linux и микроконтроллеры.',
        'exp.umnik.e2': 'Держу воспроизводимость: документирую код и пайплайны.',
        'exp.intas.role': 'Стажёр-программист микроконтроллеров',
        'exp.intas.meta': 'ООО «ИНТАС КОМПАНИ» · 16.01.2025 — 15.09.2025',
        'exp.intas.l1': 'Программировал ESP32 / ESP8266 / Arduino под автоматизацию: датчики, реле, MQTT, уведомления в Telegram.',
        'exp.intas.l2': 'Участвовал в разработке автоматизированной установки для нефтегаза.',
        'exp.intas.l3': 'Настраивал Ubuntu/Debian, Docker, systemd, Nginx, бэкапы и мониторинг; поднимал локальные сервисы и GPU-окружение для ML.',
        'practice.title': 'ML / LLM практика',
        'practice.lead': 'Пилоты, учебные задачи и личные проекты. Не продакшен, если не сказано иначе.',
        'p1.title': 'Локальный GPT',
        'p1.status': 'Личный стек, использую',
        'p1.text': 'Ollama + Open WebUI: Llama 3.1, Qwen 2.5, Mistral. Работа с заметками и документами без облака.',
        'p2.title': 'RAG по личным заметкам',
        'p2.status': 'Личный проект, каждый день',
        'p2.text': 'LangChain + Chroma/Qdrant + Ollama, ответы по PDF и Markdown.',
        'p3.title': 'Помощник для кода',
        'p3.status': 'Использую в работе',
        'p3.text': 'Continue.dev + Qwen Coder локально: автодополнение и рефакторинг.',
        'p4.title': 'Telegram-бот к локальной LLM',
        'p4.status': 'Личный проект',
        'p4.text': 'aiogram + Ollama API, доступ с телефона, история в SQLite.',
        'p5.title': 'RAG-ассистент по базе знаний',
        'p5.status': 'Пилот',
        'p5.text': 'Парсинг Confluence / Notion / PDF, чанкинг, эмбеддинги, поиск в Qdrant/FAISS, ответы только по источникам, fallback на оператора.',
        'p6.title': 'Классификация обращений',
        'p6.status': 'Учебный / пилот',
        'p6.text': 'RuBERT/RoBERTa + CatBoost, сущности, LLM для summary и черновика ответа. Интеграция с Jira/Bitrix24 на уровне API.',
        'p7.title': 'Извлечение данных из документов',
        'p7.status': 'Пилот',
        'p7.text': 'OCR + LLM, схемы через Pydantic, confidence score, ручная проверка. Типовые счета.',
        'p8.status': 'Пилот',
        'p8.text': 'LLM генерирует SQL по схеме БД, только read-only, с валидацией. Хорошо работает на простых запросах.',
        'p9.title': 'Суммаризация встреч',
        'p9.status': 'Личный проект',
        'p9.text': 'Whisper + LLM: резюме, решения, action items. Структурирование через Pydantic, отправка в Notion/Telegram.',
        'p10.title': 'Суммаризация длинных документов',
        'p10.status': 'Личный проект',
        'p10.text': 'Map-reduce через LLM, PyMuPDF, сохранение в Markdown.',
        'p11.title': 'Дообучение LLM',
        'p11.status': 'Учебные эксперименты',
        'p11.text': 'LoRA / QLoRA для LLaMA и Mistral, промпт-инжиниринг, оценка качества.',
        'p12.title': 'Оценка RAG',
        'p12.status': 'Для пилота',
        'p12.text': 'Ручная разметка, точность, полнота и доля автоматических ответов.',
        'edu.title': 'Образование',
        'edu.uust': 'Уфимский университет науки и технологий',
        'edu.uust.desc': 'Выпускник. Подпрофиль: интеллектуальный анализ данных и машинное обучение.',
        'edu.uust.courses': 'Курсы: computer vision, классический ML, NLP, Python в статистическом анализе, распознавание образов, проектный менеджмент.',
        'edu.gpa': 'Средний балл:',
        'edu.gpaValue': '4,78',
        'edu.kai': 'Казанский национальный исследовательский технический университет им. А. Н. Туполева',
        'edu.kai.desc': '1 курс магистратуры. Профиль: искусственный интеллект в решении прикладных задач.',
        'expectations.title': 'Ожидания',
        'expectations.salary': 'Зарплата: 75–95 тыс. ₽ на руки, обсуждается по задачам и формату.',
        'expectations.l1': 'Важнее сильная команда и прикладные задачи в ML/DS.',
        'expectations.l2': 'Готов к тестовому заданию и техническому собеседованию.',
        'download.title': 'Скачать резюме',
        'download.text': 'Текстовая версия для отклика — без вёрстки, удобно вложить в письмо.',
        'download.btn': 'Скачать резюме',
        'download.note': 'Формат файла: .txt',
        'footer.prefix': 'Контакты:',
        'lang.group': 'Язык',
        'download.file': 'resume-eremenko-stanislav.txt'
    },
    en: {
        'meta.title': 'Resume — Stanislav Eremenko | ML / Data Science',
        'meta.description': 'Resume of Stanislav Eremenko — Junior ML / Data Science, Kazan. Experience, education, skills, and contacts.',
        'hero.initials': 'SE',
        'hero.status': 'Open to opportunities',
        'hero.name': 'STANISLAV EREMENKO',
        'hero.subtitle': 'Junior ML / Data Science · Kazan',
        'hero.phone': 'Phone',
        'profile.title': 'Profile',
        'profile.text': 'Junior specialist in machine learning and data analysis. I currently lead a grant project on optical flow, deformation fields, and a measurement setup. In parallel I build RAG, LLM, and local-model pilots. I ramp up quickly and take work to a working result.',
        'profile.city': 'Location: Kazan, Russia',
        'profile.format': 'Looking for: internship or junior role',
        'profile.learn': 'Ready to learn on real production tasks',
        'skills.title': 'Core skills',
        'experience.title': 'Experience',
        'exp.umnik.role': 'ML Engineer, Project Lead',
        'exp.umnik.meta': 'UMNIK grant · 10 May 2026 — present',
        'exp.umnik.lead': 'Automated measurement setup: stereo vision, optical flow, and mechanical property estimation.',
        'exp.umnik.mgmt': 'Project leadership',
        'exp.umnik.m1': 'Built the team and assigned roles and tasks.',
        'exp.umnik.m2': 'Plan development stages and track deadlines and outcomes.',
        'exp.umnik.m3': 'Prepare reports for the foundation and defend interim results.',
        'exp.umnik.m4': 'Organize work on the measurement setup.',
        'exp.umnik.ml': 'ML development',
        'exp.umnik.ml1': 'Select and adapt optical-flow networks: SEA-RAFT, ResNet, 4D cost volume.',
        'exp.umnik.ml2': 'Train the model on mechanical-test data and improve robustness to noise.',
        'exp.umnik.ml3': 'Evaluate accuracy, post-process results, and compute mechanical properties from 3D deformation fields.',
        'exp.umnik.ml4': 'Integrate the ML stack with the optical system, stereo cameras, and software.',
        'exp.umnik.eng': 'Integration and engineering',
        'exp.umnik.e1': 'Connect stereo cameras, a rigid baseline, a Linux mini-PC, and microcontrollers.',
        'exp.umnik.e2': 'Keep work reproducible: document code and pipelines.',
        'exp.intas.role': 'Microcontroller Programming Intern',
        'exp.intas.meta': 'INTAS COMPANY LLC · 16 Jan 2025 — 15 Sep 2025',
        'exp.intas.l1': 'Programmed ESP32 / ESP8266 / Arduino for automation: sensors, relays, MQTT, Telegram alerts.',
        'exp.intas.l2': 'Contributed to an automated setup for the oil and gas industry.',
        'exp.intas.l3': 'Configured Ubuntu/Debian, Docker, systemd, Nginx, backups, and monitoring; stood up local services and a GPU environment for ML.',
        'practice.title': 'ML / LLM practice',
        'practice.lead': 'Pilots, coursework, and personal projects. Not production unless stated otherwise.',
        'p1.title': 'Local GPT',
        'p1.status': 'Personal stack, in use',
        'p1.text': 'Ollama + Open WebUI: Llama 3.1, Qwen 2.5, Mistral. Notes and documents without the cloud.',
        'p2.title': 'RAG over personal notes',
        'p2.status': 'Personal project, daily',
        'p2.text': 'LangChain + Chroma/Qdrant + Ollama, answers from PDF and Markdown.',
        'p3.title': 'Coding assistant',
        'p3.status': 'Used at work',
        'p3.text': 'Continue.dev + Qwen Coder locally: autocomplete and refactoring.',
        'p4.title': 'Telegram bot for a local LLM',
        'p4.status': 'Personal project',
        'p4.text': 'aiogram + Ollama API, phone access, history in SQLite.',
        'p5.title': 'Knowledge-base RAG assistant',
        'p5.status': 'Pilot',
        'p5.text': 'Parse Confluence / Notion / PDF, chunking, embeddings, Qdrant/FAISS search, answers grounded in sources, fallback to a human operator.',
        'p6.title': 'Ticket classification',
        'p6.status': 'Coursework / pilot',
        'p6.text': 'RuBERT/RoBERTa + CatBoost, entities, LLM for summary and a draft reply. Jira/Bitrix24 integration at the API level.',
        'p7.title': 'Document data extraction',
        'p7.status': 'Pilot',
        'p7.text': 'OCR + LLM, Pydantic schemas, confidence score, human review. Typical invoices.',
        'p8.status': 'Pilot',
        'p8.text': 'LLM generates SQL from the database schema, read-only, with validation. Works well on simple queries.',
        'p9.title': 'Meeting summarization',
        'p9.status': 'Personal project',
        'p9.text': 'Whisper + LLM: recap, decisions, action items. Structured with Pydantic, sent to Notion/Telegram.',
        'p10.title': 'Long-document summarization',
        'p10.status': 'Personal project',
        'p10.text': 'Map-reduce with an LLM, PyMuPDF, saved as Markdown.',
        'p11.title': 'LLM fine-tuning',
        'p11.status': 'Learning experiments',
        'p11.text': 'LoRA / QLoRA for LLaMA and Mistral, prompt engineering, quality evaluation.',
        'p12.title': 'RAG evaluation',
        'p12.status': 'For a pilot',
        'p12.text': 'Manual labels, precision, recall, and the share of automatic answers.',
        'edu.title': 'Education',
        'edu.uust': 'Ufa University of Science and Technology',
        'edu.uust.desc': 'Graduate. Track: data mining and machine learning.',
        'edu.uust.courses': 'Courses: computer vision, classical ML, NLP, Python for statistical analysis, pattern recognition, project management.',
        'edu.gpa': 'GPA:',
        'edu.gpaValue': '4.78',
        'edu.kai': 'Kazan National Research Technical University named after A. N. Tupolev',
        'edu.kai.desc': '1st-year Master’s student. Track: artificial intelligence for applied problems.',
        'expectations.title': 'Expectations',
        'expectations.salary': 'Salary: 75–95k RUB net, negotiable by role and scope.',
        'expectations.l1': 'A strong team and applied ML/DS work matter more.',
        'expectations.l2': 'Ready for a take-home task and a technical interview.',
        'download.title': 'Download resume',
        'download.text': 'Plain-text version for applications — no layout, easy to attach to an email.',
        'download.btn': 'Download resume',
        'download.note': 'File format: .txt',
        'footer.prefix': 'Contacts:',
        'lang.group': 'Language',
        'download.file': 'resume-eremenko-stanislav-en.txt'
    }
};

const RU_COUNTRIES = new Set([
    'RU', 'BY', 'KZ', 'KG', 'TJ', 'UZ', 'AM', 'AZ', 'MD'
]);

const STORAGE_KEY = 'resume-lang';

function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.ru;
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const value = dict[key];
        if (!value) return;

        if (el.tagName === 'TITLE') {
            document.title = value;
            return;
        }
        if (el.tagName === 'META' && el.getAttribute('name') === 'description') {
            el.setAttribute('content', value);
            return;
        }
        el.textContent = value;
    });

    const download = document.querySelector('.download-btn');
    if (download && dict['download.file']) {
        download.setAttribute('href', dict['download.file']);
        download.setAttribute('download', dict['download.file']);
    }

    const group = document.querySelector('.lang-switch');
    if (group) group.setAttribute('aria-label', dict['lang.group']);

    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
        const active = btn.getAttribute('data-set-lang') === lang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });
}

function persistLanguage(lang) {
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
}

function languageFromQuery() {
    const lang = new URLSearchParams(window.location.search).get('lang');
    return lang === 'en' || lang === 'ru' ? lang : null;
}

function languageFromStorage() {
    try {
        const lang = localStorage.getItem(STORAGE_KEY);
        return lang === 'en' || lang === 'ru' ? lang : null;
    } catch (e) {
        return null;
    }
}

function languageFromBrowser() {
    const langs = [...(navigator.languages || []), navigator.language]
        .filter(Boolean)
        .map((item) => item.toLowerCase());

    if (langs.some((item) => item.startsWith('ru') || item.startsWith('be') || item.startsWith('kk'))) {
        return 'ru';
    }
    return 'en';
}

async function languageFromCountry() {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2500);

    try {
        const response = await fetch('https://ipwho.is/?fields=success,country_code', {
            signal: controller.signal
        });
        const data = await response.json();
        if (data && data.success && data.country_code) {
            const code = String(data.country_code).toUpperCase();
            return RU_COUNTRIES.has(code) ? 'ru' : 'en';
        }
    } catch (e) {
        return null;
    } finally {
        clearTimeout(timer);
    }

    return null;
}

async function resolveLanguage() {
    const fromQuery = languageFromQuery();
    if (fromQuery) {
        persistLanguage(fromQuery);
        return fromQuery;
    }

    const fromStorage = languageFromStorage();
    if (fromStorage) return fromStorage;

    const fromCountry = await languageFromCountry();
    if (fromCountry) return fromCountry;

    return languageFromBrowser();
}

document.addEventListener('DOMContentLoaded', async () => {
    const immediate = languageFromQuery() || languageFromStorage() || document.documentElement.dataset.lang;
    if (immediate === 'en' || immediate === 'ru') {
        applyLanguage(immediate);
    }

    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-set-lang');
            if (lang !== 'en' && lang !== 'ru') return;
            persistLanguage(lang);
            applyLanguage(lang);
        });
    });

    const lang = await resolveLanguage();
    applyLanguage(lang);
});
