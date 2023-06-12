import { createGroceriesProductTemplate } from "../../components/groceries-product";
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
      const buahPageContainer = document.querySelector('.buah-page-card');
        buahPageContainer.innerHTML = createGroceriesProductTemplate();
    },
  };
   
  export default buahPage;