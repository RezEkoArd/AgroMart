import CONFIG from "./config";

const API_ENDPOINT = {
    PRODUCT: `${CONFIG.BASE_URL}product/`,
    DETAIL: (id) => `${CONFIG.BASE_URL}product/find/${id}`,
    LOGIN_USER: `${CONFIG.BASE_URL}auth/login`,
    ADD_CART: `${CONFIG.BASE_URL}cart`,
    CART_LIST : (id) =>  `${CONFIG.BASE_URL}cart/${id}`,
    TOTAL_PRICE : (id) =>  `${CONFIG.BASE_URL}cart/user/${id}`
};

export default API_ENDPOINT;