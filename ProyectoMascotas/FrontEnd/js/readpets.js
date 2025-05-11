document.addEventListener("DOMContentLoaded", async () => {

  // Verificar si el token está presente
  checkToken();  // Esto llama a la función checkToken() de token.js

  document.getElementById("btn-back").addEventListener("click", () => window.location.href = "/ProyectoMascotas/FrontEnd/pets.html");
  document.getElementById("btn-close").addEventListener("click", () => window.location.href = "/ProyectoMascotas/FrontEnd/pets.html");

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
