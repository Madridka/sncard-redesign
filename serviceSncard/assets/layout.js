(() => {
  const page = document.body.dataset.page;
  const links = [
    ["equipment", "Оборудование", "equipment.html", "equipment.svg"],
    ["cards", "Изготовление карт", "cards.html", "cards.svg"],
    ["contacts", "Контакты", "contacts.html", "home.svg"],
  ];
  const header = document.querySelector("[data-site-header]");
  if (header)
    header.innerHTML = `<div class="container header-row">
    <a class="brand" href="index.html" aria-label="Сервис — главная"><img class="brand-logo" src="../zaoSncard/assets/logo2.png" alt="Сибнефтекарт" width="480" height="91"></a>
    <nav class="nav" id="site-nav" aria-label="Навигация Сибнефтекарт-Сервис">${links.map(([id, title, href, icon]) => `<a href="${href}" ${id === page ? 'class="is-active" aria-current="page"' : ""}><img class="nav-icon" src="../assets/icons/${icon}" alt="">${title}</a>`).join("")}</nav>
    <div class="header-actions"><a class="btn btn--ghost" href="tel:+73822651145">+7 (3822) 65-11-45</a><button class="mobile-toggle" type="button" aria-label="Открыть меню" aria-controls="site-nav" aria-expanded="false" data-menu-toggle><span></span></button></div>
  </div>`;
  const footer = document.querySelector("[data-site-footer]");
  if (footer)
    footer.innerHTML = `<div class="container footer-main">
    <div class="footer-col"><h2>Сибнефтекарт-Сервис</h2><address class="footer-links"><span>634009, г. Томск, ул. Розы Люксембург, д. 55</span><a href="tel:+73822651145">+7 (3822) 65-11-45</a><a href="mailto:sncard-service@sncard.ru">sncard-service@sncard.ru</a></address></div>
    <div class="footer-col"><h2>Разделы</h2><div class="footer-links">${links.map(([, title, href]) => `<a href="${href}">${title}</a>`).join("")}</div></div>
    <div class="footer-col"><h2>О компании</h2><div class="footer-links"><span>Оборудование для АЗС и нефтебаз. Изготовление пластиковых карт.</span><a href="https://snc-service.sncard.ru/" target="_blank" rel="noopener noreferrer">Официальный сайт ↗</a></div></div>
  </div><div class="container footer-bottom"><span>© ООО «Сибнефтекарт-Сервис»</span><span>Томск</span></div>`;
})();
