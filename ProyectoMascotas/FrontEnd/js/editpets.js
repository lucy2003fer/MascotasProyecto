document.addEventListener("DOMContentLoaded", async () => {
  // Verificación del token
  const token = checkToken(); // Usamos la función checkToken

  // Obtener el ID de la mascota
  const petId = new URLSearchParams(window.location.search).get("id");
  if (!petId) return alert("ID de mascota no proporcionado.");

  // Elementos del DOM
  const petNameInput = document.getElementById("pet-name");
  const petRaceSelect = document.getElementById("pet-race");
  const petCategorySelect = document.getElementById("pet-category");
  const petGenderSelect = document.getElementById("pet-gender");
  const petPhotoInput = document.getElementById("pet-photo");
  const petPhotoPreview = document.getElementById("pet-photo-preview");
  const btnSave = document.getElementById("btn-save");
  const errorElement = document.getElementById("error");

  // Redirigir al hacer clic en "Volver" o "Cerrar"
  document.getElementById("btn-back").addEventListener("click", () => window.location.href = "/ProyectoMascotas/FrontEnd/pets.html");
  document.getElementById("btn-close").addEventListener("click", () => window.location.href = "/ProyectoMascotas/FrontEnd/pets.html");

  // Cargar razas, categorías y géneros
  const loadSelects = async () => {
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

  // Cargar los datos de la mascota
  const loadPet = async () => {
    try {
      const res = await fetch(`${API_URL}/api/pets/${petId}`);
      if (!res.ok) throw new Error("Error al obtener la mascota");
      const pet = await res.json();
      petNameInput.value = pet.name || "";
      petRaceSelect.value = pet.race_id;
      petCategorySelect.value = pet.category_id;
      petGenderSelect.value = pet.gender_id;
      petPhotoPreview.src = pet.photo ? `${API_URL}${pet.photo}` : "imgs/photo-sm-4.svg";
    } catch (err) {
      console.error("Error al cargar mascota:", err);
      alert("No se pudo cargar la información de la mascota.");
    }
  };

  // Previsualizar imagen
  petPhotoInput.addEventListener("change", () => {
    const file = petPhotoInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => petPhotoPreview.src = reader.result;
      reader.readAsDataURL(file);
    }
  });

  // Validar campos
  const validateFields = () => {
    if (![petNameInput.value.trim(), petRaceSelect.value, petCategorySelect.value, petGenderSelect.value].every(Boolean)) {
      errorElement.textContent = "Por favor complete todos los campos.";
      return false;
    }
    return true;
  };

  // Guardar mascota
  btnSave.addEventListener("click", async () => {
    if (!validateFields()) return;

    const formData = new FormData();
    formData.append("name", petNameInput.value);
    formData.append("race_id", petRaceSelect.value);
    formData.append("category_id", petCategorySelect.value);
    formData.append("gender_id", petGenderSelect.value);
    if (petPhotoInput.files[0]) formData.append("photo", petPhotoInput.files[0]);

    try {
      const res = await fetch(`${API_URL}/api/pets/${petId}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });

      if (res.ok) window.location.href = "/ProyectoMascotas/FrontEnd/pets.html";
      else {
        const result = await res.json();
        errorElement.textContent = result.message || "Error al guardar.";
      }
    } catch (err) {
      console.error("Error al guardar mascota:", err);
      errorElement.textContent = "Error al guardar la mascota.";
    }
  });

  // Inicializar
  await loadSelects();
  await loadPet();
});
