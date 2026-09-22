(() => {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("#site-nav");
  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    toggle?.setAttribute("aria-expanded", String(open));
    toggle?.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  };
  toggle?.addEventListener("click", () =>
    setMenu(toggle.getAttribute("aria-expanded") !== "true"),
  );
  nav?.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      document.body.classList.contains("menu-open")
    ) {
      setMenu(false);
      toggle.focus();
    }
  });
  for (const type of ["click", "focusin"])
    document.addEventListener(type, (event) => {
      if (!event.target.closest(".site-header")) setMenu(false);
    });
  matchMedia("(min-width: 981px)").addEventListener("change", () =>
    setMenu(false),
  );

  const subscribeForm = document.querySelector("[data-subscribe-form]");
  if (subscribeForm) {
    const status = subscribeForm.querySelector("[data-subscribe-status]");
    subscribeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!subscribeForm.reportValidity()) return;
      const email = subscribeForm.elements.email.value.trim();
      const subject = encodeURIComponent(
        "Заявка на подписку на новости АО «НПФ «Сибнефтекарт»",
      );
      const body = encodeURIComponent(
        `Прошу оформить подписку на новости для адреса: ${email}\n\nСогласие на получение рекламно-информационных сообщений предоставлено через форму сайта. Подтверждаю отправку этой заявки.`,
      );
      status.textContent =
        "Откроется почтовое приложение. Отправьте подготовленное письмо, чтобы передать заявку компании.";
      window.location.href = `mailto:zao.sncard@sncard.ru?subject=${subject}&body=${body}`;
    });
    subscribeForm.addEventListener("reset", () => {
      status.textContent = "";
    });
  }

  const cards = [...document.querySelectorAll("[data-news-year]")];
  if (!cards.length) return;
  const search = document.querySelector("[data-news-search]");
  const filters = [...document.querySelectorAll("[data-news-filter]")];
  const pagination = document.querySelector("[data-pagination]");
  const count = document.querySelector("[data-news-count]");
  const empty = document.querySelector("[data-news-empty]");
  const pageSize = 4;
  let year = "all";
  let page = 1;
  const normalize = (text) =>
    text.toLocaleLowerCase("ru").replaceAll("ё", "е").trim();
  const publicationLabel = (n) =>
    n % 10 === 1 && n % 100 !== 11
      ? "публикация"
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)
        ? "публикации"
        : "публикаций";
  function render() {
    const query = normalize(search.value);
    const matches = cards.filter(
      (card) =>
        (year === "all" || card.dataset.newsYear === year) &&
        normalize(card.textContent).includes(query),
    );
    const pages = Math.ceil(matches.length / pageSize);
    page = Math.max(1, Math.min(page, pages));
    cards.forEach((card) => {
      card.hidden = true;
    });
    matches.slice((page - 1) * pageSize, page * pageSize).forEach((card) => {
      card.hidden = false;
    });
    filters.forEach((button) => {
      const active = button.dataset.newsFilter === year;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    count.textContent = `${matches.length} ${publicationLabel(matches.length)}`;
    empty.hidden = matches.length !== 0;
    pagination.hidden = pages <= 1;
    pagination.replaceChildren();
    if (pages <= 1) return;
    const label = document.createElement("span");
    label.className = "pagination-label";
    label.textContent = `Страница ${page} из ${pages}`;
    pagination.append(label);
    function addButton(text, target, disabled = false) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "page-chip";
      button.textContent = text;
      button.disabled = disabled;
      if (target === page && /^\d+$/.test(text)) {
        button.classList.add("is-current");
        button.setAttribute("aria-current", "page");
      }
      button.addEventListener("click", () => {
        page = target;
        render();
        const first = matches[(page - 1) * pageSize];
        first.focus({ preventScroll: true });
        first.scrollIntoView({
          block: "start",
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
        });
      });
      pagination.append(button);
    }
    addButton("Назад", page - 1, page === 1);
    for (let i = 1; i <= pages; i++) addButton(String(i), i);
    addButton("Вперёд", page + 1, page === pages);
  }
  filters.forEach((button) =>
    button.addEventListener("click", () => {
      year = button.dataset.newsFilter;
      page = 1;
      render();
    }),
  );
  search.addEventListener("input", () => {
    page = 1;
    render();
  });
  document.querySelector("[data-news-reset]").addEventListener("click", () => {
    search.value = "";
    year = "all";
    page = 1;
    render();
    search.focus();
  });
  document.querySelectorAll("[data-news-controls]").forEach((control) => {
    control.hidden = false;
  });
  render();
})();
