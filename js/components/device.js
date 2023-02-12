function device(selector, list) {
    const appDOM = document.getElementById(selector);

    let HTML = '';

    for (const item of list) {
        HTML += `<div class="pomidoras">
                    <div class="icon-box">
                        <i class="${item.icon}" aria-hidden="true"></i>
                    </div>
                    <p>${item.description}</p>
                </div>`;
    }

    appDOM.innerHTML = HTML;
}

export { device };