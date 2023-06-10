import { createProductCardTemplate } from "../components/product-card";

const HomePage = {
    async render() {
        return `
            <section class="jumbotron" id="jumbotron">
                <img src="./images/banner.png" alt="jumbotron-image">
                <div class="overlay"></div>
                <div class="content">
                    <h1>Selamat Datang Di AgroMart</h1>
                    <p>E-commerce agriculture yang menjual Sayuran fresh berasal langsung dari Petani Indonesia.</p>
                <div class="jumbotron-button">
                    <button >
                    Order now
                    </button>
                </div>
                </div>
            </section>

            <section class="section-listProducts">
                <h1>All Product</h1>
                <div id="product" class="product"></div>
                <div class="button-showMore">
                <a href="#/groceries-page" class="btn btn-primary">Show More...</a>
                </div>
            </section>
            
        `;
    },

    async afterRender(){
        const productContainer = document.querySelector('#product');
        productContainer.innerHTML = createProductCardTemplate();
    },
}

export default HomePage;