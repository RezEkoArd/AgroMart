const createProductDetailTemplate = (product) =>`
    <div class ="profile-drawer">

    <button type="button" class="btn btn-secondary btn-lg">Keranjang <img src="./images/basket.png" alt="" > </img><span class="basket-count">2</span></button>
    <button type="button" class="btn btn-secondary btn-lg">Setting <img src="./images/setting.png" alt=""> </img></button>
    </div>
    <div class="navigation">
        <p><a href="#/${product.categories}-page">${product.categories}</a> / <a href="#/detail/${product.id}">${product.title} </a> </p>
    </div>
    <div class="container-detail">
        <div class="product-image"> 
            <img src="${product.img}">
        </div>
        <div class="product-attribute"> 
            <div class="product-name"> <h2> ${product.title} </h2> </div> 
            <div class="description"> <p>${product.desc} </p> </div>
            <div class="price"> <h4> Harga : </h4> <h4> ${product.price} </h4> </div>
            <div class="quantity"> <h4> Jumlah :</h4> 
                <button id="addItem" class="add"> + </button>
                <input type="text" class="qty" id="qty" value="0" readonly>
                <button id="minItem" class="min"> - </button>
            </div>
            <div class="rating"> <h4> Rating :  ${product.rating} </h4> <button type="button" class="btn btn-success btn-lg ml-auto">Tambahkan ke Keranjang</button> </div>
        </div>

    </div>
`

export { createProductDetailTemplate};