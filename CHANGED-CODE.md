# Полный изменённый код

## index.html

~~~~html
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="0;url=news.html">
  <title>Сибнефтекарт</title>
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body><main class="container section"><h1>Сибнефтекарт</h1><p><a href="news.html">Новости</a> · <a href="company-history.html">О компании</a> · <a href="contacts.html">Контакты</a></p></main></body>
</html>

~~~~

## news.html

~~~~html
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Новости АО НПФ Сибнефтекарт — изменения сети АЗС, обслуживание топливных карт и важные уведомления." />
  <title>Новости — Сибнефтекарт</title>
  <link rel="stylesheet" href="assets/styles.css" />
</head>
<body data-page="news">
  <a class="skip-link" href="#main">Перейти к содержимому</a>
  <header class="site-header" data-site-header>
    <nav class="container fallback-nav" aria-label="Основная навигация"><a href="index.html">Сибнефтекарт</a><a href="news.html">Новости</a><a href="company-history.html">О компании</a><a href="contacts.html">Контакты</a><a href="https://cloud.sncard.ru/">Личный кабинет</a></nav>
  </header>

  <main id="main" tabindex="-1">
    <section class="page-hero">
      <div class="container page-hero__inner">
        <div class="breadcrumbs"><a href="index.html">Главная</a><span class="sep">/</span><span>Новости</span></div>
        <div class="hero-grid">
          <div>
            <span class="kicker">Информационный центр</span>
            <h1 class="page-title">Новости</h1>
            <p class="page-lead">Актуальные изменения в работе сети и сервисов</p>
          </div>
          <label class="search-field" data-news-controls hidden><span class="sr-only">Поиск по новостям</span><input type="search" placeholder="Поиск по новостям" data-news-search aria-controls="news-list" autocomplete="off"></label>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="news-toolbar" data-news-controls hidden>
          <div class="filter-tabs" role="group" aria-label="Фильтр по году">
            <button class="filter-btn is-active" type="button" data-news-filter="all" aria-pressed="true">Все новости</button>
            <button class="filter-btn" type="button" data-news-filter="2024" aria-pressed="false">2024</button>
            <button class="filter-btn" type="button" data-news-filter="2023" aria-pressed="false">2023</button>
            <button class="filter-btn" type="button" data-news-filter="2021" aria-pressed="false">2021</button>
          </div>
          <span class="news-count" data-news-count role="status" aria-live="polite">6 публикаций</span>
        </div>
        <div class="news-list" id="news-list"><article class="news-card" tabindex="-1" data-news-year="2024"><div class="news-date">17 мая 2024</div><div><h3>Изменение списка АЗС, обслуживающих топливные карты</h3><p>С 17 мая 2024 года на неопределённый срок приостанавливается обслуживание по картам СНК и Партнёров на ряде АЗС Томска и Томской области.</p></div><a class="arrow-link" href="https://zao.sncard.ru/news" aria-label="Читать на официальном сайте: 17 мая 2024">Подробнее ↗</a></article>
<article class="news-card" tabindex="-1" data-news-year="2024"><div class="news-date">26 января 2024</div><div><h3>Изменение списка АЗС, обслуживающих топливные карты</h3><p>Прекращено обслуживание по топливным картам СНК и Партнёров на АЗС ООО «СТД» в посёлке Кандинка.</p></div><a class="arrow-link" href="https://zao.sncard.ru/news" aria-label="Читать на официальном сайте: 26 января 2024">Подробнее ↗</a></article>
<article class="news-card" tabindex="-1" data-news-year="2023"><div class="news-date">26 сентября 2023</div><div><h3>Изменение списка АЗС, обслуживающих топливные карты</h3><p>Приостановлено обслуживание топливных карт на АЗС в селе Малиновка Томского района.</p></div><a class="arrow-link" href="https://zao.sncard.ru/news" aria-label="Читать на официальном сайте: 26 сентября 2023">Подробнее ↗</a></article>
<article class="news-card" tabindex="-1" data-news-year="2023"><div class="news-date">28 августа 2023</div><div><h3>Изменения настроек безопасности паролей личных кабинетов СНК</h3><p>Для пользователей личных кабинетов включается проверка безопасности пароля с запросом на смену пароля при несоответствии требованиям.</p></div><a class="arrow-link" href="https://zao.sncard.ru/news" aria-label="Читать на официальном сайте: 28 августа 2023">Подробнее ↗</a></article>
<article class="news-card" tabindex="-1" data-news-year="2023"><div class="news-date">08 августа 2023</div><div><h3>Изменение списка АЗС, обслуживающих топливные карты</h3><p>Временно прекращается обслуживание карт на АЗС №3 ООО «СеверНефтеПродукт» в Колпашево.</p></div><a class="arrow-link" href="https://zao.sncard.ru/news" aria-label="Читать на официальном сайте: 08 августа 2023">Подробнее ↗</a></article>
<article class="news-card" tabindex="-1" data-news-year="2021"><div class="news-date">15 октября 2021</div><div><h3>Изменение списка АЗС, обслуживающих топливные карты</h3><p>Прекращается обслуживание карт СНК и Партнёров на АЗС №8 ООО «СеверНефтеПродукт» в посёлке Комсомольск.</p></div><a class="arrow-link" href="https://zao.sncard.ru/news?start=5" aria-label="Читать на официальном сайте: 15 октября 2021">Подробнее ↗</a></article>        </div>
        <div class="empty-state panel" data-news-empty hidden><h2>Ничего не найдено</h2><p>Попробуйте другое слово или выберите все годы.</p><button class="btn btn--ghost" type="button" data-news-reset>Сбросить поиск и фильтры</button></div>
        <nav class="pagination" data-pagination aria-label="Страницы новостей" hidden></nav>
      </div>
    </section>
  </main>

  <footer class="site-footer" data-site-footer><div class="container footer-bottom"><span>© АО «НПФ «Сибнефтекарт»</span><a href="contacts.html">Контакты</a></div></footer>
  <script src="assets/layout.js"></script>
  <script src="assets/app.js"></script>
</body>
</html>



~~~~

## contacts.html

~~~~html
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Контакты АО НПФ Сибнефтекарт — отдел по работе с клиентами, администрация и адрес офиса в Томске." />
  <title>Контакты — Сибнефтекарт</title>
  <link rel="stylesheet" href="assets/styles.css" />
</head>
<body data-page="contacts">
  <a class="skip-link" href="#main">Перейти к содержимому</a>
  <header class="site-header" data-site-header>
    <nav class="container fallback-nav" aria-label="Основная навигация"><a href="index.html">Сибнефтекарт</a><a href="news.html">Новости</a><a href="company-history.html">О компании</a><a href="contacts.html">Контакты</a><a href="https://cloud.sncard.ru/">Личный кабинет</a></nav>
  </header>

  <main id="main" tabindex="-1">
    <section class="page-hero">
      <div class="container page-hero__inner">
        <div class="breadcrumbs"><a href="index.html">Главная</a><span class="sep">/</span><span>Контакты</span></div>
        <div class="hero-grid">
          <div><span class="kicker">Связаться с нами</span><h1 class="page-title">Контакты</h1><p class="page-lead">Специалисты по работе с клиентами, администрация и контактная информация офиса «Сибнефтекарт» в Томске.</p></div>
          <aside class="hero-note"><strong>65-10-70</strong><span>многоканальный номер в коде Томска +7 (3822)</span></aside>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container contact-layout">
        <div class="contact-main">
          <section class="panel contact-section" id="manager">
            <span class="kicker">Клиентский сервис</span>
            <h2>Отдел по работе с клиентами</h2>
            <p class="subcopy">По вопросам обслуживания, договоров и взаимодействия с сервисами компании.</p>
            <div class="people-grid">
              <article class="person-card" data-initials="ЕР"><div class="person-role">Специалист по работе с клиентами</div><div class="person-name">Растрыгина<br>Елена Сергеевна</div><div class="person-contact"><a href="tel:+73822651070">+7 (3822) 65-10-70</a><span>Обращения по электронной почте: <a href="mailto:zao.sncard@sncard.ru">zao.sncard@sncard.ru</a></span></div></article>
              <article class="person-card" data-initials="ЕХ"><div class="person-role">Специалист по работе с клиентами</div><div class="person-name">Хугаева<br>Елена Станиславовна</div><div class="person-contact"><a href="tel:+73822651070">+7 (3822) 65-10-70</a><span>Обращения по электронной почте: <a href="mailto:zao.sncard@sncard.ru">zao.sncard@sncard.ru</a></span></div></article>
            </div>
          </section>

          <section class="panel contact-section" id="administration">
            <span class="kicker">Руководство</span>
            <h2>Администрация</h2>
            <p class="subcopy">Руководство компании и бухгалтерия.</p>
            <div class="people-grid">
              <article class="person-card" data-initials="ЛМ"><div class="person-role">Генеральный директор</div><div class="person-name">Матусевич<br>Леонид Робертович</div><div class="person-contact"><a href="tel:+73822651070">+7 (3822) 65-10-70</a><span>АО «НПФ «Сибнефтекарт»</span></div></article>
              <article class="person-card" data-initials="ЕБ"><div class="person-role">Главный бухгалтер</div><div class="person-name">Белоусова<br>Елена Игоревна</div><div class="person-contact"><a href="tel:+73822651070">+7 (3822) 65-10-70</a><span>АО «НПФ «Сибнефтекарт»</span></div></article>
            </div>
            <div class="legal-note">Обработка персональных данных для распространения осуществляется на основании отдельного согласия указанных сотрудников в соответствии с требованиями статьи 10.1 Федерального закона № 152-ФЗ.</div>
          </section>
        </div>

        <aside class="contact-side">
          <section class="panel office-card">
            <h3>Офис в Томске</h3>
            <div class="info-row"><div class="info-icon">⌖</div><div><strong>Адрес</strong><span>634009, г. Томск,<br>ул. Розы Люксембург, 55</span></div></div>
            <div class="info-row"><div class="info-icon">☎</div><div><strong>Телефон</strong><a href="tel:+73822651070">+7 (3822) 65-10-70</a></div></div>
            <div class="info-row"><div class="info-icon">@</div><div><strong>Общая почта</strong><a href="mailto:zao.sncard@sncard.ru">zao.sncard@sncard.ru</a></div></div>
          </section>

          <section class="panel map-card" id="map">
            <div class="map-pin" aria-hidden="true"></div>
            <div><span class="kicker">Местоположение</span><h3>Розы Люксембург, 55</h3><p>Откройте карточку организации в 2ГИС для построения маршрута.</p><a class="btn btn--ghost" href="https://2gis.ru/tomsk/search/%D0%A1%D0%B8%D0%B1%D0%BD%D0%B5%D1%84%D1%82%D0%B5%D0%BA%D0%B0%D1%80%D1%82" target="_blank" rel="noreferrer">Открыть карту ↗</a></div>
          </section>
        </aside>
      </div>
    </section>
  </main>

  <footer class="site-footer" data-site-footer><div class="container footer-bottom"><span>© АО «НПФ «Сибнефтекарт»</span><a href="contacts.html">Контакты</a></div></footer>
  <script src="assets/layout.js"></script>
  <script src="assets/app.js"></script>
</body>
</html>



~~~~

## company-history.html

~~~~html
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="История АО НПФ Сибнефтекарт — развитие технологий автоматизации АЗС и процессинга топливных карт." />
  <title>История компании — Сибнефтекарт</title>
  <link rel="stylesheet" href="assets/styles.css" />
</head>
<body data-page="company-history">
  <a class="skip-link" href="#main">Перейти к содержимому</a>
  <header class="site-header" data-site-header>
    <nav class="container fallback-nav" aria-label="Основная навигация"><a href="index.html">Сибнефтекарт</a><a href="news.html">Новости</a><a href="company-history.html">О компании</a><a href="contacts.html">Контакты</a><a href="https://cloud.sncard.ru/">Личный кабинет</a></nav>
  </header>

  <main id="main" tabindex="-1">
    <section class="page-hero">
      <div class="container page-hero__inner">
        <div class="breadcrumbs"><a href="index.html">Главная</a><span class="sep">/</span><a href="company-history.html">О компании</a><span class="sep">/</span><span>История</span></div>
        <div class="hero-grid">
          <div><span class="kicker">О компании</span><h1 class="page-title">История Сибнефтекарт</h1><p class="page-lead">От научно-исследовательской лаборатории автоматизации в Томске до специализированного процессинга топливных, дисконтных и бонусных карт.</p></div>
          <aside class="hero-note"><strong>с 1993</strong><span>АО «НПФ «Сибнефтекарт» работает на российском рынке</span></aside>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="company-intro">
          <article class="panel company-copy">
            <span class="kicker">Истоки</span>
            <h2>Инженерная школа, выросшая в продуктовую компанию</h2>
            <p>Компания была создана на базе отдела оптимальных и адаптивных систем управления НИИ автоматики и электромеханики. Основой стала практическая разработка систем автоматизации для предприятий нефтепродуктообеспечения.</p>
            <p>Связь с научной и учебной работой института сохранялась и после создания компании. В разные периоды «Сибнефтекарт» сотрудничала с крупными участниками нефтегазового сектора.</p>
          </article>
          <aside class="panel company-stat" aria-label="Ключевые факты">
            <div class="stat-tile stat-tile--brand"><span class="stat-value">30+</span><span class="stat-label">лет продуктовой и процессинговой экспертизы</span></div>
            <div class="stat-tile"><span class="stat-value">1987</span><span class="stat-label">первая опытная система безналичных расчётов АЗС в Томске</span></div>
            <div class="stat-tile"><span class="stat-value">1993</span><span class="stat-label">создание ЗАО НПФ «Сибнефтекарт»</span></div>
            <div class="stat-tile"><span class="stat-value">2019</span><span class="stat-label">завершение этапа реорганизации и специализация на процессинге</span></div>
          </aside>
        </div>

        <section class="panel timeline-wrap" id="history">
          <div class="section-head"><div><span class="kicker">Хронология</span><h2>Ключевые этапы</h2></div><p>От первых систем автоматизации АЗС до процессинга топливных карт.</p></div>
          <div class="timeline">
            <div class="timeline-item"><div class="timeline-year">1985</div><div class="timeline-body">Создание научно-исследовательской лаборатории автоматизации технологических процессов на предприятиях нефтепродуктообеспечения в НИИ автоматики и электромеханики при ТУСУРе.</div></div>
            <div class="timeline-item"><div class="timeline-year">1987</div><div class="timeline-body">Ввод в опытную эксплуатацию первой автоматизированной системы безналичных расчётов на АЗС в Томске с магнитными картами и карт-ридером собственной разработки.</div></div>
            <div class="timeline-item is-major"><div class="timeline-year">1993</div><div class="timeline-body"><strong>Создание ЗАО НПФ «Сибнефтекарт».</strong> Начало широкомасштабного внедрения АСБР АЗС в Томске, Красноярске и Кемерово.</div></div>
            <div class="timeline-item"><div class="timeline-year">1994</div><div class="timeline-body">Новый ридер магнитных карт, переход к микропроцессорной архитектуре системы на АЗС, ПО операционного центра и новые внедрения в городах Сибири.</div></div>
            <div class="timeline-item"><div class="timeline-year">1995</div><div class="timeline-body">Ввод ридера для электронных карт Touch Memory и сетевого варианта операционного центра. Внедрения в Новосибирске, Бийске, Барнауле и Омске.</div></div>
            <div class="timeline-item"><div class="timeline-year">1996</div><div class="timeline-body">Открытие транзитных линий между Томском, Новосибирском, Новокузнецком, Барнаулом, Бийском и Кемеровом. Развитие ПО и технологии работы с физическими лицами.</div></div>
            <div class="timeline-item"><div class="timeline-year">1997–98</div><div class="timeline-body">Разработка терминалов, систем доступа по электронным картам, программ для ассоциаций предприятий, терминала SCAT и коммуникационного ПО.</div></div>
            <div class="timeline-item"><div class="timeline-year">1999</div><div class="timeline-body">Развитие ПО для продавцов нефтепродуктов и анализа процессинговой деятельности, сертификация АСБР АЗС, интеграция новых типов оборудования.</div></div>
            <div class="timeline-item is-major"><div class="timeline-year">2007</div><div class="timeline-body"><strong>Переход к новой программной платформе.</strong> Начало поставок версии автоматизации АЗС на Windows XP и СУБД MySQL.</div></div>
            <div class="timeline-item"><div class="timeline-year">2008</div><div class="timeline-body">Начало поставок программного комплекса «Сибнефтекарт-Офис» для продавцов нефтепродуктов.</div></div>
            <div class="timeline-item"><div class="timeline-year">2009</div><div class="timeline-body">Начало поставок программного комплекса «Сибнефтекарт-Online».</div></div>
            <div class="timeline-item"><div class="timeline-year">2013</div><div class="timeline-body">Система управления «СНК — АЗС» сертифицирована на соответствие нормативным требованиям России и стран Таможенного союза.</div></div>
            <div class="timeline-item"><div class="timeline-year">2015</div><div class="timeline-body">Получен сертификат на интеграцию технологии расчётов по банковским картам Arcus 2 CAP.</div></div>
            <div class="timeline-item is-major"><div class="timeline-year">2017–19</div><div class="timeline-body"><strong>Реорганизация компании.</strong> Специализация в области процессинга топливных, дисконтных и бонусных карт на АЗС.</div></div>
          </div>
        </section>
      </div>
    </section>
  </main>

  <footer class="site-footer" data-site-footer><div class="container footer-bottom"><span>© АО «НПФ «Сибнефтекарт»</span><a href="contacts.html">Контакты</a></div></footer>
  <script src="assets/layout.js"></script>
  <script src="assets/app.js"></script>
</body>
</html>



~~~~

## assets/layout.js

~~~~javascript
(() => {
  const page = document.body.dataset.page;
  const links = [['news', 'Новости'], ['company-history', 'О компании'], ['contacts', 'Контакты']];
  const header = document.querySelector('[data-site-header]');
  if (header) header.innerHTML = `<div class="container header-row">
    <a class="brand" href="index.html" aria-label="Сибнефтекарт — главная"><span class="brand-mark" aria-hidden="true">СНК</span><span class="brand-copy"><strong>Сибнефтекарт</strong></span></a>
    <nav class="nav" id="site-nav" aria-label="Основная навигация">
      ${links.map(([id, title]) => `<a href="${id}.html" ${id === page ? 'class="is-active" aria-current="page"' : ''}>${title}</a>`).join('')}
      <a href="https://zao.sncard.ru/karta-azs">Сеть АЗС ↗</a>
    </nav>
    <div class="header-actions"><a class="btn btn--ghost" href="https://cloud.sncard.ru/">Личный кабинет</a>
    <button class="mobile-toggle" type="button" aria-label="Открыть меню" aria-controls="site-nav" aria-expanded="false" data-menu-toggle><span></span></button></div>
  </div>`;
  const footer = document.querySelector('[data-site-footer]');
  if (footer) footer.innerHTML = `<div class="container footer-main">
    <div class="footer-col"><h2>Сибнефтекарт</h2><address class="footer-links"><span>634009, г. Томск, ул. Розы Люксембург, д. 55</span><a href="tel:+73822651070">+7 (3822) 65-10-70</a><a href="mailto:zao.sncard@sncard.ru">zao.sncard@sncard.ru</a></address></div>
    <div class="footer-col"><h2>Информация</h2><div class="footer-links"><a href="company-history.html">О компании</a><a href="contacts.html">Контакты</a><a href="https://zao.sncard.ru/privacy-policy">Политика конфиденциальности</a><a href="https://zao.sncard.ru/cookie-policy">Политика использования Cookies</a></div></div>
    <div class="subscribe-panel"><h2>Подписка на новости</h2><p>Новости компании на вашу почту</p><a class="btn btn--primary" href="https://zao.sncard.ru/contacts">Перейти к подписке ↗</a><small>Оформление на официальном сайте</small></div>
  </div><div class="container footer-bottom"><span>© АО «НПФ «Сибнефтекарт»</span><a href="news.html">Новости компании</a></div>`;
})();

~~~~

## assets/app.js

~~~~javascript
(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('#site-nav');
  const setMenu = open => {
    document.body.classList.toggle('menu-open', open);
    toggle?.setAttribute('aria-expanded', String(open));
    toggle?.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  };
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav?.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setMenu(false);
      toggle.focus();
    }
  });
  for (const type of ['click', 'focusin']) document.addEventListener(type, event => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  matchMedia('(min-width: 981px)').addEventListener('change', () => setMenu(false));

  const cards = [...document.querySelectorAll('[data-news-year]')];
  if (!cards.length) return;
  const search = document.querySelector('[data-news-search]');
  const filters = [...document.querySelectorAll('[data-news-filter]')];
  const pagination = document.querySelector('[data-pagination]');
  const count = document.querySelector('[data-news-count]');
  const empty = document.querySelector('[data-news-empty]');
  const pageSize = 4;
  let year = 'all';
  let page = 1;
  const normalize = text => text.toLocaleLowerCase('ru').replaceAll('ё', 'е').trim();
  const publicationLabel = n => n % 10 === 1 && n % 100 !== 11 ? 'публикация' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'публикации' : 'публикаций';
  function render() {
    const query = normalize(search.value);
    const matches = cards.filter(card => (year === 'all' || card.dataset.newsYear === year) && normalize(card.textContent).includes(query));
    const pages = Math.ceil(matches.length / pageSize);
    page = Math.max(1, Math.min(page, pages));
    cards.forEach(card => { card.hidden = true; });
    matches.slice((page - 1) * pageSize, page * pageSize).forEach(card => { card.hidden = false; });
    filters.forEach(button => {
      const active = button.dataset.newsFilter === year;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    count.textContent = `${matches.length} ${publicationLabel(matches.length)}`;
    empty.hidden = matches.length !== 0;
    pagination.hidden = pages <= 1;
    pagination.replaceChildren();
    if (pages <= 1) return;
    const label = document.createElement('span');
    label.className = 'pagination-label';
    label.textContent = `Страница ${page} из ${pages}`;
    pagination.append(label);
    function addButton(text, target, disabled = false) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'page-chip';
      button.textContent = text;
      button.disabled = disabled;
      if (target === page && /^\d+$/.test(text)) {
        button.classList.add('is-current');
        button.setAttribute('aria-current', 'page');
      }
      button.addEventListener('click', () => {
        page = target;
        render();
        const first = matches[(page - 1) * pageSize];
        first.focus({ preventScroll: true });
        first.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      });
      pagination.append(button);
    }
    addButton('Назад', page - 1, page === 1);
    for (let i = 1; i <= pages; i++) addButton(String(i), i);
    addButton('Вперёд', page + 1, page === pages);
  }
  filters.forEach(button => button.addEventListener('click', () => { year = button.dataset.newsFilter; page = 1; render(); }));
  search.addEventListener('input', () => { page = 1; render(); });
  document.querySelector('[data-news-reset]').addEventListener('click', () => {
    search.value = ''; year = 'all'; page = 1; render(); search.focus();
  });
  document.querySelectorAll('[data-news-controls]').forEach(control => { control.hidden = false; });
  render();
})();


~~~~

## assets/styles.css

~~~~css
:root {
  --brand: #bf0706;
  --brand-dark: #960504;
  --brand-soft: #fff0ef;
  --gold: #e8b850;
  --ink: #23262c;
  --ink-2: #424750;
  --muted: #626975;
  --surface: #fff;
  --page: #f5f5f5;
  --line: #e2e2e2;
  --line-strong: #b9bec5;
  --footer: #23262c;
  --success: #267044;
  --warning: #80601c;
  --error: #bf0706;
  --radius-sm: 6px;
  --radius-control: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --text-sm: 12px;
  --text-body: 14px;
  --text-lg: 16px;
  --shadow: 0 4px 16px rgb(35 38 44 / 4%);
  --shadow-hover: 0 6px 20px rgb(35 38 44 / 7%);
  --duration: 180ms;
  --container: 1180px;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 104px; }
body { margin: 0; color: var(--ink); background: var(--page); font: 400 var(--text-body)/1.6 Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Arial, sans-serif; -webkit-font-smoothing: antialiased; }
body.menu-open { overflow: hidden; }
[hidden] { display: none !important; }
a { color: inherit; text-decoration: none; }
button, input { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }
button { cursor: pointer; }
a, button, input { transition: color var(--duration) ease-out, background var(--duration) ease-out, border-color var(--duration) ease-out, box-shadow var(--duration) ease-out; }
a:hover { color: var(--brand); }
:focus-visible { outline: 3px solid var(--brand); outline-offset: 4px; }
button:disabled { opacity: .45; cursor: not-allowed; }
button:active:not(:disabled), .btn:active { filter: brightness(.94); }
img { display: block; max-width: 100%; }
h1, h2, h3, p { overflow-wrap: break-word; }
h1, h2, h3 { line-height: 1.3; font-weight: 600; letter-spacing: -.025em; }
.container { width: min(calc(100% - 64px), var(--container)); margin-inline: auto; }
.section { padding: 0 0 var(--space-8); }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; border: 0; }
.skip-link { position: fixed; z-index: 100; top: 8px; left: 8px; transform: translateY(-200%); padding: 12px 20px; background: var(--surface); border: 1px solid var(--brand); border-radius: var(--radius-control); }
.skip-link:focus { transform: none; }
.site-header { position: sticky; top: 0; z-index: 50; background: var(--surface); border-bottom: 1px solid var(--line); }
.header-row { min-height: 80px; display: flex; align-items: center; gap: var(--space-6); }
.brand { display: inline-flex; align-items: center; gap: var(--space-3); flex-shrink: 0; }
.brand-mark { width: 40px; height: 40px; display: grid; place-items: center; border-radius: var(--radius-control); background: var(--brand); color: #fff; font-size: 12px; font-weight: 700; }
.brand-copy strong { color: var(--brand); font-size: 20px; font-weight: 600; }
.nav { display: flex; align-items: center; gap: var(--space-2); margin-left: auto; }
.nav a { padding: 12px 16px; min-height: 44px; border: 1px solid transparent; border-radius: var(--radius-control); color: var(--muted); font-size: 13px; }
.nav a:hover { background: var(--page); color: var(--ink); }
.nav a.is-active { background: var(--brand-soft); color: var(--brand); border-color: #f3cfce; font-weight: 600; }
.header-actions { display: flex; align-items: center; gap: var(--space-2); }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; padding: 10px 20px; border: 1px solid transparent; border-radius: var(--radius-control); font-size: 13px; font-weight: 600; }
.btn--primary { background: var(--brand); color: #fff; }
.btn--primary:hover { background: var(--brand-dark); color: #fff; }
.btn--ghost { background: var(--surface); border-color: var(--line); color: var(--brand); }
.btn--ghost:hover { border-color: #deb8b7; background: var(--brand-soft); }
.mobile-toggle { display: none; width: 44px; height: 44px; border: 1px solid var(--line); border-radius: var(--radius-control); background: var(--surface); place-items: center; }
.mobile-toggle span, .mobile-toggle span::before, .mobile-toggle span::after { display: block; width: 18px; height: 2px; background: var(--ink); position: relative; content: ""; }
.mobile-toggle span::before { position: absolute; top: -6px; }
.mobile-toggle span::after { position: absolute; top: 6px; }
.menu-open .mobile-toggle span { background: transparent; }
.menu-open .mobile-toggle span::before { top: 0; transform: rotate(45deg); }
.menu-open .mobile-toggle span::after { top: 0; transform: rotate(-45deg); }
.fallback-nav { display: flex; flex-wrap: wrap; gap: 24px; padding-block: 20px; }
.page-hero__inner { padding: 40px 0 32px; }
.breadcrumbs { display: flex; flex-wrap: wrap; gap: 8px; color: var(--muted); font-size: 12px; margin-bottom: 24px; }
.breadcrumbs a { text-decoration: underline; text-underline-offset: 3px; }
.breadcrumbs .sep { color: var(--line-strong); }
.hero-grid { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 48px; align-items: center; }
.page-title { margin: 0 0 8px; font-size: clamp(28px, 3vw, 36px); }
.page-lead { margin: 0; max-width: 730px; color: var(--muted); font-size: 14px; }
.page-hero .kicker { display: none; }
.hero-note { border-left: 2px solid var(--brand); padding-left: 24px; }
.hero-note strong { display: block; color: var(--brand); font-size: 28px; font-weight: 600; }
.hero-note span { color: var(--muted); font-size: 12px; }
body[data-page="news"] .breadcrumbs { display: none; }
body[data-page="news"] .page-hero__inner { padding-top: 48px; }
.search-field { display: block; }
input { width: 100%; min-height: 44px; padding: 10px 16px; color: var(--ink); background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-control); }
input::placeholder { color: var(--muted); }
input:hover { border-color: var(--line-strong); }
input:focus { border-color: var(--brand); }
input[aria-invalid="true"] { border-color: var(--error); }
input:disabled { background: var(--page); cursor: not-allowed; }
.panel { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); }
.kicker { color: var(--brand); font-size: 12px; font-weight: 500; }
.section-head { display: flex; align-items: end; justify-content: space-between; gap: 32px; margin-bottom: 32px; }
.section-head h2 { margin: 8px 0 0; font-size: 24px; }
.section-head p { max-width: 380px; margin: 0; color: var(--muted); }
.news-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 20px; }
.filter-tabs { display: flex; flex-wrap: wrap; gap: 8px; }
.filter-btn { min-height: 44px; padding: 8px 16px; border: 1px solid var(--line); border-radius: var(--radius-control); color: var(--muted); background: var(--surface); }
.filter-btn:hover { color: var(--brand); border-color: #deb8b7; }
.filter-btn.is-active { color: var(--brand); background: var(--brand-soft); border-color: #f3cfce; font-weight: 600; }
.news-count { font-size: 12px; color: var(--muted); }
.news-list { display: grid; gap: 16px; }
.news-card { position: relative; display: grid; gap: 8px; padding: 20px 24px 12px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-md); overflow: hidden; transition: border-color var(--duration) ease-out, box-shadow var(--duration) ease-out; }
.news-card::before { content: ""; position: absolute; inset: 0 auto 0 0; width: 6px; background: var(--brand); }
.news-card:hover, .news-card:focus-within { border-color: #d2d4d8; box-shadow: var(--shadow-hover); }
.news-date { color: var(--muted); font-size: 11px; text-transform: uppercase; }
.news-card h3 { margin: 0 0 8px; font-size: 18px; }
.news-card p { margin: 0; color: var(--muted); font-size: 13px; }
.arrow-link { justify-self: end; display: inline-flex; align-items: center; min-height: 44px; padding: 8px 0 8px 16px; font-size: 12px; font-weight: 600; color: var(--brand); }
.arrow-link:hover { text-decoration: underline; text-underline-offset: 4px; }
.pagination { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 32px; }
.pagination-label { flex-basis: 100%; color: var(--muted); font-size: 12px; margin-bottom: 4px; }
.page-chip { min-width: 44px; min-height: 44px; padding: 8px 12px; border-radius: var(--radius-control); border: 1px solid var(--line); color: var(--ink-2); background: var(--surface); }
.page-chip:hover:not(:disabled) { border-color: var(--brand); color: var(--brand); }
.page-chip.is-current, .page-chip.is-current:hover { color: #fff; background: var(--brand); border-color: var(--brand); }
.empty-state { padding: 48px 24px; text-align: center; }
.empty-state h2 { margin-top: 0; }
.empty-state p { color: var(--muted); margin-bottom: 24px; }
.company-intro { display: grid; grid-template-columns: 1.1fr .9fr; gap: 24px; margin-bottom: 32px; }
.company-copy { padding: 32px; }
.company-copy h2 { font-size: 28px; margin: 12px 0 24px; }
.company-copy p { color: var(--muted); margin: 0 0 16px; }
.company-copy p:last-child { margin-bottom: 0; }
.company-stat { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; padding: 32px; }
.stat-tile { display: flex; flex-direction: column; justify-content: center; padding: 8px 0; }
.stat-value { font-size: 36px; color: var(--brand); line-height: 1.2; font-weight: 600; letter-spacing: -.04em; }
.stat-label { font-size: 12px; color: var(--muted); margin-top: 8px; }
.timeline-wrap { padding: 32px; }
.timeline { position: relative; }
.timeline::before { content: ""; position: absolute; top: 8px; bottom: 12px; left: 112px; width: 1px; background: var(--line); }
.timeline-item { display: grid; grid-template-columns: 88px 1fr; gap: 48px; padding-bottom: 32px; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-year { color: var(--brand); font-size: 16px; text-align: right; font-weight: 600; }
.timeline-body { position: relative; color: var(--ink-2); }
.timeline-body::before { content: ""; position: absolute; top: 8px; left: -28px; width: 9px; height: 9px; border: 2px solid var(--brand); border-radius: 50%; background: var(--surface); }
.timeline-body strong { color: var(--ink); font-weight: 600; }
.contact-layout { display: grid; grid-template-columns: minmax(0, 1fr) 320px; align-items: start; gap: 24px; }
.contact-main, .contact-side { display: grid; gap: 24px; min-width: 0; }
.contact-section { padding: 32px; }
.contact-section h2 { font-size: 24px; margin: 8px 0; }
.subcopy { margin: 0 0 24px; color: var(--muted); }
.people-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
.person-card { padding-top: 24px; border-top: 1px solid var(--line); min-width: 0; }
.person-role { color: var(--muted); font-size: 12px; }
.person-name { font-size: 20px; font-weight: 600; line-height: 1.4; margin: 12px 0 20px; }
.person-contact { display: grid; gap: 8px; color: var(--muted); font-size: 13px; overflow-wrap: anywhere; }
.person-contact > a { color: var(--brand); }
.person-contact a:hover { text-decoration: underline; }
.office-card, .map-card { padding: 24px; }
.office-card h3, .map-card h3 { font-size: 20px; margin: 0 0 24px; }
.info-row { display: grid; grid-template-columns: 32px minmax(0, 1fr); gap: 12px; padding: 16px 0; border-top: 1px solid var(--line); }
.info-icon { color: var(--brand); font-size: 20px; }
.info-row strong { display: block; font-weight: 500; margin-bottom: 4px; }
.info-row span, .info-row a { display: block; font-size: 13px; color: var(--muted); overflow-wrap: anywhere; }
.info-row a:hover { color: var(--brand); }
.map-card { border-top: 3px solid var(--brand); }
.map-card .kicker { display: block; margin-bottom: 8px; }
.map-card h3 { margin-bottom: 12px; }
.map-card p { color: var(--muted); margin: 0 0 24px; }
.map-pin { display: none; }
.legal-note { margin-top: 24px; padding: 16px; border-left: 3px solid var(--gold); background: #fffbf2; color: #706044; border-radius: var(--radius-sm); font-size: 12px; }
.site-footer { background: var(--footer); color: #fff; }
.footer-main { display: grid; grid-template-columns: 1.1fr 1fr 1fr; gap: 48px; padding: 32px 0; }
.footer-col h2, .subscribe-panel h2 { margin: 0 0 16px; font-size: 16px; font-weight: 500; letter-spacing: 0; }
.footer-links { display: grid; gap: 8px; color: #c2c5ca; font-size: 12px; font-style: normal; }
.site-footer a:hover { color: #fff; text-decoration: underline; text-underline-offset: 3px; }
.site-footer :focus-visible { outline-color: var(--gold); }
.subscribe-panel { background: #2d3036; border: 1px solid #3c3f45; border-radius: var(--radius-lg); padding: 20px; }
.subscribe-panel h2 { margin-bottom: 4px; }
.subscribe-panel p { margin: 0 0 16px; font-size: 12px; color: #c2c5ca; }
.subscribe-panel .btn { width: 100%; }
.subscribe-panel small { display: block; margin-top: 8px; color: #c2c5ca; font-size: 11px; }
.footer-bottom { display: flex; justify-content: space-between; gap: 24px; padding-block: 24px; color: #b3b7bf; font-size: 11px; }
@media (max-width: 1100px) {
  .header-row { gap: 16px; }
  .nav { gap: 0; }
  .nav a { padding-inline: 12px; }
  .contact-layout { grid-template-columns: minmax(0, 1fr) 280px; }
  .contact-section { padding: 24px; }
  .people-grid { gap: 16px; }
}
@media (max-width: 980px) {
  .header-actions { margin-left: auto; }
  .mobile-toggle { display: grid; }
  .nav { position: absolute; top: 100%; left: 0; right: 0; display: none; margin: 0; padding: 16px 32px; background: var(--surface); border-bottom: 1px solid var(--line); box-shadow: var(--shadow-hover); max-height: calc(100dvh - 80px); overflow-y: auto; }
  .menu-open .nav { display: flex; flex-direction: column; align-items: stretch; }
  .hero-grid { grid-template-columns: minmax(0, 1fr) 260px; gap: 24px; }
  .company-intro, .contact-layout { grid-template-columns: 1fr; }
  .contact-side { grid-template-columns: 1fr 1fr; }
  .footer-main { gap: 24px; }
}
@media (max-width: 640px) {
  .container { width: calc(100% - 32px); }
  .header-row { min-height: 72px; gap: 8px; }
  .brand { gap: 8px; }
  .brand-mark { width: 32px; height: 32px; font-size: 10px; }
  .brand-copy strong { font-size: 16px; }
  .header-actions .btn { padding: 8px; font-size: 11px; max-width: 88px; text-align: center; }
  .nav { padding: 16px; }
  .page-hero__inner, body[data-page="news"] .page-hero__inner { padding: 32px 0 24px; }
  .hero-grid { grid-template-columns: 1fr; gap: 24px; }
  .hero-note { padding-left: 16px; }
  .section { padding-bottom: 48px; }
  .news-toolbar { flex-wrap: wrap; }
  .filter-btn { padding-inline: 12px; }
  .news-card { padding: 16px 20px 8px; }
  .news-card h3 { font-size: 16px; }
  .section-head { flex-direction: column; align-items: start; gap: 16px; }
  .company-copy, .company-stat, .timeline-wrap, .contact-section { padding: 24px; }
  .company-copy h2 { font-size: 24px; }
  .people-grid, .contact-side { grid-template-columns: 1fr; }
  .timeline::before { left: 4px; }
  .timeline-item { grid-template-columns: 1fr; gap: 8px; padding-left: 28px; }
  .timeline-year { text-align: left; }
  .timeline-body::before { left: -28px; top: -25px; }
  .footer-main { grid-template-columns: 1fr; padding-block: 32px; gap: 32px; }
  .footer-bottom { flex-wrap: wrap; gap: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition: none !important; animation: none !important; }
}

~~~~

## README.md

~~~~markdown
# Сибнефтекарт — единый сайт-проект

Вход: index.html → news.html. Три страницы объединены общей навигацией,
шапкой, подвалом и системой компонентов, без сборщика и внешних JS-зависимостей.

## Структура

- news.html — шесть исходных публикаций, поиск, фильтры по годам, страницы по четыре записи.
- company-history.html — сведения о компании и все исходные этапы истории.
- contacts.html — сотрудники, телефон, общая почта и переход к карте.
- assets/layout.js — единая шапка и подвал; активная страница берётся из data-page.
- assets/styles.css — токены, компоненты и адаптивные стили.
- assets/app.js — мобильная навигация, поиск и пагинация.

HTML хранит содержимое страниц. Без JavaScript доступны все новости и резервная
навигация. Интерактивные фильтры показываются только после инициализации.
Внутренние ссылки относительные; проект допускает размещение в подпапке.

## Дизайн-аудит и решения

Сохранены исходные красный #BF0706, графит #23262C, золото #E8B850,
фон #F5F5F5 и границы #E2E2E2. Сохранены данные и основная структура страниц.

Устранены:
- Дублирование шапки и подвала: общая реализация в layout.js.
- Чрезмерные заголовки, декоративные градиенты и тяжёлые тени.
- Разные радиусы, размеры кнопок и несогласованные состояния.
- Служебные описания редизайна внутри пользовательского интерфейса.
- Декоративная пагинация: количество страниц соответствует фактическим данным.
- Скрытие содержимого до анимации появления.
- Недостаток клавиатурных состояний и некорректное состояние мобильного меню.

Новости оформлены по приложенному скриншоту: белая шапка, светлый фон,
вертикальные белые карточки с красной полосой, небольшой заголовок,
поиск справа, пагинация слева, графитовый подвал.

Радиусы: 6 / 8 / 12 / 16 px; основной контейнер 1180 px.
Отступы основаны на кратности 4 и 8 px. Кнопки не меньше 44 px.
Точки адаптации: 1100, 980, 640 px. На 1024 px навигация остаётся настольной.
Общие состояния: hover, active, focus-visible, disabled; фильтры имеют
aria-pressed, навигация и пагинация — aria-current. Есть пустой результат
с кнопкой сброса. Учитывается prefers-reduced-motion.
Мобильное меню закрывается по Escape, выбору ссылки, выходу фокуса,
клику вне шапки и переходу к настольной ширине.

## Источники и границы реализации

Основа — три исходных HTML-файла и приложенный скриншот.
Figma QxV5n33xm8xI8c0ADMD1hQ (узлы 2:2 и 0:1) недоступна через инструменты
этой сессии. Токены не объявляются экспортом из Figma. Сам Figma-файл
не изменялся; структура страниц и компонентов реализована в коде.

Ссылки на сеть АЗС, личный кабинет и архив новостей сохранены внешними.
Полных текстов новостей и индивидуальных URL в исходных файлах нет:
ссылки карточек ведут в официальный архив, как в исходном проекте.
Подписка ведёт к официальной странице с формой рассылки:
https://zao.sncard.ru/contacts — локальный обработчик рассылки отсутствует.
Индивидуальные адреса сотрудников не выдумываются; используется общая почта.

Контактная страница и внешние назначения сверены по доступным страницам
официального сайта. Локальные изменения рассмотрены статически.

~~~~


