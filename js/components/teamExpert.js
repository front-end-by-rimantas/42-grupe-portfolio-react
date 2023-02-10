function teamExpert(selector, list) {
    const teamDOM = document.getElementById(selector);

    let HTML = '';

    for (const item of list) {
        HTML += `<div class="bubble">
                    <div class="main-view">
                        <img class="team-img" src="./img/${item.src}" alt="${item.alt}">
                        <div class="hover-view">
                            <p class="expert-name">${item.name}</p>
                            <p class="expert-position">${item.jobTitle}</p>
                            <div class="bubble-socials">
                                <a href="#" class="icon fa ${item.href1}"></a>
                                <a href="#" class="icon fa ${item.href2}"></a>
                                <a href="#" class="icon fa ${item.href3}"></a>
                                <a href="#" class="icon fa ${item.href4}"></a>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
    teamDOM.innerHTML = HTML;
}

export { teamExpert };
