const createProductDetailTemplate = (product) =>`
    <div class ="profile-drawer">

    <a type="button" class="btn btn-secondary btn-lg" href="#/keranjang">Keranjang <img src="./images/basket.png" alt="" > </img><span class="basket-count">2</span></a>

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
                <button id="minItem" class="min"> - </button>
                <input type="text" class="qty" id="qty" value="1" readonly>
                <button id="addItem" class="add"> + </button>
                
            </div>
            <div class="rating"> <h4> Rating :  ${product.rating} </h4> <button type="button" id="addCart" class="btn btn-success btn-lg ">Tambahkan ke Keranjang</button> </div>
        </div>

    </div>
`

export { createProductDetailTemplate};