document.addEventListener("DOMContentLoaded", async () => {
  checkToken();

  document.getElementById("btn-back").addEventListener("click", () => window.location.href = "/ProyectoMascotas/FrontEnd/pets.html");
  document.getElementById("btn-close").addEventListener("click", () => window.location.href = "/ProyectoMascotas/FrontEnd/pets.html");

  const petId = new URLSearchParams(window.location.search).get("id");
  if (!petId) return console.log("ID de mascota no proporcionado.");

  try {
    const response = await fetch(`${API_URL}/api/pets/${petId}`);
    if (!response.ok) throw new Error("Error al obtener la mascota.");

    const pet = await response.json();


    document.getElementById("pet-image").src = pet.photo ? `${API_URL}${pet.photo}` : 'imgs/default-pet.png';
    document.getElementById("pet-name").textContent = pet.name || "Sin nombre";
    document.getElementById("pet-race").textContent = pet.races?.name || "Sin raza";
    document.getElementById("pet-category").textContent = pet.category?.name || "Sin categoría";
    document.getElementById("pet-gender").textContent = pet.gender?.name || "Sin género";
  } catch (error) {
    console.error(error);
    console.log("No se pudo cargar la información de la mascota.");
  }
});
