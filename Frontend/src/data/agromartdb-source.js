import API_ENDPOINT from '../globals/api-endpoint';

class AgroMartDbSource {
    static async detailProduct(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        console.log(response);
        return response.json();
    }

    static async cardProduct() {
        const response =  await fetch(API_ENDPOINT.PRODUCT);
        const responseJson = await response.json();
        return responseJson;
    }
    
}

export default AgroMartDbSource;