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
                        <form action="#/groceries-page" id="search-form">
                            <input type="search" name="search" placeholder="Cari Produk...." id="search-input">
                            <button><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="sayuran-container">
        <div class="sayuran-header">
            <h3><a href="#/sayuran-page">Sayuran</a></h3>
            <hr class="border border-primary border-3 opacity-75">
        </div>
        <div class="row sayuran-card"></div>
        </div>

    <div class="buah-container">
        <div class="buah-header">
            <h3><a href="#/buah-page">Buah - Buahan</a></h3>
            <hr class="border border-primary border-3 opacity-75">
        </div>
        <div class="row buah-card"></div>
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

    async afterRender() {
        const products = await AgroMartDbSource.cardProduct();
        const sayuranContainer = document.querySelector('.sayuran-card');
        const buahContainer = document.querySelector('.buah-card');
    
        // Tampilkan semua produk awal pada halaman
        showAllProducts(products, sayuranContainer, buahContainer);
    
        const searchForm = document.getElementById('search-form');
        searchForm.addEventListener('submit', function (e) {
          e.preventDefault();
          const searchInput = document.getElementById('search-input').value;
          const filteredProducts = searchProducts(products, searchInput);
    
          // Hapus produk yang ditampilkan sebelumnya
          clearProductContainer(sayuranContainer);
          clearProductContainer(buahContainer);
    
          // Tampilkan produk yang sesuai dengan kata kunci pencarian
          showAllProducts(filteredProducts, sayuranContainer, buahContainer);
        });
      },
    };
    
    // Fungsi untuk menampilkan semua produk
    function showAllProducts(products, sayuranContainer, buahContainer) {
      const sayur = products.filter(product => product.categories === "Sayuran");
      sayur.forEach((sayur) => {
        sayuranContainer.innerHTML += createProductListTemplate(sayur);
      });
    
      const buah = products.filter(product => product.categories === "Buah");
      buah.forEach((buah) => {
        buahContainer.innerHTML += createBuahListTemplate(buah);
      });
    }
    
    // Fungsi untuk mencari produk berdasarkan kata kunci
    function searchProducts(products, keyword) {
      return products.filter(product =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    
    // Fungsi untuk menghapus produk yang ditampilkan sebelumnya
    function clearProductContainer(container) {
      container.innerHTML = '';
    }
    
    export default GroceriesPage;
