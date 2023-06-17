import UrlParser from "../../routes/url-parser";
import AgroMartDbSource from "../../../data/agromartdb-source";
import { createProductDetailTemplate } from "../components/detail";


const ProductDetailPage = {
    async render() {
        return `
            <div id="product-detail" class="product-detail"><div>
        `;
    },

    async afterRender(){
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const product = await AgroMartDbSource.detailProduct(url.id);
        const productContainer = document.querySelector('#product-detail');
        productContainer.innerHTML = createProductDetailTemplate(product);

        const addItem = document.querySelector('#addItem')
        const minItem = document.querySelector('#minItem')
        const quantityInput = document.getElementById('qty');
        const addToCartButton = document.querySelector('#addCart')

        addItem.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            quantity += 1;
            quantityInput.value = quantity;
        })

        minItem.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            if(quantity > 1) {
             quantity -= 1;
             quantityInput.value = quantity;
            }
        })

        addToCartButton.addEventListener('click', () => {
            const userId = localStorage.getItem('userId');
            const username = localStorage.getItem('username');
            const productId = url.id
            const quantity = quantityInput.value

            const data = {
                userId: userId,
                username: username,
                products: [
                  {
                    productId: productId,
                    quantity: quantity
                  }
                ]
              }
              const doAddCart = AgroMartDbSource.addCart(data)
              return doAddCart;
        })

    },
}

export default ProductDetailPage;
