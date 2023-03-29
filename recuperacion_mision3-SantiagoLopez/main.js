const main = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    console.log(data);

    localStorage.setItem('users', JSON.stringify(data));

    const form = document.getElementById('form');
    const email = document.getElementById('email-ipt');
    const user = document.getElementById('user-ipt');

    form.addEventListener('submit', function send(e) {
        e.preventDefault();

        const cardCtn = document.getElementById('card-ctn');

        const emailVal = email.value;
        const userVal = user.value;

        // localStorage.setItem('email', emailVal);

        // location.href = './index2.html';

        for (let i = 0; i < data.length; i++) {
            const emailElement = data[i].email;
            const usernameElement = data[i].username;
    
            let verifyLogin;
    
            if ((emailElement === emailVal) && (usernameElement === userVal)) {
                verifyLogin = 'si';
                console.log(verifyLogin);

                location.href = './index2.html'

                break;
            } else {
                verifyLogin = 'no';
                console.log(verifyLogin);

                const errorMsg = document.createElement('p');
                errorMsg.textContent = 'Pailas papá verifique las credenciales';
                errorMsg.classList.add('text-red-600');

                cardCtn.appendChild(errorMsg);

                break;
            }
        }

    });


}
main();