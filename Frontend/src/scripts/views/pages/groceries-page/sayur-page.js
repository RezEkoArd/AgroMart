import { createGroceriesProductTemplate } from "../../components/groceries-product";

const sayurPage = {
    async render() {
      return `
    <div class="sayuran-container">
    <div class="sayuran-header">
      <h3>Sayuran</h3>
      <hr class="border border-primary border-3 opacity-75">
    </div>
        <div class="sayur-page-card"></div>
    </div>
      `;
    },
   
    async afterRender() {
        const sayurPageContainer = document.querySelector('.sayur-page-card');
        sayurPageContainer.innerHTML = createGroceriesProductTemplate();
    },
  };
   
  export default sayurPage;