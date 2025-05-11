const token = localStorage.getItem('token');
if(!token) window.location.href = '/ProyectoMascotas/FrontEnd/index.html';

function logout(){
    localStorage.removeItem("token");
    window.location.href = "/ProyectoMascotas/FrontEnd/index.html";
}