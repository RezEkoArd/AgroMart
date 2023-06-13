const createKeranjangTemplate = () => `
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
    </div> 
        <div class="row border-top border-bottom">
            <div class="row main align-items-center">
                <div class="col-2"><img class="img-fluid" src=".." alt="gambar produk"></div>
                <div class="col">
                    <div class="row">NAMA PRODUK</div>
                </div>
                <div class="col">
                    <div class="row">RP.10.000</div>
                </div>
                <div class="col">
                    <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                </div>
                <div class="col">Rp.10.000<span class="close">&#10005;</span></div>
            </div>
        </div>
        <div class="row">
            <div class="row main align-items-center">
                <div class="col-2"><img class="img-fluid" src=".." alt="gambar produk"></div>
                <div class="col">
                    <div class="row">NAMA PRODUK</div>
                </div>
                <div class="col">
                    <div class="row">RP.10.000</div>
                 </div>
                <div class="col">
                    <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                </div>
                <div class="col">Rp.10.000 <span class="close">&#10005;</span></div>
            </div>
        </div>
        <div class="row border-top border-bottom">
            <div class="row main align-items-center">
                <div class="col-2"><img class="img-fluid" src=".." alt="gambar produk"></div>
                <div class="col">
                    <div class="row">NAMA PRODUK</div>
                </div>
                <div class="col">
                    <div class="row">RP.10.000</div>
                 </div>
                <div class="col">
                    <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                </div>
                <div class="col">Rp.10.000 <span class="close">&#10005;</span></div>
            </div>
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

</div>

`

export { createKeranjangTemplate };