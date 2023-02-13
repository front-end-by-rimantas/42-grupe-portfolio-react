function renderFullPower(selector, list) {
    const featuresDOM = document.getElementById(selector);

    let HTML = '';

    for (const item of list) {
        let HTMLFeatures = '';
        for (const feature of item.features) {
            HTMLFeatures += `<li>${feature}</li>`;
        }
        HTML += `<div class="plan-box ${item.position}">
            <div class="price">
                <img class="price-img" src="${item.img}" alt="${item.imgAlt}">
                <span class="price-name">${item['price-name']}</span>
                <h1 class="
                price-value"><span class="currency">$</span>${item['price-value']}</h1>
            </div>
            <ul class="plan-features">
            ${HTMLFeatures}
            </ul>
            <a class="btn hidden-md" href="#">Sign up</a>
            <a class="btn btn-out hidden visible-md" href="#">Sign up</a>
        </div>`;
    }

    featuresDOM.innerHTML = HTML;
}

export { renderFullPower };
