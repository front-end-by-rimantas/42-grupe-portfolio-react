function stayTuned(selector, list) {
    const contactDOM = document.getElementById(selector);

    let HTML = '';

    for (const item of list) {
        HTML += `<a href="${item.href}">
                    <div class="icon-box ${item.icon}"></div>
                    <span>${item.more}</span>
                 </a>`;
    }

    contactDOM.innerHTML = HTML;
}

export { stayTuned };
