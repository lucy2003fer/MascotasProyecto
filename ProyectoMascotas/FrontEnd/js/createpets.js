document.addEventListener("DOMContentLoaded", () => {
  const btnSave = document.getElementById("btn-save");
  const petNameInput = document.getElementById("pet-name");
  const petRaceSelect = document.getElementById("pet-race");
  const petCategorySelect = document.getElementById("pet-category");
  const petGenderSelect = document.getElementById("pet-gender");
  const petPhotoInput = document.getElementById("pet-photo");
  const petPhotoPreview = document.getElementById("pet-photo-preview");
  const errorElement = document.getElementById("error");
  
  const btnBack = document.getElementById("btn-back");
  const btnClose = document.getElementById("btn-close"); // Elemento para mostrar mensajes de error


  btnBack.addEventListener("click", () => {
    window.location.href = '/ProyectoMascotas/FrontEnd/pets.html'; // Cambia a la URL de tu página de mascotas
  });

  // Redirigir al hacer clic en el botón "Cerrar"
  btnClose.addEventListener("click", () => {
    window.location.href = '/ProyectoMascotas/FrontEnd/pets.html'; // Cambia a la URL de tu página de mascotas
  });

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

  // Validar los campos antes de enviar el formulario
  const validarCampos = () => {
    const name = petNameInput.value.trim();
    const race = petRaceSelect.value;
    const category = petCategorySelect.value;
    const gender = petGenderSelect.value;
    const photo = petPhotoInput.files[0];

    if (!name || !race || !category || !gender || !photo) {
      errorElement.innerHTML = 'Por favor complete todos los campos y seleccione una foto.';
      return false; // Evitar enviar el formulario si algún campo está vacío
    }

    return true; // Todos los campos están completos
  };

  // Enviar formulario
  btnSave.addEventListener("click", async () => {
    // Validar los campos antes de continuar
    if (!validarCampos()) {
      return; // Detener la ejecución si los campos son inválidos
    }

    const formData = new FormData();
    formData.append("name", petNameInput.value);
    formData.append("race_id", petRaceSelect.value);
    formData.append("category_id", petCategorySelect.value);
    formData.append("gender_id", petGenderSelect.value);
    formData.append("photo", petPhotoInput.files[0]);

    // Obtener el token desde localStorage
    const token = localStorage.getItem('token');

    // Verificar si el token está presente
    if (!token) {
      console.error("No se encontró un token de autenticación");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/pets`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`, // Agregar el token en el encabezado Authorization
        },
        body: formData
      });

      const data = await response.json();
      if (response.ok) {
        location.reload(); // O redirige si lo prefieres
      } else {
        console.error("Error al guardar la mascota:", data.message);
      }
    } catch (err) {
      console.error("Error al guardar la mascota:", err);
    }
  });

  // Inicializar
  cargarSelects();
});
