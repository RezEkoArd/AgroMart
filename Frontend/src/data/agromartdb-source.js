import API_ENDPOINT from '../globals/api-endpoint';

class AgroMartDbSource {
    static async detailProduct(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        // console.log(response);
        return response.json();
    }

    static async cardProduct() {
        const response =  await fetch(API_ENDPOINT.PRODUCT);
        const responseJson = await response.json();
        return responseJson;
    }
    
    static async loginUser(username, password) {
        try {
            await fetch(API_ENDPOINT.LOGIN_USER, {
                method: "POST",
                body: JSON.stringify({username, password}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                // console.log(data.other)
                if(!data.other) {
                    console.log("Login gagal periksa kembali Username dan password")
                } else {
                    localStorage.setItem("username", data.other.username);
                    localStorage.setItem("userId", data.other._id);
                    window.location.href = "/#/groceries-page";
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    static async addCart(data) {
        try {
            await fetch(API_ENDPOINT.ADD_CART, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(() => {
                window.location.href = `/#/keranjang`;
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    // static async cartList(id) {
    //     const response = await fetch(API_ENDPOINT.CART_LIST(id));
    //     console.log(response);
    //     return response.json();
    // }
}

export default AgroMartDbSource;