// Verifica si el token existe, si no redirige
const checkToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/ProyectoMascotas/FrontEnd/index.html';
  }
  return token;
};

// Función para hacer logout (eliminar el token y redirigir)
function logout() {
  localStorage.removeItem("token");
  window.location.href = "/ProyectoMascotas/FrontEnd/index.html";
}
