(() => {
  const dialog = document.querySelector('.equipment-dialog');
  if (!dialog) return;
  const title = dialog.querySelector('#equipment-dialog-title');
  const description = dialog.querySelector('[data-dialog-description]');
  const link = dialog.querySelector('[data-dialog-link]');

  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      title.textContent = card.dataset.title;
      description.textContent = card.dataset.description;
      link.href = card.dataset.url;
      dialog.showModal();
    });
  });

  dialog.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
})();
