function renderHowAppTitle(selector,list) {
    const titleDOM = document.getElementById(selector);

    let HTML = '';

    for (const item of list) {
        HTML += `<div class="col-12 col-md-12 col-lg-6 ml-lg-3 tittle">
                    <h2 class="section-tittle">${item.title}</h2>
                    <p class="main-para">${item.para}</p>
                </div>`;
    }
    titleDOM.innerHTML = HTML;
}

export { renderHowAppTitle };