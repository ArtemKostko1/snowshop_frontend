export const getApiUrl = (() => {
    const DEFAULT_API_URL = 'http://localhost:8082';
    const envUrl = process.env.REACT_APP_SERVER_URL;

    if(envUrl) {
        try {
            // Создание объекта типа URL для проверки валидности
            const parsedUrl = new URL(envUrl);

            return parsedUrl.href;
        } catch (error) {
            console.warn(`Неверный URL адрес сервера: ${envUrl}. URL установлен по умолчанию`)
        }
    }
    return DEFAULT_API_URL;
});