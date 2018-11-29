function doFetch(albumId) {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + albumId)
        .then(response => response.json())
        .then(json => new Album(json).display());
}

doFetch('1');

document.querySelector('#album-select').onchange=refetchAlbumPhotos;

function refetchAlbumPhotos(event) {
    doFetch(event.target.value);
}
