function stickyHeaderScroll(scrollPos) {
    const headerDOM = document.querySelector('header.container');
    if (scrollPos >= 300) {
        headerDOM.classList.add('sticky-header');
    } else headerDOM.classList.remove('sticky-header');
}

export { stickyHeaderScroll };
