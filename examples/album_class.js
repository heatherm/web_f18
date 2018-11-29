class Album {
    constructor(json){
        this.photos = [];
        this.json = json;
        this.currentIndex = null;

        this.imageContainer = document.querySelector('#images');
        this.imageContainer.innerHTML = '';

        this.title = document.querySelector('h2');
        this.title.textContent = this.albumTitle();
        this.modal = new Modal();

        this.showModal = this.showModal.bind(this);
        document.addEventListener('image-click', this.showModal);
    }

    showModal(event){
        this.currentIndex = event.detail.imageIndex;
        this.modal.show(event.detail)
    }

    display(){
        for (let i in this.json) {
            let photo = this.json[i];
            if (photo.hasOwnProperty('url')){
                this.photos.push(photo.url);
            }
        }

        for (let [i, imagePath] of this.photos.entries()) {
            new Image(this.imageContainer, imagePath, i);
        }
    }

    albumTitle(){
        return 'Album: ' + this.json[0].albumId;
    }
}


// function alphabetical(a, b)
// {
//     let A = a.toLowerCase();
//     let B = b.toLowerCase();
//     if (A < B){
//         return -1;
//     } else if (A > B){
//         return  1;
//     }else{
//         return 0;
//     }
// }
//
//  document.querySelector("form").addEventListener('submit', sortColors);
// function sortColors(event){
//     event.preventDefault();
//     PHOTOS.sort(function(a,b) {
//         return alphabetical(a, b);
//     });
//
//     images.innerHTML = '';
//     for (let [i, imagePath] of PHOTOS.entries()) {
//         const image = createImage(imagePath);
//         image.dataset.index = i;
//         image.addEventListener('pointerdown', onImageClick);
//         images.appendChild(image);
//     }
// }



