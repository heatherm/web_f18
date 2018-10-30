const onModalClick = () => {
    document.body.classList.remove('no-scroll');
    modal.classList.add('hidden');
    modal.innerHTML = '';
};

const modal = document.querySelector('#modal');
// modal.addEventListener('pointerdown', onModalClick);


const images = document.querySelector('#images');

const PHOTOS = [
    'work/brand.jpeg',
    "work/download.jpeg"
];

const createImage = (path) => {
    const image = document.createElement('img');
    image.src = path;
    return image;
};

let currentIndex = null;
const onImageClick = (event) => {
    currentIndex = event.currentTarget.dataset.index;
    const image = createImage(event.currentTarget.src);

    modal.innerHTML = '';
    // image.addEventListener('pointerdown', startSwipe);
    // image.addEventListener('pointermove', swiping);
    // image.addEventListener('pointerup', stopSwipe);
    // image.addEventListener('pointercancel', stopSwipe);

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
//
// function showNext(event) {
//     if (event.key === 'Escape' || event.key === 'Esc' || event.key === 27) {
//         modal.classList.add('hidden');
//         modal.innerHTML = '';
//         return;
//     }
//
//     if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
//         return;
//     }
//     let nextIndex = currentIndex;
//     let animate = null;
//     if (event.key === 'ArrowLeft') {
//         animate = 'left';
//         nextIndex--;
//     } else {
//         animate = 'right';
//         nextIndex++;
//     }
//
//     if (nextIndex < 0 || nextIndex === PHOTOS.length) {
//         return;
//     }
//     console.log('shownext');
//
//     const photoSrc = PHOTOS[nextIndex];
//     modal.innerHTML = '';
//     const image = createImage(photoSrc);
//
//     if (animate === 'right') {
//         image.classList.add('animate-next');
//     } else {
//         image.classList.add('animate-prev');
//     }
//     modal.appendChild(image);
//     currentIndex = nextIndex;
// }
//
let originX = null;
function startSwipe(event) {
    console.log('startswipe current', currentIndex);
    console.log('startSwipe');

    event.preventDefault();
    event.stopPropagation();

    originX = event.clientX;
    event.target.setPointerCapture(event.pointerId);
}

function swiping(event) {
    console.log('swiping');
    console.log('swiping originX', originX);
    if (originX) {
        const currentX = event.clientX;
        console.log('swiping clientX', event.clientX);
        const delta = currentX - originX;
        console.log('swiping delta', delta);

        const element = event.currentTarget;
        element.style.transform = 'translateX(' + delta + 'px)';
    }
}

function stopSwipe(event) {
    console.log('stop swipe current', currentIndex);

    console.log('stopSwipe');
    if (!originX) {
        return;
    }

    const currentX = event.clientX;
    console.log('stop clientX', event.clientX);

    const delta = currentX - originX;
    console.log('stop delta', delta);

    originX = null;
    if (Math.abs(delta) < 100) {
        event.currentTarget.style.transform = '';
        return;
    }

    let nextIndex = currentIndex;
    console.log('delta', delta);
    console.log('delta < 0', delta < 0);
    if (delta < 0) {

        nextIndex++;
    } else {

        nextIndex--;
    }

    if (nextIndex < 0 || nextIndex === PHOTOS.length) {
        console.log('nextIndex', nextIndex);
        console.log('photos', PHOTOS.length);
        event.currentTarget.style.transform = '';
        return;
    }

    const photoSrc = PHOTOS[nextIndex];
    console.log('photosrc', photoSrc);
    const image = createImage(photoSrc);


    console.log('delta2', delta);
    if (delta < 0) {
        image.classList.add('animate-next');
    } else {
        image.classList.add('animate-prev');
    }

    modal.innerHTML = '';

    image.addEventListener('pointerdown', startSwipe);
    image.addEventListener('pointermove', swiping);
    image.addEventListener('pointerup', stopSwipe);
    image.addEventListener('pointercancel', stopSwipe);

    modal.appendChild(image);

    currentIndex = nextIndex;
}