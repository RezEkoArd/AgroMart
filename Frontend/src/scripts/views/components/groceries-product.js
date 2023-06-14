const createGroceriesProductTemplate = (kategoriBuah) => `
<div class="row row-cols-md-3">
<div class="col-md">
    <div class="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-body">
            <img src="${kategoriBuah.img}" alt="${kategoriBuah.title}" class="card-img-top">
            <h3 class="card-title"><a href="#/detail/${kategoriBuah.id}"> ${kategoriBuah.title}</a></h3>
            <p>${kategoriBuah.desc}</p>
            <h4>Rp.${kategoriBuah.price}</h4>
        </div>
    </div>
</div>
</div>
`;

const createProductSayurTemplate = (kategoriSayur) => `
<div class="col-4">
    <div class="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-body">
            <img src="${kategoriSayur.img}" alt="${kategoriSayur.title}" class="card-img-top">
            <h3 class="card-title"><a href="#/detail/${kategoriSayur.id}"> ${kategoriSayur.title}</a></h3>
            <p>${kategoriSayur.desc}</p>
            <h4>Rp.${kategoriSayur.price}</h4>
        </div>
    </div>
</div>
</div>
`;
export {createGroceriesProductTemplate, createProductSayurTemplate};
