import  { createKeranjangTemplate, createSummaryTemplate }  from "../components/keranjang-template";
import AgroMartDbSource from "../../../data/agromartdb-source";

const KeranjangPage = {
    async render() {
      return `
      <div class="card">
      <div class="row">
       <div class="col-md-8 cart">
        <div class="title">
            <div class="row">
                <div class="col"><h4><b>KERANJANGKU</b></h4></div>
            </div>
        </div> 
        <div class="row main align-items-center">
        <div class="col-2"> ITEM</div>
        <div class="col">
            <div class="row"></div>
        </div>
        <div class="col">HARGA</div>
        <div class="col">QUANTITY</div>
        <div class="col">TOTAL HARGA</div>
            <div id=cart-content></div>
        </div> 
    </div>
    <div class="col-md-4 summary" id="summary-content">

    </div>
      `;
    },
   
    async afterRender() {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        window.location.href = "/#/login-pembeli";
      } else {
        const carts = await AgroMartDbSource.cartList(userId);
        const keranjangContainer = document.querySelector('#cart-content');
        carts.forEach((cart)=> { 
          keranjangContainer.innerHTML += createKeranjangTemplate(cart);
       });
  
      const total = await AgroMartDbSource.totalPrice(userId)
      const summaryContainer = document.querySelector('#summary-content')
      summaryContainer.innerHTML = createSummaryTemplate(total)
      
      const loginButton = document.querySelector('#loginButton');
      loginButton.style.display='none';

      const logoutButton = document.querySelector('#logoutButton');
      logoutButton.style.display='block';

      const logout = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('username');

        window.location.href = "/#/login-pembeli";
        logoutButton.style.display='none';
        loginButton.style.display='block';
      }

      logoutButton.addEventListener('click', logout)
     }
    },

  };
   
  export default KeranjangPage;