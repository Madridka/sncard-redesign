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
