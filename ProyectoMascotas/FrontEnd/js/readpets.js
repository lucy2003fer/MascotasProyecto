document.addEventListener("DOMContentLoaded", async () => {
    const btnBack = document.getElementById("btn-back");
  const btnClose = document.getElementById("btn-close");


  const goBackOrClose = () => window.location.href = '/ProyectoMascotas/FrontEnd/pets.html';
  btnBack.addEventListener("click", goBackOrClose);
  btnClose.addEventListener("click", goBackOrClose);
  // Verificar si el token está presente, si no redirige
  const token = localStorage.getItem('token');
  if (!token) return window.location.href = '/ProyectoMascotas/FrontEnd/index.html';

  // Obtener ID de la mascota desde la URL
  const petId = new URLSearchParams(window.location.search).get("id");
  if (!petId) return console.log("ID de mascota no proporcionado.");

  try {
    // Obtener los datos de la mascota
    const response = await fetch(`${API_URL}/api/pets/${petId}`);
    if (!response.ok) throw new Error("Error al obtener la mascota.");

    const pet = await response.json();

    // Asignar los datos a los elementos HTML
    document.getElementById("pet-image").src = pet.photo ? `${API_URL}${pet.photo}` : 'imgs/default-pet.png';
    document.getElementById("pet-name").textContent = pet.name || "Sin nombre";
    document.getElementById("pet-race").textContent = pet.race_id || "Sin raza";
    document.getElementById("pet-category").textContent = pet.category_id || "Sin categoría";
    document.getElementById("pet-gender").textContent = pet.gender_id || "Sin género";
  } catch (error) {
    console.error(error);
    console.log("No se pudo cargar la información de la mascota.");
  }
});
