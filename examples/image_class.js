// Basic Classes

class Calculator {
    constructor() {
    }

    add(a,b) {
        return a + b;
    }

    subtract(a,b) {
        return a - b;
    }

    absSubtract(a,b){
        Math.abs(this.subtract(a,b));
    }
}
//
// const calc = new Calculator();
// console.log(calc.add(1,2));

// constructors are optional
// all methods are public

class Image {
    constructor(container, path, index) {
        this.container = container;
        const image = document.createElement('img');
        image.src = path;
        image.dataset.index = index;
        image.addEventListener('pointerdown', this.onImageClick);
        this.onImageClick = this.onImageClick.bind(this);
        this.container.appendChild(image);
    }

    onImageClick(event){
        let htmlImg = event.currentTarget;
        const info = {
            path: htmlImg.src,
            imageIndex: htmlImg.dataset.index
        };
        document.dispatchEvent(
          new CustomEvent('image-click', {detail: info})
        );
        // document.body.classList.add('no-scroll');

    }
}

