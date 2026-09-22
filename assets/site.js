(() => {
  const page = document.body.dataset.page;
  const links = [
    ['news', 'Новости', 'news.html'],
    ['software', 'Программное обеспечение', 'software.html'],
    ['equipment', 'Оборудование', 'serviceSncard/index.html'],
    ['manufacturing', 'Изготовление карт', 'serviceSncard/cards.html'],
    ['cards', 'Обслуживание карт', 'zaoSncard/index.html'],
  ];
  const header = document.querySelector('[data-site-header]');
  if (header) header.innerHTML = `<div class="container header-row">
    <a class="brand" href="index.html" aria-label="Сибнефтекарт — главная"><img class="brand-logo" src="zaoSncard/assets/logo2.png" alt="Сибнефтекарт" width="480" height="91"></a>
    <nav class="nav" id="site-nav" aria-label="Основная навигация">
      ${links.map(([id, title, href]) => `<a href="${href}" ${href.startsWith('serviceSncard/') || href.startsWith('zaoSncard/') ? 'target="_blank" rel="noopener noreferrer"' : ''} ${id === page ? 'class="is-active" aria-current="page"' : ''}>${title}</a>`).join('')}
    </nav>
    <div class="header-actions"><a class="btn btn--ghost" href="tel:88002500534">8 800 250-05-34</a>
    <button class="mobile-toggle" type="button" aria-label="Открыть меню" aria-controls="site-nav" aria-expanded="false" data-menu-toggle><span></span></button></div>
  </div>`;

  const footer = document.querySelector('[data-site-footer]');
  if (footer) footer.innerHTML = `<div class="container footer-main">
    <div class="footer-col"><h2>Сибнефтекарт</h2><address class="footer-links"><span>634009, г. Томск, ул. Розы Люксембург, д. 55</span><a href="tel:+73822651030">+7 (3822) 65-10-30</a><a href="mailto:sncard@sncard.ru">sncard@sncard.ru</a></address></div>
    <div class="footer-col"><h2>Разделы сайта</h2><div class="footer-links"><a href="index.html">Главная</a>${links.map(([, title, href]) => `<a href="${href}" ${href.startsWith('serviceSncard/') || href.startsWith('zaoSncard/') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${title}</a>`).join('')}</div></div>
    <div class="footer-col"><h2>Поддержка</h2><div class="footer-links"><span>Круглосуточная техническая поддержка по СНК-АЗС</span><a href="tel:88002500534">8 800 250-05-34</a><a href="https://www.sncard.ru/" target="_blank" rel="noopener noreferrer">Официальный сайт ↗</a></div></div>
  </div><div class="container footer-bottom"><span>© ООО «Сибнефтекарт»</span><span>Томск · оборудование и программное обеспечение для АЗС</span></div>`;
})();
