import { createProductListTemplate } from "../components/product-list";

const GroceriesPage = {
    async render() {
        return `
        <section class="search-container">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2 text-center">
                    <div class="h-search-form">
                        <form action="#">
                            <input type="search" name="search" placeholder="Cari Produk....">
                            <button><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="sayuran-container">
        <div class="sayuran-header">
            <h3><a href="#/sayur-page">Sayuran</a></h3>
            <hr class="border border-primary border-3 opacity-75">
        </div>
        <div class="sayuran-card"></div>
    </div>
    <div class="buah-container">
        <div class="buah-header">
            <h3><a href="#/buah-page">Buah - Buahan</a></h3>
            <hr class="border border-primary border-3 opacity-75">
        </div>
        <div class="buah-card"></div>
    </div>
    <div class="tanaman-container">
    <div class="tanaman-header">
        <h3><a href="#/tanaman-page">Benih Tanaman</a></h3>
        <hr class="border border-primary border-3 opacity-75">
    </div>
    <div class="tanaman-card"></div>
    </div>
        `;
    },

    async afterRender(){
    const sayuranContainer = document.querySelector('.sayuran-card');
    sayuranContainer.innerHTML = createProductListTemplate();

    const buahContainer = document.querySelector('.buah-card');
    buahContainer.innerHTML = createProductListTemplate();

    const tanamanContainer = document.querySelector('.tanaman-card');
    tanamanContainer.innerHTML = createProductListTemplate();
    },
}

export default GroceriesPage;
