import { GridLocaleText } from "@mui/x-data-grid";

export const russianLocaleText: Partial<GridLocaleText> = {
  // Основные надписи и состояние
  noRowsLabel: "Нет данных",
  noResultsOverlayLabel: "Ничего не найдено",

  // Меню колонок
  columnMenuLabel: "Меню",
  columnMenuShowColumns: "Показать колонки",
  columnMenuFilter: "Фильтр",
  columnMenuHideColumn: "Скрыть колонку",
  columnMenuUnsort: "Отменить сортировку",
  columnMenuSortAsc: "Сортировать по возрастанию",
  columnMenuSortDesc: "Сортировать по убыванию",
  columnMenuManageColumns: "Управление колонками",

  // Панель фильтрации
  filterPanelAddFilter: "Добавить фильтр",
  filterPanelDeleteIconLabel: "Удалить",
  filterPanelOperator: "Операторы",
  filterPanelOperatorAnd: "И",
  filterPanelOperatorOr: "ИЛИ",
  filterPanelColumns: "Колонка",
  filterPanelInputLabel: "Значение",
  filterPanelInputPlaceholder: "Значение фильтра",

  // Операторы фильтрации
  filterOperatorContains: "содержит",
  filterOperatorEquals: "равно",
  filterOperatorStartsWith: "начинается с",
  filterOperatorEndsWith: "заканчивается на",
  filterOperatorIs: "является",
  filterOperatorNot: "не является",
  filterOperatorAfter: "позже",
  filterOperatorOnOrAfter: "в или после",
  filterOperatorBefore: "раньше",
  filterOperatorOnOrBefore: "в или до",
  filterOperatorIsEmpty: "пусто",
  filterOperatorIsNotEmpty: "не пусто",
  filterOperatorIsAnyOf: "один из",
  filterOperatorDoesNotEqual: "не равно",
  filterOperatorDoesNotContain: "не содержит",

  // Панель инструментов
  toolbarColumns: "Колонки",
  toolbarColumnsLabel: "Выбрать колонки",
  toolbarFilters: "Фильтры",
  toolbarFiltersLabel: "Показать фильтры",
  toolbarFiltersTooltipHide: "Скрыть фильтры",
  toolbarFiltersTooltipShow: "Показать фильтры",
  toolbarQuickFilterPlaceholder: "Поиск...",
  toolbarQuickFilterLabel: "Поиск",
  toolbarQuickFilterDeleteIconLabel: "Очистить",

  // Управление колонками
  columnsManagementShowHideAllText: "Показать/скрыть все",
  columnsManagementReset: "Сбросить",
  columnsManagementSearchTitle: "Поиск колонки",
  columnsManagementNoColumns: "Колонки не найдены",

  // Пагинация
  footerRowSelected: (count: number) =>
    `${count.toLocaleString()} строк выбрано`,
  footerTotalRows: "Всего строк:",
  paginationRowsPerPage: "Строк на странице:",
  paginationDisplayedRows: ({
    from,
    to,
    count,
  }: {
    from: number;
    to: number;
    count: number;
  }) => `${from}–${to} из ${count !== -1 ? count : `более чем ${to}`}`,
};
