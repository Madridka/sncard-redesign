(() => {
  const page = document.body.dataset.page;
  const links = [
    ['news', 'Новости', 'news.html', 'news.svg'],
    ['company-history', 'О компании', 'company-history.html', 'company.svg'],
    ['shareholders', 'Акционерам', 'shareholders.html', 'shareholders.svg'],
    ['contacts', 'Контакты', 'contacts.html', 'contacts.svg'],
    ['stations', 'Сеть АЗС', 'stations.html', 'stations.svg'],
  ];
  const header = document.querySelector('[data-site-header]');
  if (header) header.innerHTML = `<div class="container header-row">
    <nav class="nav" id="site-nav" aria-label="Основная навигация">
      ${links.map(([id, title, href, icon]) => `<a href="${href}" ${id === page ? 'class="is-active" aria-current="page"' : ''}><img class="nav-icon" src="../assets/icons/${icon}" alt="" aria-hidden="true">${title}</a>`).join('')}
    </nav>
    <div class="header-actions"><a class="btn btn--ghost" href="https://cloud.sncard.ru/">Личный кабинет</a>
    <button class="mobile-toggle" type="button" aria-label="Открыть меню" aria-controls="site-nav" aria-expanded="false" data-menu-toggle><span></span></button></div>
  </div>`;
  const footer = document.querySelector('[data-site-footer]');
  if (footer) footer.innerHTML = `<div class="container footer-main">
    <div class="footer-col"><h2>Сибнефтекарт</h2><address class="footer-links"><span>634009, г. Томск, ул. Розы Люксембург, д. 55</span><a href="tel:+73822651070">+7 (3822) 65-10-70</a><a href="mailto:zao.sncard@sncard.ru">zao.sncard@sncard.ru</a></address></div>
    <div class="footer-col"><h2>Информация</h2><div class="footer-links"><a href="news.html">Новости</a><a href="company-history.html">О компании</a><a href="shareholders.html">Акционерам</a><a href="contacts.html">Контакты</a><a href="stations.html">Сеть АЗС</a><a href="https://zao.sncard.ru/privacy-policy">Политика конфиденциальности</a><a href="https://zao.sncard.ru/cookie-policy">Политика использования Cookies</a></div></div>
    <div class="subscribe-panel"><h2>Рассылка АО «НПФ «Сибнефтекарт»</h2><form data-subscribe-form>
      <label class="sr-only" for="subscribe-email">Адрес электронной почты</label>
      <input id="subscribe-email" name="email" type="email" placeholder="Введите адрес эл. почты" autocomplete="email" required>
      <label class="subscribe-consent"><input name="consent" type="checkbox" required><span>Соглашаюсь получать рекламно-информационные сообщения. <a href="https://zao.sncard.ru/agreement-newsletter" target="_blank" rel="noopener noreferrer">Условия рассылки</a></span></label>
      <div class="subscribe-actions"><button class="btn btn--primary" type="submit">Подписаться</button><button class="btn btn--subtle" type="reset">Отменить</button></div>
      <p class="subscribe-status" data-subscribe-status role="status" aria-live="polite"></p>
    </form></div>
  </div><div class="container footer-bottom"><span>© АО «НПФ «Сибнефтекарт»</span></div>`;
})();
