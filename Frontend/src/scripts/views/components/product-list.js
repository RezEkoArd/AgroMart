const createProductListTemplate = (sayur) => `
<div class="col-md">
    <div class="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-body">
            <img src="${sayur.img}" alt="${sayur.title}" class="card-img-top">
            <h3 class="card-title"><a href="#/detail/${sayur._id}"> ${sayur.title}</a></h3>
            <p>${sayur.desc}</p>
            <h4>Rp.${sayur.price}</h4>
        </div>
    </div>
</div>

`;
const createBuahListTemplate = (buah) => `
<div class="col-md">
    <div class="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-body">
            <img src="${buah.img}" alt="${buah.title}" class="card-img-top">
            <h3 class="card-title"><a href="#/detail/${buah._id}"> ${buah.title}</a></h3>
            <p>${buah.desc}</p>
            <h4>Rp.${buah.price}</h4>
        </div>
    </div>
</div>

`;
export {createProductListTemplate, createBuahListTemplate};