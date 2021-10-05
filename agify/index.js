const nameInput = document.getElementById('name');
const button = document.getElementById('button');

const handleClick = () => {
    // https://api.agify.io/?name=nicolas
    
    fetch('https://api.agify.io/?name='+nameInput.value)
    .then(res => {
        console.log(res);
        return res.json()
    })
    .then(response => {
        console.log(response);
        alert(`${response.name} tienes ${response.age} años de juventud...`);
    })
    .catch(error => {
        alert('Ocurrio un problema. '+error);
    })
}

button.addEventListener("click", handleClick);