import { createGroceriesProductTemplate } from "../../components/groceries-product";
const tanamanPage = {
    async render() {
      return `
      <div class="tanaman-container">
      <div class="tanaman-header">
          <h3>Benih Tanaman</h3>
          <hr class="border border-primary border-3 opacity-75">
      </div>
      <div class="tanaman-page-card"></div>
      </div>
      `;
    },
   
    async afterRender() {
      const tanamanPageContainer = document.querySelector('.tanaman-page-card');
      tanamanPageContainer.innerHTML = createGroceriesProductTemplate();
    },
  };
   
  export default tanamanPage;