# Сибнефтекарт — единый сайт

Статический проект на HTML, CSS и JavaScript без сборщика. Корневой [index.html](index.html) объединяет новости, программное обеспечение, обслуживание ККТ и контакты с двумя самостоятельными разделами: `serviceSncard` и `zaoSncard`.

## Страницы

| Путь | Содержимое |
| --- | --- |
| [index.html](index.html) | Главная страница SNCard и переходы к направлениям |
| [news.html](news.html) | Новости и ссылки на архив публикаций |
| [software.html](software.html) | Программное обеспечение для АЗС, сетей станций, процессинга карт и нефтебаз |
| [kkt.html](kkt.html) | Обслуживание ККТ: «Штрих-М», «Атол», фискальные накопители и договоры |
| [contacts.html](contacts.html) | Контакты ООО «Сибнефтекарт»: поддержка, специалисты, администрация и офис |
| [equipment.html](equipment.html) | Перенаправление со старого адреса в `serviceSncard` |
| [serviceSncard/index.html](serviceSncard/index.html) | Главная страница ООО «Сибнефтекарт-Сервис» |
| [serviceSncard/equipment.html](serviceSncard/equipment.html) | Категории оборудования для АЗС и нефтебаз |
| [serviceSncard/cards.html](serviceSncard/cards.html) | Изготовление пластиковых карт и требования к макетам |
| [serviceSncard/contacts.html](serviceSncard/contacts.html) | Страница контактов на основе страницы `zaoSncard` |
| [zaoSncard/index.html](zaoSncard/index.html) | Главная страница АО «НПФ «Сибнефтекарт» и раздел обслуживания карт |
| [zaoSncard/news.html](zaoSncard/news.html) | Новости АО «НПФ «Сибнефтекарт» |
| [zaoSncard/company-history.html](zaoSncard/company-history.html) | Раздел «О компании»; исторический адрес файла сохранён |
| [zaoSncard/shareholders.html](zaoSncard/shareholders.html) | Информация для акционеров |
| [zaoSncard/contacts.html](zaoSncard/contacts.html) | Контакты АО |
| [zaoSncard/stations.html](zaoSncard/stations.html) | Сеть АЗС |

## Навигация

В шапке SNCard порядок пунктов такой: «Новости», выпадающее меню «Решения», «Оборудование», «Обслуживание карт», «Контакты». В «Решениях» находятся «Программное обеспечение» и «Обслуживание ККТ». Переходы к `serviceSncard` и `zaoSncard` открывают соответствующие разделы в новых вкладках и отмечены иконкой внешнего перехода.

В меню `serviceSncard` находятся «Оборудование», «Изготовление карт» и «Контакты». В меню `zaoSncard` — «Новости», «О компании», «Акционерам», «Контакты» и «Сеть АЗС». Кнопки «Главная» в шапках нет: переход на главную доступен через логотип, а путь к текущей странице показан в навигационной цепочке.

SVG-иконки навигации и разделов хранятся в [assets/icons](assets/icons). Текстовые подписи SNCard, Service и ZAO возле логотипа удалены; главные страницы разделов различаются оформлением первого экрана.

## Каталог и обслуживание ККТ

В [каталоге сервиса](serviceSncard/equipment.html) категории расположены по алфавиту. Нажатие на карточку открывает диалог с кратким описанием и ссылкой на соответствующий раздел каталога производителя. Поведение диалога описано в [serviceSncard/assets/equipment.js](serviceSncard/assets/equipment.js).

Страница [обслуживания ККТ](kkt.html) представляет четыре направления отдельными блоками. Блоки «Штрих-М» и «Атол» ведут к каталогам на официальном сайте; для фискальных накопителей и договоров предусмотрен переход к контактам.

## Файлы интерфейса и источники

Общие шапки и подвалы формируются скриптами [assets/site.js](assets/site.js), [serviceSncard/assets/layout.js](serviceSncard/assets/layout.js) и [zaoSncard/assets/layout.js](zaoSncard/assets/layout.js). В HTML есть резервная навигация. Мобильное меню и интерактивные элементы `zaoSncard` используют [zaoSncard/assets/app.js](zaoSncard/assets/app.js).

Общий набор стилей находится в [zaoSncard/assets/styles.css](zaoSncard/assets/styles.css). Корневой сайт и сервис дополняют его файлами [assets/site.css](assets/site.css) и [serviceSncard/assets/styles.css](serviceSncard/assets/styles.css). Основные цвета: красный `#BF0706`, графит `#23262C`, светлый фон `#F5F5F5`.

Содержимое опирается на опубликованные материалы [sncard.ru](https://www.sncard.ru/), [snc-service.sncard.ru](https://snc-service.sncard.ru/) и [zao.sncard.ru](https://zao.sncard.ru/). Цены оборудования и карт на локальных страницах не дублируются.
