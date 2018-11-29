// Objects:


 // fetching new data
 // creating an album


// holding photos
// cares when someone says "I got clicked"
// Tells the modal to show an image
// making images from the data

//  says "I got clicked"

// Clears the contents of the modal
// Adds an image to the modal
// Removes classes from the modal

const images = document.querySelector('#images');
let PHOTOS = [];

//Modal stuff
const modal = document.querySelector('#modal');
const onModalClick = () => {
    document.body.classList.remove('no-scroll');
    modal.classList.add('hidden');
    modal.innerHTML = '';
};
modal.addEventListener('pointerdown', onModalClick);

// ??? Stuff
const createImage = (path) => {
    const image = document.createElement('img');
    image.src = path;
    return image;
};

// Image stuff
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


// Album stuff?
function addPhotos(json){
    PHOTOS = [];
    images.innerHTML = '';
    let title = document.querySelector('h2');
    title.textContent = 'Album: ' + json[0].albumId;


    for (let i in json) {
        let photo = json[i];
        if (photo.hasOwnProperty('url')){
            PHOTOS.push(photo.url);
        }
    }

    for (let [i, imagePath] of PHOTOS.entries()) {
        const image = createImage(imagePath);
        image.dataset.index = i;
        image.addEventListener('pointerdown', onImageClick);
        images.appendChild(image);
    }
}

// Choreo stuff
function doFetch(albumId) {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + albumId)
        .then(response => response.json())
        .then(json => new Album(json).display());
}

document.querySelector('#album-select').onchange=refetchAlbumPhotos;

function refetchAlbumPhotos(event) {
    doFetch(event.target.value);
}

doFetch('1');