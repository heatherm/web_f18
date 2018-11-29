function doPost(event) {
    event.stopPropagation();
    event.preventDefault();

    const formData = new FormData(document.querySelector('form'));
    console.log(Array.from(formData.entries()));

    let jsonObject = {};
    for (const [key, value]  of formData.entries()) {
        jsonObject[key] = value;
    }

    console.log(jsonObject);

    const request = new Request('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        //serialize
        body: JSON.stringify({
            title: document.querySelector('input').value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    fetch(request)
        //deserialize
        .then(response => response.json())
        .then(data => { console.log(data); })

}

document.querySelector("#foo input[type='submit']")
    .addEventListener('click', doPost);

