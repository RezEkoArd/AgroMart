import { createKeranjangTemplate } from "../components/keranjang";
const KeranjangPage = {
    async render() {
      return `
      <div class="cart-page">
        <h2>KERANGJANGKU</h2>
        <div id ="cart-content"> </div>
      </div>
      `;
    },
   
    async afterRender() {
      const productContainer = document.querySelector('#cart-content');
      productContainer.innerHTML = createKeranjangTemplate();
    },
  };
   
  export default KeranjangPage;