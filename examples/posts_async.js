async function doPost(event) {
    event.stopPropagation();
    event.preventDefault();

    const fdata = new FormData(document.querySelector('form'));

    let jsonObject = {};

    for (const [key, value]  of fdata.entries()) {
        jsonObject[key] = value;
    }

    const request = new Request('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(jsonObject),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    const response = await fetch(request);
    const json = await response.json();

    console.log(json)
}

document.querySelector("#foo input[type='submit']")
    .addEventListener('click', doPost);

