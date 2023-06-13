import  { createKeranjangTemplate }  from "../components/keranjang-template";

const KeranjangPage = {
    async render() {
      return `
      <div class="cart-page">
        <div id ="cart-content"> </div>
      </div>
      `;
    },
   
    async afterRender() {
      const keranjangContainer = document.querySelector('#cart-content');
      keranjangContainer.innerHTML = createKeranjangTemplate();
    },
  };
   
  export default KeranjangPage;