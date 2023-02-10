function stickyHeaderScroll(scrollPos) {
    const headerDOM = document.querySelector('header.container');
    if (scrollPos >= 300) {
        headerDOM.classList.add('sticky-header');
        headerDOM
            .querySelector('.nav-bar')
            .classList.add('sticky-header-colors');
        headerDOM
            .querySelector('.header-col')
            .classList.add('sticky-header-colors');
        headerDOM.querySelector(
            'a.logo-link'
        ).innerHTML = `<img src="./img/logo.webp" alt="logo" class="logo">`;
    } else {
        headerDOM.classList.remove('sticky-header');
        headerDOM
            .querySelector('.nav-bar')
            .classList.remove('sticky-header-colors');
        headerDOM
            .querySelector('.header-col')
            .classList.remove('sticky-header-colors');
        headerDOM.querySelector(
            'a.logo-link'
        ).innerHTML = `<img src="./img/logo-white.webp" alt="logo" class="logo">`;
    }
}

export { stickyHeaderScroll };
