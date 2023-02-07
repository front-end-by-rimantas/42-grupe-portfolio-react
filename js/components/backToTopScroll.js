function backToTopScroll(scrollPos) {
    const bcttDOM = document.querySelector('.bctt');
    if (scrollPos <= 200) {
        bcttDOM.classList.add('hidden');
    } else bcttDOM.classList.remove('hidden');
}

export { backToTopScroll };
