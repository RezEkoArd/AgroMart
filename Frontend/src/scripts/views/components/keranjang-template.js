const createKeranjangTemplate = (cart) => `
        <div class="row border-top border-bottom">
            <div class="row main align-items-center">
                <div class="col-2"><img class="img-fluid" src=${cart.img} alt="gambar produk"></div>
                <div class="col">
                    <div class="row">${cart.title}</div>
                </div>
                <div class="col">
                    <div class="row">RP.${cart.price}</div>
                </div>
                <div class="col d-flex justify-content-center align-items-center gap-2">
                <button class="border border-0 p-2" >-</button>
                <a class="border border-0 p-2 flex-grow-2">${cart.quantity}</a>
                <button class="border border-0 p-2">+</button>
                </div>
                    <div class="col">Rp.${cart.price * cart.quantity}<span class="close">&#10005;</span></div>
                    </div>
                </div>
                 </div>
            </div>
        </div>
`;

const createSummaryTemplate = (total) => `
    <div class="row">
        <div class="col" style="padding-left:0;">Total</div>
        <div class="col text-right">${total.totalQuantity} Unit</div>
    </div>
    <div class="row">
        <div class="col" style="padding-left:0;">Ongkos Krim</div>
        <div class="col text-right">Free</div>
    </div>
    <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
        <div class="col">Total Harga</div>
        <div class="col text-right">RP.${total.totalPrice}</div>
    </div>
    <button class="btn text-center">CHECKOUT</button>
    </div>
`

export { createKeranjangTemplate, createSummaryTemplate};