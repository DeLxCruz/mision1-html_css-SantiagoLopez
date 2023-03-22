const form = document.getElementById('form');
const nombre = document.getElementById('name');
const lastName = document.getElementById('lastName');
const area = document.getElementById('area');
const user = document.getElementById('user');
const age = document.getElementById('age');
const email = document.getElementById('email');


form.addEventListener('submit', function send(e) {
    e.preventDefault();

    const obj = {
        area: area.value,
        nombre: `${nombre.value} ${lastName.value}`,
        usuario: user.value,
        email: email.value,
        edad: age.value
    };

    const objJSON = JSON.stringify(obj);

    localStorage.setItem("obj", objJSON);

    window.location.href = "./index.html";
    
});
