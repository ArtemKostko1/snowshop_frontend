const authErrors = {
    AUTH_ERROR: "Ошибка при авторизации",
    GET_KEY: "Ошибка при получении ключа",
}

const usersErrors = {
    GET_ALL_USERS: "Ошибка при получении пользователей",
    GET_USER_BY_ID: "Ошибка при получении пользователя",
    CREATE_USER: "Ошибка при создании пользователя",
    UPDATE_USER: "Ошибка при изменении пользователя",
    DELETE_USER: "Ошибка при удалении пользователя",
}

const cardsAddressesErrors = {
    GET_ADDRESSES: "Ошибка при получении адресов",
    GET_ADDRESS_BY_ID: "Ошибка при получении конкретного адреса",
    GET_FLOORS_BY_ADDRESS_ID: "Ошибка при получении этажей по конкретному адресу",
    GET_ALL_CARDS_ADDRESSES: "Ошибка при получении всех каналов устройств",
    GET_CARDS_ADDRESS_BY_ADDRESS_ID: "Ошибка при получении устройств по конкретному адресу",
    GET_CARDS_ADDRESS_BY_DEVICE_ID: "Ошибка при получении каналов по конкретному устройству",
    GET_ALL_CARDS_ADDRESS_GROUPED_BY_ADDRESS: "Ошибка при получении устройств по каждому из адресов",
    GET_CARDS_ADDRESS_BY_ID: "Ошибка при получении устройства по адресу",
    CREATE_CARDS_ADDRESS: "Ошибка при создании устройства по адресу",
    UPDATE_CARDS_ADDRESS: "Ошибка при изменении устройства по адресу",
    DELETE_CARDS_ADDRESS: "Ошибка при удалении устройства по адресу",
    SEARCH_DISPATCHER_CARDS_ADDRESSES: "Ошибка при поиске устройств",
}

const devicesErrors = {
    GET_ALL_DEVICES: "Ошибка при получении устройств",
    GET_INDEFINITE_DEVICES: "Ошибка при получении неопределенных устройств",
    GET_DEVICE_BY_ID: "Ошибка при получении устройства",
    CREATE_DEVICE: "Ошибка при создании устройства",
    UPDATE_DEVICE: "Ошибка при изменении устройства",
    DELETE_DEVICE: "Ошибка при удалении устройства",
}


const cardsErrors = {
    GET_ALL_CARDS: "Ошибка при получении каналов устройств",
    GET_ALL_CARDS_BY_DEVICE_ID: "Ошибка при полчении каналов по конкретному устройству",
    GET_CARD_BY_ID: "Ошибка при получении канала устройства",
    CREATE_CARD: "Ошибка при создании канала устройства",
    UPDATE_CARD: "Ошибка при изменении канала устройства",
    DELETE_CARD: "Ошибка при удалении канала устройства",
}

const addressesErrors = {
    GET_ALL_ADDRESSES: "Ошибка при получении адресов",
    GET_ADDRESS_BY_ID: "Ошибка при получении адреса",
    CREATE_ADDRESS: "Ошибка при создании адреса",
    UPDATE_ADDRESS: "Ошибка при изменении адреса",
    DELETE_ADDRESS: "Ошибка при удалении адреса",
}

const regionsErrors = {
    GET_ALL_REGIONS: "Ошибка при получении регионов",
    GET_REGION_BY_ID: "Ошибка при получении региона",
}

const subregionsErrors = {
    GET_ALL_SUBREGIONS: "Ошибка при получении районов",
    GET_SUBREGION_BY_ID: "Ошибка при получении района",
}

const rolesErrors = {
    GET_ALL_ROLES: "Ошибка при получении ролей",
    GET_ROLE_BY_ID: "Ошибка при получении роли",
}

const divisionsErrors = {
    GET_ALL_DIVISIONS: "Ошибка при получении отделов",
    GET_DIVISION_BY_ID: "Ошибка при получении отдела",
}

const websocketErrors = {
    WEBSOCKET_CONNET_ERROR: "Ошибка websocket соединения",
    WEBSOCKET_DISCONNET_ERROR: "Ошибка при отключении websocket соединения",
    SEND_MESSAGE_FIELD: "Сообщение отправлено с ощибкой",
}

const buildingTypesErrors = {
    GET_ALL_BUILDING_TYPES: "Ошибка при получении типов места размещения",
    GET_BUILDING_TYPE_BY_ID: "Ошибка при получении типа места размещения",
    CREATE_BUILDING_TYPE: "Ошибка при создании типа места размещения",
    UPDATE_BUILDING_TYPE: "Ошибка при изменении типа места размещения",
    DELETE_BUILDING_TYPE: "Ошибка при удалении типа места размещения",
}

const flatTypesErrors = {
    GET_ALL_BUILDING_TYPES: "Ошибка при получении типов помещения",
}

const fieldValidation = {
    REQUIRED_FIELD: "Это поле обязательное",
}

const appErrors = {
    authErrors,
    fieldValidation,
    addressesErrors,
    devicesErrors,
    cardsErrors,
    usersErrors,
    regionsErrors,
    subregionsErrors,
    rolesErrors,
    divisionsErrors,
    buildingTypesErrors,
    flatTypesErrors,
    cardsAddressesErrors,
    websocketErrors,
}

export default appErrors;