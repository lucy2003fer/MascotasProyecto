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

    // Mostrar información básica
    document.getElementById("pet-image").src = pet.photo ? `${API_URL}${pet.photo}` : 'imgs/icon-camera.png';
    document.getElementById("pet-name").textContent = pet.name || "Sin nombre";
    document.getElementById("pet-race").textContent = pet.races?.name || "Sin raza";
    document.getElementById("pet-category").textContent = pet.category?.name || "Sin categoría";
    document.getElementById("pet-gender").textContent = pet.gender?.name || "Sin género";

    // Inicializar mapa
    const map = L.map('map').setView([1.852832, -76.048598], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Si la mascota tiene coordenadas
    if (pet.lat && pet.long) {
      // Centrar el mapa en la ubicación de la mascota
      map.setView([pet.lat, pet.long], 15);

      // Crear un marcador personalizado
      const customIcon = L.divIcon({
        className: 'pet-marker',
        html: `<img src="${pet.photo ? `${API_URL}${pet.photo}` : 'imgs/icon-camera.png'}" 
               style="width:40px; height:40px; border-radius:50%; border:2px solid white; object-fit:cover;"/>`,
        iconSize: [40, 40]
      });

      // Añadir marcador al mapa
      L.marker([pet.lat, pet.long], { icon: customIcon })
        .addTo(map)
        .bindPopup(`
          <div style="text-align:center;">
            <img src="${pet.photo ? `${API_URL}${pet.photo}` : 'imgs/icon-camera.png'}" 
                style="width:60px; height:60px; border-radius:50%; border:2px solid #ccc; object-fit:cover; margin-bottom:5px;"/><br>
            <b>${pet.name || 'Mascota'}</b><br>
            ${pet.races?.name || 'Sin raza'} - ${pet.category?.name || 'Sin categoría'}
          </div>`)
        .openPopup();
    } else {
      // Si no hay coordenadas
      document.getElementById("map-message").textContent = "Esta mascota no tiene ubicación registrada";
      document.getElementById("map").style.height = "50px";
    }
  } catch (error) {
    console.error(error);
    console.log("No se pudo cargar la información de la mascota.");
  }
});