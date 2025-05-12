document.addEventListener("DOMContentLoaded", async () => {
  if (!checkToken()) {
    window.location.href = "/ProyectoMascotas/FrontEnd/login.html";
    return;
  }

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


  btnBack.addEventListener("click", () => window.location.href = "/ProyectoMascotas/FrontEnd/pets.html");
  btnClose.addEventListener("click", () => window.location.href = "/ProyectoMascotas/FrontEnd/pets.html");


  const cargarSelects = async () => {
    try {
      const token = localStorage.getItem('token');
      
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
      
      const [racesRes, categoriesRes, gendersRes] = await Promise.all([
        fetch(`${API_URL}/api/races`, { headers }),
        fetch(`${API_URL}/api/categories`, { headers }),
        fetch(`${API_URL}/api/genders`, { headers })
      ]);

      if (!racesRes.ok || !categoriesRes.ok || !gendersRes.ok) {
        throw new Error('Error al cargar datos');
      }

      const races = await racesRes.json();
      const categories = await categoriesRes.json();
      const genders = await gendersRes.json();

      if (!Array.isArray(races) || !Array.isArray(categories) || !Array.isArray(genders)) {
        throw new Error('Datos recibidos no son válidos');
      }

      races.forEach(r => petRaceSelect.add(new Option(r.name, r.id)));
      categories.forEach(c => petCategorySelect.add(new Option(c.name, c.id)));
      genders.forEach(g => petGenderSelect.add(new Option(g.name, g.id)));
    } catch (err) {
      console.error("Error cargando selects:", err);
      errorElement.textContent = 'Error al cargar datos. Intente recargar la página.';

      if (err.message.includes('401') || err.message.includes('403')) {
        window.location.href = "/ProyectoMascotas/FrontEnd/login.html";
      }
    }
  };


  petPhotoInput.addEventListener("change", () => {
    const file = petPhotoInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => petPhotoPreview.src = reader.result;
      reader.readAsDataURL(file);
    }
  });


  const validarCampos = () => {
    errorElement.textContent = '';
    
    if (!petNameInput.value.trim()) {
      errorElement.textContent = 'El nombre es requerido';
      return false;
    }
    
    if (!petRaceSelect.value) {
      errorElement.textContent = 'Debe seleccionar una raza';
      return false;
    }
    
    if (!petPhotoInput.files[0]) {
      errorElement.textContent = 'Debe seleccionar una foto';
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

      if (response.ok) { window.location.href = "/ProyectoMascotas/FrontEnd/pets.html";}
      else {const error = await response.json(); errorElement.textContent = error.message || 'Error al guardar la mascota';}
    } catch (err) {
      console.error("Error al guardar la mascota:", err);
      errorElement.textContent = 'Error de conexión. Intente nuevamente.';
    }
  });


  cargarSelects();
});
