function renderHowSAppWorks (selector, list){
    const appDOM = document.getElementById(selector);

    let HTML = '';

    for (const item of list) {
        HTML += `<div class="info col-12 col-md-4">
                    <img ${item.img}>
                    <h4 class="box-tittle white-text">${item.title}</h4>
                    <p>${item.description}</p>
                </div>`;
    }

    appDOM.innerHTML = HTML;
}

export default { renderHowSAppWorks };
