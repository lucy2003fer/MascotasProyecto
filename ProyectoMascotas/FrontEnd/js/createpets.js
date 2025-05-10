document.addEventListener("DOMContentLoaded", () => {
  const btnSave = document.getElementById("btn-save");
  const petNameInput = document.getElementById("pet-name");
  const petRaceSelect = document.getElementById("pet-race");
  const petCategorySelect = document.getElementById("pet-category");
  const petGenderSelect = document.getElementById("pet-gender");
  const petPhotoInput = document.getElementById("pet-photo");
  const petPhotoPreview = document.getElementById("pet-photo-preview");

  // Cargar datos de razas, categorías y géneros
  const cargarSelects = async () => {
    try {
      const [races, categories, genders] = await Promise.all([
        fetch(`${API_URL}/api/races`).then(res => res.json()),
        fetch(`${API_URL}/api/categories`).then(res => res.json()),
        fetch(`${API_URL}/api/genders`).then(res => res.json())
      ]);

      races.forEach(r => {
        const option = document.createElement("option");
        option.value = r.id;
        option.textContent = r.name;
        petRaceSelect.appendChild(option);
      });

      categories.forEach(c => {
        const option = document.createElement("option");
        option.value = c.id;
        option.textContent = c.name;
        petCategorySelect.appendChild(option);
      });

      genders.forEach(g => {
        const option = document.createElement("option");
        option.value = g.id;
        option.textContent = g.name;
        petGenderSelect.appendChild(option);
      });
    } catch (err) {
      console.error("Error cargando selects:", err);
    }
  };

  // Previsualizar imagen
  petPhotoInput.addEventListener("change", () => {
    const file = petPhotoInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        petPhotoPreview.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // Enviar formulario
  btnSave.addEventListener("click", async () => {
    const formData = new FormData();
    formData.append("name", petNameInput.value);
    formData.append("race_id", petRaceSelect.value);
    formData.append("category_id", petCategorySelect.value);
    formData.append("gender_id", petGenderSelect.value);
    formData.append("photo", petPhotoInput.files[0]);
    
    // ID de usuario (puedes obtenerlo desde un token, o almacenado en localStorage si ya tienes login)
    const userId = 1; // Cambia esto según tu lógica
    formData.append("user_id", userId);

    try {
      const response = await fetch(`${API_URL}/api/pets`, {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (response.ok) {
        location.reload(); // O redirige si lo prefieres
      } else {
      }
    } catch (err) {
      console.error("Error al guardar la mascota:", err);
    }
  });

  // Inicializar
  cargarSelects();
});
