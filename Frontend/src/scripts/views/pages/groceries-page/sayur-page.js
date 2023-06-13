import { createProductSayurTemplate } from "../../components/groceries-product";
import AgroMartDbSource from "../../../../data/agromartdb-source";

const sayurPage = {
    async render() {
      return `
    <div class="sayuran-container">
    <div class="sayuran-header">
      <h3>Sayuran</h3>
      <hr class="border border-primary border-3 opacity-75">
    </div>
        <div class="container">
        <div class="row"> 
          <div class="sayur-page-card"> </div>
        </div>
        </div>
    </div>
      `;
    },
   
    async afterRender() {
      const products = await AgroMartDbSource.cardProduct();
      const kategoriSayur = products.filter(products=>products.categories === "Sayuran")
      console.log(kategoriSayur);
        const sayurPageContainer = document.querySelector('.sayur-page-card');
        kategoriSayur.forEach((kategoriSayur)=> { 
        sayurPageContainer.innerHTML += createProductSayurTemplate(kategoriSayur);
        });
    },
  };
   
  export default sayurPage;