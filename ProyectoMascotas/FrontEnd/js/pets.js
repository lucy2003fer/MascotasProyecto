// Función principal para cargar mascotas con autenticación
async function cargarMascotas() {
  const listarpets = document.getElementById("listar-pets");

  try {
    const response = await fetch(`${API_URL}/api/pets`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    const mascotas = Array.isArray(data) ? data : data.lista_de_mascotas || [];

    if (mascotas.length === 0) {
      listarpets.innerHTML = '<div class="no-pets-message"><h3>No hay mascotas registradas</h3></div>';
      return;
    }

    listarpets.innerHTML = mascotas.map((mascota, index) => `
      <div class="pet-card ${index % 2 === 0 ? 'pet-card-par' : 'pet-card-inpar'}">
        <div class="imgPets">
          <img class="pet-image" src="${mascota.photo ? `${API_URL}${mascota.photo.startsWith('/') ? '' : '/'}${mascota.photo}` : 'imgs/default-pet.png'}" alt="${mascota.name || 'Mascota sin nombre'}">
        </div>
        <div class="pet-info">
          <h3 class="pet-name">${mascota.name || 'Mascota sin nombre'}</h3>
          <p class="pet-raze">${mascota.races?.name || "Sin raza especificada"}</p>
        </div>
        <div class="buttons-options">
          <button class="btn-show" onclick="window.location.href='/ProyectoMascotas/FrontEnd/readpets.html?id=${mascota.id}'">
            <img src="imgs/btn-show.svg" alt="Ver">
          </button>
          <button class="btn-edit" onclick="window.location.href='/ProyectoMascotas/FrontEnd/editpets.html?id=${mascota.id}'">
            <img src="imgs/btn-edit.svg" alt="Editar">
          </button>
          <button class="btn-delete" onclick="eliminarMascota(${mascota.id})">
            <img src="imgs/btn-delete.svg" alt="Eliminar">
          </button>
        </div>
      </div>
    `).join('');

  } catch (error) {
    listarpets.innerHTML = `
      <div class="error-message">
        <h3 class="error-title">Error al cargar las mascotas</h3>
        <p class="error-detail">${error.message}</p>
      </div>
    `;
  }
}

// Eliminar mascota con autenticación
async function eliminarMascota(id) {
  if (!confirm("¿Estás seguro que quieres eliminar esta mascota?")) return;

  try {
    const response = await fetch(`${API_URL}/api/pets/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    cargarMascotas();
  } catch (error) {
    console.log(`Error al eliminar mascota: ${error.message}`);
  }
}

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  cargarMascotas();
  document.getElementById("btn-close").addEventListener('click', logout);
  document.getElementById("btn-add").addEventListener('click', () => {
    window.location.href = "/ProyectoMascotas/FrontEnd/createpets.html";
  });
});
