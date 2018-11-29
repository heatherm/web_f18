function fetchFoo(event) {
    event.stopPropagation();
    event.preventDefault();

    fetch("fetchfoo.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}

const form = document.querySelector("form");
form.addEventListener('submit', fetchFoo);

