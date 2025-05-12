const token = localStorage.getItem("token");

const fetchPets = async () => {
  const res = await fetch(`${API_URL}/api/pets`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return await res.json();
};

const contarPorCampo = (mascotas, campo) => {
  return mascotas.reduce((acc, m) => {
    const key = m[campo]?.name || "Desconocido";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
};

const crearGrafica = (ctxId, etiquetas, datos, titulo) => {
  new Chart(document.getElementById(ctxId), {
    type: "bar",
    data: {
      labels: etiquetas,
      datasets: [{
        label: titulo,
        data: datos,
        backgroundColor: "rgba(54, 162, 235, 0.6)"
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });
};

const generarPDFListado = (mascotas) => {
  const doc = new jspdf.jsPDF();
  doc.text("Listado de Mascotas", 20, 20);
  doc.autoTable({
    head: [["Nombre", "Raza", "Categoría", "Género"]],
    body: mascotas.map(m => [
      m.name,
      m.races?.name || "-",
      m.category?.name || "-",
      m.gender?.name || "-"
    ])
  });
  doc.save("listado-mascotas.pdf");
};

const generarPDFEstadistico = (mascotas) => {
  const total = mascotas.length;
  const porGenero = contarPorCampo(mascotas, "gender");
  const porCategoria = contarPorCampo(mascotas, "category");

  const doc = new jspdf.jsPDF();
  doc.text("Resumen Estadístico", 20, 20);
  doc.text(`Total de mascotas: ${total}`, 20, 30);
  doc.text("Por Género:", 20, 40);
  Object.entries(porGenero).forEach(([k, v], i) =>
    doc.text(`${k}: ${v}`, 30, 50 + i * 10)
  );
  doc.text("Por Categoría:", 20, 80);
  Object.entries(porCategoria).forEach(([k, v], i) =>
    doc.text(`${k}: ${v}`, 30, 90 + i * 10)
  );

  doc.save("resumen-estadistico.pdf");
};

document.addEventListener("DOMContentLoaded", async () => {
  const mascotas = await fetchPets();

  const porCategoria = contarPorCampo(mascotas, "category");
  crearGrafica(
    "grafica-categorias",
    Object.keys(porCategoria),
    Object.values(porCategoria),
    "Mascotas por Categoría"
  );

  const porGenero = contarPorCampo(mascotas, "gender");
  crearGrafica(
    "grafica-generos",
    Object.keys(porGenero),
    Object.values(porGenero),
    "Mascotas por Género"
  );

  document.getElementById("btn-reporte-listado").onclick = () =>
    generarPDFListado(mascotas);
  document.getElementById("btn-reporte-estadistico").onclick = () =>
    generarPDFEstadistico(mascotas);
});

elements.btnBack.onclick = () => window.location.href = "/ProyectoMascotas/FrontEnd/reportes.html";