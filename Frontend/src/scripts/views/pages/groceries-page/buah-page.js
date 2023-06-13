import { createGroceriesProductTemplate } from "../../components/groceries-product";
import AgroMartDbSource from "../../../../data/agromartdb-source";
const buahPage = {
    async render() {
      return `
      <div class="buah-container">
      <div class="buah-header">
          <h3>Buah - Buahan</h3>
          <hr class="border border-primary border-3 opacity-75">
      </div>
      <div class="buah-page-card"></div>
  </div>
      `;
    },
   
    async afterRender() {
      const products = await AgroMartDbSource.cardProduct();
      const kategoriBuah = products.filter(products=>products.categories === "Buah");
      // console.log(kategoriBuah);
      const buahPageContainer = document.querySelector('.buah-page-card');
      kategoriBuah.forEach((kategoriBuah)=> { 
        buahPageContainer.innerHTML += createGroceriesProductTemplate(kategoriBuah);
     });
        
    },
  };
   
  export default buahPage;