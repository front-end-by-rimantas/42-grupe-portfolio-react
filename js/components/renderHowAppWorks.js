function renderHowAppWorks(selector, list) {
    const appDOM = document.getElementById(selector);

    let HTML = '';

    for (const item of list) {
        HTML += `<div class="info col-12 col-md-4">
                    <img class="app-img" src="./img/${item.img}" alt="${item.imgAlt}">
                    <h4 class="box-tittle white-text">${item.title}</h4>
                    <p>${item.description}</p>
                </div>`;
    }

    appDOM.innerHTML = HTML;
}

export { renderHowAppWorks };
