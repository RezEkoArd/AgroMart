import CONFIG from "./config";

const API_ENDPOINT = {
    PRODUCT: `${CONFIG.BASE_URL}product/`,
    DETAIL: (id) => `${CONFIG.BASE_URL}product/find/${id}`,
};

export default API_ENDPOINT;