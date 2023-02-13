class Testimonials {
    constructor(data) {
        this.data = data;
    }

    HTML() {
        const src = this.data.imgPath + this.data.src;
        let stars = '';
        for (let i = 0; i < this.data.rating; i++) {
            stars += `<i class="fa fa-star"></i>`;
        }
        for (let i = this.data.rating; i < 5; i++) {
            stars += `<i class="fa fa-star-o"></i>`;
        }
        return `<img src="${src}" alt="${this.data.name}">
                <div class="tst-info">
                    <span class="tst-name">${this.data.name}</span>
                    <span class="tst-adress">${this.data.location}</span>
                    <span class="tst-rating">${stars}</span>
                </div>
                <p>${this.data.message}</p>`;
    }
}

export { Testimonials };
