const token = localStorage.getItem('token');
if (token) window.location.href = '/ProyectoMascotas/FrontEnd/pets.html';

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', loginMJC);

async function loginMJC(e) {
    e.preventDefault();

    const errorElement = document.getElementById("error");

    try {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validación
        if (!email || !password) {
            errorElement.innerHTML = 'Por favor complete todos los campos';
            return;
        }

        const data = { email, password };

        const response = await fetch(`${API_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (!response.ok) {
            errorElement.innerHTML = responseData.message || 'Credenciales incorrectas';
            return;
        }


        localStorage.setItem('token', responseData.token);


        window.location.href = '/ProyectoMascotas/FrontEnd/pets.html';

    } catch (error) {
        console.error('Error:', error);
        errorElement.innerHTML = 'Error en la conexión al servidor';
    }
}
