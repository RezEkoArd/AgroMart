import { createProductDetailTemplate } from "../templates/template-creator";


const ProductDetailPage = {
    async render() {
        return `
            <div id="product-detail" class="product-detail"><div>
        `;
    },

    async afterRender(){
        const productContainer = document.querySelector('#product-detail');
        productContainer.innerHTML = createProductDetailTemplate();
    },
}

export default ProductDetailPage;
