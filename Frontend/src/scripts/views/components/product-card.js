const createProductCardTemplate = (product) =>`
<div class="product-item">
    <div class="product-item-header">
        <div class="placeholder-img">
            <img src="${product.img}">
        </div>
    </div>
    <div class="product-item_content">
        <h3><a href="#/detail/${product._id}">${product.title}</a></h3>
        <p>${product.desc}</p>
        <p>Rp. ${product.price}</p>
    </div>
</div>
`;

export { createProductCardTemplate };