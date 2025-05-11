document.addEventListener("DOMContentLoaded", async () => {
  // Verificar si el token está presente
  checkToken(); // Esto se llama desde token.js

  const btnBack = document.getElementById("btn-back");
  const btnClose = document.getElementById("btn-close");
  const btnSave = document.getElementById("btn-save");
  const petNameInput = document.getElementById("pet-name");
  const petRaceSelect = document.getElementById("pet-race");
  const petCategorySelect = document.getElementById("pet-category");
  const petGenderSelect = document.getElementById("pet-gender");
  const petPhotoInput = document.getElementById("pet-photo");
  const petPhotoPreview = document.getElementById("pet-photo-preview");
  const errorElement = document.getElementById("error");

  // Redirigir al hacer clic en "Volver" o "Cerrar"
  btnBack.addEventListener("click", () => window.location.href = "/ProyectoMascotas/FrontEnd/pets.html");
  btnClose.addEventListener("click", () => window.location.href = "/ProyectoMascotas/FrontEnd/pets.html");

  // Cargar razas, categorías y géneros
  const cargarSelects = async () => {
    try {
      const [races, categories, genders] = await Promise.all([
        fetch(`${API_URL}/api/races`).then(res => res.json()),
        fetch(`${API_URL}/api/categories`).then(res => res.json()),
        fetch(`${API_URL}/api/genders`).then(res => res.json())
      ]);
      races.forEach(r => petRaceSelect.add(new Option(r.name, r.id)));
      categories.forEach(c => petCategorySelect.add(new Option(c.name, c.id)));
      genders.forEach(g => petGenderSelect.add(new Option(g.name, g.id)));
    } catch (err) {
      console.error("Error cargando selects:", err);
    }
  };

  // Previsualizar foto
  petPhotoInput.addEventListener("change", () => {
    const file = petPhotoInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => petPhotoPreview.src = reader.result;
      reader.readAsDataURL(file);
    }
  });

  // Validar campos
  const validarCampos = () => {
    if ([petNameInput.value.trim(), petRaceSelect.value, petCategorySelect.value, petGenderSelect.value, petPhotoInput.files[0]].includes("")) {
      errorElement.textContent = 'Por favor complete todos los campos y seleccione una foto.';
      return false;
    }
    return true;
  };

  // Guardar mascota
  btnSave.addEventListener("click", async () => {
    if (!validarCampos()) return;

    const formData = new FormData();
    formData.append("name", petNameInput.value);
    formData.append("race_id", petRaceSelect.value);
    formData.append("category_id", petCategorySelect.value);
    formData.append("gender_id", petGenderSelect.value);
    formData.append("photo", petPhotoInput.files[0]);

    try {
      const response = await fetch(`${API_URL}/api/pets`, {
        method: "POST",
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` },
        body: formData
      });

      if (response.ok) location.reload(); // O redirigir
      else console.error("Error al guardar la mascota:", await response.json());
    } catch (err) {
      console.error("Error al guardar la mascota:", err);
    }
  });

  // Inicializar selects
  cargarSelects();
});
