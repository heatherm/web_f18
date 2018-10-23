const modal = document.querySelector('#modal');
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

const onImageClick = (event) => {
    const image = createImage(event.currentTarget.src);
    modal.appendChild(image);
    modal.classList.remove('hidden');
};

for (let imagePath of PHOTOS) {
    const image = createImage(imagePath);
    image.addEventListener('click', onImageClick);
    images.appendChild(image);
}

