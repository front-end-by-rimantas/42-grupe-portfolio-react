function renderExpressFunctionality(selector, list) {
    const featuresDOM = document.getElementById(selector);

    let HTML = '';

    for (const item of list) {
        HTML += `<div class="express-box">
                    <img class="box-img" src="./img/${item.img}" alt="${item.imgAlt}">
                    <h4 class="box-tittle">${item.title}</h4>
                    <p>${item.descr}</p>
                </div>`;
    }

    featuresDOM.innerHTML = HTML;
}

export { renderExpressFunctionality };
