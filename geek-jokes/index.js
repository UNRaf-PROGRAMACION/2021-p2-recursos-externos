const button = document.getElementById('button');

window.onload = () => {
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(res => {return res.json()})
    .then(response => {
        document.getElementById('joke').innerText = response.joke;
    })
    .catch(error => {
        alert('Ocurrio un problema. '+error);
    })
};

button.addEventListener('click', () => {
    window.location.reload();
});
