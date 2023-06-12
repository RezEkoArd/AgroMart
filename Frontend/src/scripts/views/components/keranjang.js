const createKeranjangTemplate = () => `
    <div class ="row">
        <div class = "col"> ITEM </div>
        <div class = "col"> HARGA </div>
        <div class = "col"> QUANTITY </div>
        <div class = "col"> TOTAL HARGA </div>
        <div class = "col text-center"> HAPUS </div>
    </div>
    <div class ="row">
        <div class = "col d-flex flex-row"> 
            <div class ="item-image">#</div>
            <p>NAMA ITEM</P>
        </div>
    <div class = "col"> Rp.10.000 </div>
    <div class = "col d-flex flex-row gap-3">
        <i class="bi bi-dash"></i>
        <p>2</p>
        <i class="bi bi-plus"></i>
    </div>
    <div class = "col"> Rp.20.000 </div>
    <div class = "col text-center"> 
        <i class="bi bi-x "></i>
    </div>
    </div>
    <div class="row">
        <div class="col"> Total </div>
        <div class="col"> Ongkos Kirim </div>
    </div>
`

export { createKeranjangTemplate};