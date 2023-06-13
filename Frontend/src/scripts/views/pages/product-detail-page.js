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
    },
}

export default ProductDetailPage;
