document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = "/ProyectoMascotas/FrontEnd/login.html";
    return;
  }

  const petId = new URLSearchParams(window.location.search).get("id");
  if (!petId) {
    alert("ID de mascota no proporcionado.");
    window.location.href = "/ProyectoMascotas/FrontEnd/pets.html";
    return;
  }

  const el = id => document.getElementById(id);
  const elements = {
    name: el("pet-name"),
    race: el("pet-race"),
    category: el("pet-category"),
    gender: el("pet-gender"),
    photo: el("pet-photo"),
    photoPreview: el("pet-photo-preview"),
    saveBtn: el("btn-save"),
    error: el("error"),
    btnBack: el("btn-back"),
    btnClose: el("btn-close"),
    lat: el("pet-lat"),
    long: el("pet-long")
  };

  elements.btnBack.onclick = () => window.location.href = "/ProyectoMascotas/FrontEnd/pets.html";
  elements.btnClose.onclick = () => window.location.href = "/ProyectoMascotas/FrontEnd/pets.html";

  // Inicializar mapa


  const map = L.map('map').setView([1.852832, -76.048598], 13); 
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  let marker = null;

  // Manejar clics en el mapa
  map.on('click', (e) => {
    const { lat, lng } = e.latlng;
    elements.lat.value = lat;
    elements.long.value = lng;
    
    // Eliminar marcador anterior si existe
    if (marker) {
      map.removeLayer(marker);
    }
    
    // Añadir nuevo marcador
    marker = L.marker([lat, lng]).addTo(map)
      .bindPopup("Nueva ubicación de la mascota")
      .openPopup();
  });

  const loadSelect = async (url, select) => {
    try {
      const res = await fetch(`${API_URL}${url}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      select.innerHTML = `<option value="">Seleccione...</option>` +
        data.map(item => `<option value="${item.id}">${item.name}</option>`).join('');
    } catch (err) {
      elements.error.textContent = `Error cargando ${url.split('/').pop()}`;
    }
  };

  const loadPet = async () => {
    try {
      const res = await fetch(`${API_URL}/api/pets/${petId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const pet = await res.json();
      
      elements.name.value = pet.name || "";
      elements.race.value = pet.race_id || "";
      elements.category.value = pet.category_id || "";
      elements.gender.value = pet.gender_id || "";
      elements.photoPreview.src = pet.photo ? `${API_URL}${pet.photo}` : "imgs/default-pet.jpg";
      
      // Si la mascota tiene ubicación, centrar el mapa allí
      if (pet.lat && pet.long) {
        elements.lat.value = pet.lat;
        elements.long.value = pet.long;
        map.setView([pet.lat, pet.long], 15);
        
        // Crear marcador con la foto de la mascota
        const customIcon = L.divIcon({
          className: 'pet-marker',
          html: `<img src="${pet.photo ? `${API_URL}${pet.photo}` : 'imgs/default-pet.jpg'}" 
                 style="width:40px; height:40px; border-radius:50%; border:2px solid white; object-fit:cover;"/>`,
          iconSize: [40, 40]
        });
        
        marker = L.marker([pet.lat, pet.long], { icon: customIcon })
          .addTo(map)
          .bindPopup(`<b>${pet.name || 'Mascota'}</b><br>Ubicación actual`)
          .openPopup();
      }
    } catch (err) {
      elements.error.textContent = "Error cargando mascota";
    }
  };

  elements.photo.addEventListener("change", (e) => {
    if (e.target.files[0]) {
      elements.photoPreview.src = URL.createObjectURL(e.target.files[0]);
    }
  });

  elements.saveBtn.addEventListener("click", async () => {
    if (!elements.name.value.trim()) {
      elements.error.textContent = "El nombre es requerido";
      return;
    }
    
    const formData = new FormData();
    formData.append("name", elements.name.value);
    formData.append("race_id", elements.race.value);
    formData.append("category_id", elements.category.value);
    formData.append("gender_id", elements.gender.value);
    
    // Solo añadir lat/long si tienen valor
    if (elements.lat.value && elements.long.value) {
      formData.append("lat", elements.lat.value);
      formData.append("long", elements.long.value);
    }

    if (elements.photo.files[0]) {
      formData.append("photo", elements.photo.files[0]);
    }

    try {
      const res = await fetch(`${API_URL}/api/pets/${petId}`, {
        method: "PATCH", 
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });

      if (res.ok) {
        window.location.href = "/ProyectoMascotas/FrontEnd/pets.html";
      } else {
        const error = await res.json();
        elements.error.textContent = error.message || "Error al guardar los cambios";
      }
    } catch (err) {
      console.error("Error al guardar:", err);
      elements.error.textContent = "Error de conexión al guardar";
    }
  });

  try {
    await Promise.all([
      loadSelect("/api/races", elements.race),
      loadSelect("/api/categories", elements.category),
      loadSelect("/api/genders", elements.gender),
      loadPet()
    ]);
  } catch (err) {
    console.error("Error en inicialización:", err);
  }
});
