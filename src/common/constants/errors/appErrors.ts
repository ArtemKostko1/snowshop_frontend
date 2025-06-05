export const AppErrors = {
  PasswordDoNotMatch: 'Пароли не совпадают',
  InvalidEmail: 'Введите корректный email',
  RequiredField: 'Это поле обязательное',
  minLength: 'Минимальная длина 8 символов',
  InvalidPassword: 'Пароль должен содержать спецсимвол, однин заглавный символ и одну цифру',
};

const authErrors = {
  LOGIN_ERROR: 'Ошибка при авторизации',
  REGISTER_ERROR: 'Ошибка при регистрации',
};

const usersErrors = {
  GET_USER_BY_ID: 'Ошибка при получении пользователя',
  UPDATE_USER: 'Ошибка при изменении пользователя',
  CHANGE_PASSWORD: 'Ошибка при смене пароля',
};

const productsErrors = {
  GET_ALL_PRODUCTS: 'Ошибка при получении товаров',
  GET_PRODUCT_BY_ID: 'Ошибка при получении товара',
  CREATE_PRODUCT: 'Ошибка при создании товара',
  UPDATE_PRODUCT: 'Ошибка при изменении товара',
  DELETE_PRODUCT: 'Ошибка при удалении товара',
};

const catalogErrors = {
  GET_ALL_CATALOG_PRODUCTS: 'Ошибка при получении товаров каталога',
  GET_PRODUCT_BY_ARTICLE_ROUTE: 'Ошибка при получении товара по артиклу',
};

const categoriesErrors = {
  GET_ALL_CATEGORIES: 'Ошибка при получении категорий',
  GET_CATEGORY_BY_ID: 'Ошибка при получении категории',
  CREATE_CATEGORY: 'Ошибка при создании категории',
  UPDATE_CATEGORY: 'Ошибка при изменении категории',
  DELETE_CATEGORY: 'Ошибка при удалении категории',
};

const brandsErrors = {
  GET_ALL_BRANDS: 'Ошибка при получении брендов',
  GET_BRAND_BY_ID: 'Ошибка при получении бренда',
  CREATE_BRAND: 'Ошибка при создании бренда',
  UPDATE_BRAND: 'Ошибка при изменении бренда',
  DELETE_BRAND: 'Ошибка при удалении бренда',
};

const ordersErrors = {
  GET_ALL_ORDERS: 'Ошибка при получении заказов',
  GET_ORDER_BY_ID: 'Ошибка при получении заказа',
  CREATE_ORDER: 'Ошибка при создании заказа',
  UPDATE_ORDER: 'Ошибка при изменении заказа',
  DELETE_ORDER: 'Ошибка при удалении заказа',
  GET_ORDERS_BY_USER_ID: 'Ошибка при получении истории заказов',
};

const fieldValidation = {
  REQUIRED_FIELD: 'Это поле обязательное',
};

const appErrors = {
  authErrors,
  usersErrors,
  productsErrors,
  categoriesErrors,
  brandsErrors,
  catalogErrors,
  ordersErrors,
  fieldValidation,
};

export default appErrors;
