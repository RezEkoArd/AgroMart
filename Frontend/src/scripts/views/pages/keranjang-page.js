import  { createKeranjangTemplate }  from "../components/keranjang-template";

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
    <div class="col-md-4 summary">
    <hr>
    <div class="row">
        <div class="col" style="padding-left:0;">Total</div>
        <div class="col text-right">RP.HARGA</div>
    </div>
    <div class="row">
        <div class="col" style="padding-left:0;">Ongkos Krim</div>
        <div class="col text-right">Free</div>
    </div>
    <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
        <div class="col">Total Harga</div>
        <div class="col text-right">RP.HARGA</div>
    </div>
    <button class="btn text-center">CHECKOUT</button>
    </div>
    </div>
      `;
    },
   
    async afterRender() {
      const keranjangContainer = document.querySelector('#cart-content');
      keranjangContainer.innerHTML = createKeranjangTemplate();
    },
  };
   
  export default KeranjangPage;