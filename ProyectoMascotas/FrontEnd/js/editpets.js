document.addEventListener("DOMContentLoaded", async () => {
    const petNameInput = document.getElementById("pet-name");
    const petRaceSelect = document.getElementById("pet-race");
    const petCategorySelect = document.getElementById("pet-category");
    const petGenderSelect = document.getElementById("pet-gender");
    const petPhotoInput = document.getElementById("pet-photo");
    const petPhotoPreview = document.getElementById("pet-photo-preview");
    const btnSave = document.getElementById("btn-save");
    const errorElement = document.getElementById("error");
    const btnBack = document.getElementById("btn-back");
    const btnClose = document.getElementById("btn-close");

    const urlParams = new URLSearchParams(window.location.search);
    const petId = urlParams.get("id");

    if (!petId) {
        alert("ID de mascota no proporcionado.");
        return;
    }

    // Redirecciones
    btnBack.addEventListener("click", () => {
        window.location.href = "/ProyectoMascotas/FrontEnd/pets.html";
    });

    btnClose.addEventListener("click", () => {
        window.location.href = "/ProyectoMascotas/FrontEnd/pets.html";
    });

    // Cargar razas, categorías y géneros
    const cargarSelects = async () => {
        try {
            const [races, categories, genders] = await Promise.all([
                fetch(`${API_URL}/api/races`).then(res => res.json()),
                fetch(`${API_URL}/api/categories`).then(res => res.json()),
                fetch(`${API_URL}/api/genders`).then(res => res.json())
            ]);

            console.log("Razas:", races);
            console.log("Categorías:", categories);
            console.log("Géneros:", genders);

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

    // Cargar datos de la mascota y rellenar el formulario
    const cargarMascota = async () => {
        try {
            const res = await fetch(`${API_URL}/api/pets/${petId}`);
            if (!res.ok) throw new Error("Error al obtener la mascota");
            const pet = await res.json();

            petNameInput.value = pet.name || "";
            petRaceSelect.value = pet.race_id;
            petCategorySelect.value = pet.category_id;
            petGenderSelect.value = pet.gender_id;
            petPhotoPreview.src = pet.photo
                ? `${API_URL}${pet.photo.startsWith("/") ? "" : "/"}${pet.photo}`
                : "imgs/photo-sm-4.svg";
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
            reader.onload = () => {
                petPhotoPreview.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Validación de campos
    const validarCampos = () => {
        const name = petNameInput.value.trim();
        const race = petRaceSelect.value;
        const category = petCategorySelect.value;
        const gender = petGenderSelect.value;

        if (!name || !race || !category || !gender) {
            errorElement.textContent = "Por favor complete todos los campos.";
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
        if (petPhotoInput.files[0]) {
            formData.append("photo", petPhotoInput.files[0]);
        }

        const token = localStorage.getItem("token");
        if (!token) {
            alert("Token no encontrado. Inicie sesión nuevamente.");
            return;
        }

        try {
            const res = await fetch(`${API_URL}/api/pets/${petId}`, {
                method: "PUT", // o "PUT" según tu backend
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });

            const result = await res.json();
            if (res.ok) {
                window.location.href = "/ProyectoMascotas/FrontEnd/pets.html";
            } else {
                errorElement.textContent = result.message || "Error al guardar.";
            }
        } catch (err) {
            console.error("Error al guardar mascota:", err);
            errorElement.textContent = "Error al guardar la mascota.";
        }
    });

    // Inicializar
    await cargarSelects();
    await cargarMascota();
});
