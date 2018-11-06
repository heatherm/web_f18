const images = document.querySelector('#images');
const modal = document.querySelector('#modal');

const PHOTOS = [
    'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one_pot_chorizo_and_15611_16x9.jpg',
    'https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-exlarge-tease.jpg'
];

const onModalClick = () => {
    document.body.classList.remove('no-scroll');
    modal.classList.add('hidden');
    modal.innerHTML = '';
};
modal.addEventListener('pointerdown', onModalClick);

const createImage = (path) => {
    const image = document.createElement('img');
    image.src = path;
    return image;
};

let currentIndex = null;
const onImageClick = (event) => {
    currentIndex = event.currentTarget.dataset.index;

    modal.innerHTML = '';

    const image = createImage(event.currentTarget.src);

    image.addEventListener('pointerdown', startSwipe);
    image.addEventListener('pointermove', swiping);
    image.addEventListener('pointerup', stopSwipe);

    modal.appendChild(image);

    document.body.classList.add('no-scroll');
    modal.classList.remove('hidden');
};

for (let [i, imagePath] of PHOTOS.entries()) {
    const image = createImage(imagePath);
    image.dataset.index = i;
    image.addEventListener('pointerdown', onImageClick);
    images.appendChild(image);
}

let originX = null;
function startSwipe(event) {
    event.preventDefault();
    event.stopPropagation();

    originX = event.clientX;

    event.target.setPointerCapture(event.pointerId);
}

function swiping(event) {
    if (originX) {
        let delta = event.clientX - originX;
        const element = event.currentTarget;
        element.style.transform = 'translateX(' + delta + 'px)';
    }
}

function stopSwipe(event) {

    // if (!originX) {
    //     return;
    // }
    //
    const currentX = event.clientX;
    console.log('stop clientX', event.clientX);

    const delta = currentX - originX;
    console.log('stop delta', delta);
    //
    // originX = null;
    // if (Math.abs(delta) < 100) {
    //     event.currentTarget.style.transform = '';
    //     return;
    // }
    //
    let nextIndex = currentIndex;
    if (delta < 0) {
        nextIndex++;
    } else {
        nextIndex--;
    }

    if (nextIndex < 0 || nextIndex === PHOTOS.length) {
        event.currentTarget.style.transform = '';
        return;
    }

    const photoSrc = PHOTOS[nextIndex];
    // const image = createImage(photoSrc);
    //
    // if (delta < 0) {
    //     image.classList.add('animate-next');
    // } else {
    //     image.classList.add('animate-prev');
    // }
    //
    // modal.innerHTML = '';
    //
    // image.addEventListener('pointerdown', startSwipe);
    // image.addEventListener('pointermove', swiping);
    // image.addEventListener('pointerup', stopSwipe);
    //
    // modal.appendChild(image);
    //
    // currentIndex = nextIndex;
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json));
