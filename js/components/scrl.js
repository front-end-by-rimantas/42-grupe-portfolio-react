function scrl(func) {
    addEventListener('scroll', () => {
        let lastKnownScrollPosition = scrollY || 0;
        let ticking = false;

        if (!ticking) {
            requestAnimationFrame(() => {
                func(lastKnownScrollPosition);
                ticking = false;
            });
            ticking = true;
        }
    });
}
export { scrl };
