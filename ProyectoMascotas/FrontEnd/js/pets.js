// Función principal para cargar mascotas
async function cargarMascotas() {
  const listarpets = document.getElementById("listar-pets");

  try {
    listarpets.innerHTML = '<div class="loading-message">Cargando mascotas...</div>';
    const response = await fetch(`${API_URL}/api/pets`);
    if (!response.ok) {
      throw new Error(`Error HTTP! estado: ${response.status}`);
    }
    const data = await response.json();
    const mascotas = Array.isArray(data) ? data : data.lista_de_mascotas || [];
    mostrarMascotas(mascotas);
  } catch (error) {
    mostrarError(error);
  }
}

// Mostrar las mascotas usando templates
function mostrarMascotas(mascotas) {
  const listarpets = document.getElementById("listar-pets");

  if (!mascotas || mascotas.length === 0) {
    const noPetsTemplate = document.getElementById("no-pets-template").content.cloneNode(true);
    listarpets.innerHTML = '';
    listarpets.appendChild(noPetsTemplate);
    return;
  }

  listarpets.innerHTML = '';

  mascotas.forEach((mascota, index) => {
    const petTemplate = document.getElementById("pet-card-template").content.cloneNode(true);
    const petCard = petTemplate.querySelector(".pet-card");

    // Alternar clases par/impar
    petCard.classList.add(index % 2 === 0 ? "pet-card-par" : "pet-card-inpar");

    // Llenar datos
    const fotoUrl = mascota.photo
      ? `${API_URL}${mascota.photo.startsWith('/') ? '' : '/'}${mascota.photo}`
      : 'imgs/default-pet.png';

    petCard.querySelector(".pet-image").src = fotoUrl;
    petCard.querySelector(".pet-image").alt = mascota.name || 'Mascota sin nombre';
    petCard.querySelector(".pet-name").textContent = mascota.name || 'Mascota sin nombre';
    petCard.querySelector(".pet-raze").textContent = `Raza ID: ${mascota.race_id || "Sin raza especificada"}`;

    // Configurar botón de ver
    const showBtn = petCard.querySelector(".btn-show");
    showBtn.addEventListener('click', () => {
      window.location.href = `/ProyectoMascotas/FrontEnd/readpets.html?id=${mascota.id}`;
    });

    // Configurar botón de eliminar
    const deleteBtn = petCard.querySelector(".btn-delete");
    deleteBtn.addEventListener('click', () => eliminarMascota(mascota.id));

    listarpets.appendChild(petCard);
  });
}

// Mostrar errores
function mostrarError(error) {
  const listarpets = document.getElementById("listar-pets");
  const errorTemplate = document.getElementById("error-template").content.cloneNode(true);

  errorTemplate.querySelector(".error-title").textContent = "Error al cargar las mascotas";
  errorTemplate.querySelector(".error-detail").textContent = error.message;

  listarpets.innerHTML = '';
  listarpets.appendChild(errorTemplate);
}

// Eliminar mascota
async function eliminarMascota(id) {
  if (!confirm("¿Estás seguro que quieres eliminar esta mascota?")) return;

  try {
    const response = await fetch(`${API_URL}/api/pets/${id}`, {
      method: "DELETE"
    });

    if (response.ok) {
      cargarMascotas();
    } else {
      throw new Error(`Error HTTP! estado: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert(`Error al eliminar mascota: ${error.message}`);
  }
}

// Evento cuando el DOM está cargado
document.addEventListener("DOMContentLoaded", () => {
  // Cargar mascotas al inicio
  cargarMascotas();

  // Configurar botón añadir
  document.getElementById("btn-add").addEventListener('click', () => {
    alert("Funcionalidad para agregar mascota");
  });
});
