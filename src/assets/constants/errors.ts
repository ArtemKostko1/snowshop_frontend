const authErrors = {
    LOGIN_ERROR: "Ошибка при авторизации",
    REGISTER_ERROR: "Ошибка при регистрации",
}

const productsErrors = {
    GET_ALL_PRODUCTS: "Ошибка при получении товаров",
    GET_PRODUCT_BY_ID: "Ошибка при получении товара",
    CREATE_PRODUCT: "Ошибка при создании товара",
    UPDATE_PRODUCT: "Ошибка при изменении товара",
    DELETE_PRODUCT: "Ошибка при удалении товара",
}

const categoriesErrors = {
    GET_ALL_CATEGORIES: "Ошибка при получении категорий",
    GET_CATEGORY_BY_ID: "Ошибка при получении категории",
    CREATE_CATEGORY: "Ошибка при создании категории",
    UPDATE_CATEGORY: "Ошибка при изменении категории",
    DELETE_CATEGORY: "Ошибка при удалении категории",
}

const brandsErrors = {
    GET_ALL_BRANDS: "Ошибка при получении брендов",
    GET_BRAND_BY_ID: "Ошибка при получении бренда",
    CREATE_BRAND: "Ошибка при создании бренда",
    UPDATE_BRAND: "Ошибка при изменении бренда",
    DELETE_BRAND: "Ошибка при удалении бренда",
}

const fieldValidation = {
    REQUIRED_FIELD: "Это поле обязательное",
}

const appErrors = {
    authErrors,
    fieldValidation,
    productsErrors,
    categoriesErrors,
    brandsErrors,
}

export default appErrors;