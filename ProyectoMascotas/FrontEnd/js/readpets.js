document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const petId = urlParams.get("id");

  if (!petId) {
    alert("ID de mascota no proporcionado.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/api/pets/${petId}`);
    if (!response.ok) throw new Error(`Estado HTTP: ${response.status}`);
    
    const pet = await response.json();

    document.getElementById("pet-image").src = pet.photo 
      ? `${API_URL}${pet.photo.startsWith('/') ? '' : '/'}${pet.photo}`
      : 'imgs/default-pet.png';

    document.getElementById("pet-name").textContent = pet.name || "Sin nombre";
    document.getElementById("pet-race").textContent = pet.race_id || "Sin raza";
    document.getElementById("pet-category").textContent = pet.category_id || "Sin categoría";
    document.getElementById("pet-gender").textContent = pet.gender_id || "Sin género";

  } catch (error) {
    console.error("Error al obtener datos de la mascota:", error);
    alert("No se pudo cargar la información de la mascota.");
  }
});
