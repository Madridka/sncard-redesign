(() => {
  const page = document.body.dataset.page;
  const links = [
    ['home', 'Главная', 'index.html', 'home.svg'],
    ['news', 'Новости', 'news.html', 'news.svg'],
    ['software', 'Программное обеспечение', 'software.html', 'software.svg'],
    ['equipment', 'Оборудование', 'serviceSncard/index.html', 'equipment.svg'],
    ['cards', 'Обслуживание карт', 'zaoSncard/index.html', 'cards.svg'],
  ];
  const header = document.querySelector('[data-site-header]');
  if (header) header.innerHTML = `<div class="container header-row">
    <a class="brand" href="index.html" aria-label="SNCard — главная"><img class="brand-logo" src="zaoSncard/assets/logo2.png" alt="Сибнефтекарт" width="480" height="91"><span class="site-identity">SNCard</span></a>
    <nav class="nav" id="site-nav" aria-label="Основная навигация">
      ${links.map(([id, title, href, icon]) => `<a href="${href}" ${href.startsWith('serviceSncard/') || href.startsWith('zaoSncard/') ? 'target="_blank" rel="noopener noreferrer"' : ''} ${id === page ? 'class="is-active" aria-current="page"' : ''}><img class="nav-icon" src="assets/icons/${icon}" alt="">${title}${href.startsWith('serviceSncard/') || href.startsWith('zaoSncard/') ? '<img class="external-icon" src="assets/icons/external.svg" alt="" aria-hidden="true">' : ''}</a>`).join('')}
    </nav>
    <div class="header-actions"><button class="mobile-toggle" type="button" aria-label="Открыть меню" aria-controls="site-nav" aria-expanded="false" data-menu-toggle><span></span></button></div>
  </div>`;

  const footer = document.querySelector('[data-site-footer]');
  if (footer) footer.innerHTML = `<div class="container footer-main">
    <div class="footer-col"><h2>Сибнефтекарт</h2><address class="footer-links"><span>634009, г. Томск, ул. Розы Люксембург, д. 55</span><a href="tel:+73822651030">+7 (3822) 65-10-30</a><a href="mailto:sncard@sncard.ru">sncard@sncard.ru</a></address></div>
    <div class="footer-col"><h2>Разделы сайта</h2><div class="footer-links">${links.map(([, title, href]) => `<a href="${href}" ${href.startsWith('serviceSncard/') || href.startsWith('zaoSncard/') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${title}${href.startsWith('serviceSncard/') || href.startsWith('zaoSncard/') ? '<img class="external-icon" src="assets/icons/external.svg" alt="" aria-hidden="true">' : ''}</a>`).join('')}</div></div>
    <div class="footer-col"><h2>Поддержка</h2><div class="footer-links"><span>Вопросы по решениям и работе сервисов СНК</span><a href="mailto:sncard@sncard.ru">sncard@sncard.ru</a><a href="https://www.sncard.ru/" target="_blank" rel="noopener noreferrer">Официальный сайт ↗</a></div></div>
  </div><div class="container footer-bottom"><span>© ООО «Сибнефтекарт»</span><span>Томск · оборудование и программное обеспечение для АЗС</span></div>`;
  matchMedia('(min-width: 1181px)').addEventListener('change', event => {
    if (!event.matches) return;
    document.body.classList.remove('menu-open');
    const toggle = document.querySelector('[data-menu-toggle]');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Открыть меню');
  });
})();
