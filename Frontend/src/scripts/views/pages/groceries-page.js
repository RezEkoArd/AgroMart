import { createProductListTemplate, createBuahListTemplate } from "../components/product-list";
import AgroMartDbSource from "../../../data/agromartdb-source";

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
        <div class="row">
        <div class="sayuran-card"></div>
        </div>
    </div>
    <div class="buah-container">
        <div class="buah-header">
            <h3><a href="#/buah-page">Buah - Buahan</a></h3>
            <hr class="border border-primary border-3 opacity-75">
        </div>
        <div class="row">
        <div class="buah-card"></div>
        </div>
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
    const products = await AgroMartDbSource.cardProduct();
    const sayur = products.filter(products=>products.categories === "Sayuran")
    console.log(sayur);
    const sayuranContainer = document.querySelector('.sayuran-card');
    sayur.forEach((sayur)=> { 
    sayuranContainer.innerHTML += createProductListTemplate(sayur);
    });

    const buah = products.filter(products=>products.categories === "Buah")
    console.log(buah);
    const buahContainer = document.querySelector('.buah-card');
    buah.forEach((buah)=> { 
    buahContainer.innerHTML += createBuahListTemplate(buah);
    });

    // const tanamanContainer = document.querySelector('.tanaman-card');
    // tanamanContainer.innerHTML = createProductListTemplate();
    },
}

export default GroceriesPage;
