document.addEventListener("DOMContentLoaded", () => {
  // Datos simulados
  const usuarios = [
    { nombre: "Christian Keim", ci: "1340130", email: "ckeim@example.com", rol: "Docente", estado: "Activo" },
    { nombre: "Laura Benítez", ci: "1234567", email: "laura.b@example.com", rol: "Administrador", estado: "Suspendido" },
  ];

  const concursos = [
    { titulo: "Concurso Educación Inicial", fecha: "2025-07-20", vacancias: 12 },
    { titulo: "Concurso Matemática Media", fecha: "2025-07-25", vacancias: 5 },
  ];

  const documentos = [
    { tipo: "Puntajes", archivo: "puntajes_christian.pdf", estado: "Verificado" },
    { tipo: "Certificación", archivo: "certificado_laura.pdf", estado: "Pendiente" },
  ];

  // Mostrar totales
  document.getElementById("total-usuarios").textContent = usuarios.length;
  document.getElementById("total-concursos").textContent = concursos.length;
  document.getElementById("total-documentos").textContent = documentos.length;

  // Cargar tabla de usuarios
  const tablaUsuarios = document.getElementById("tabla-usuarios");
  usuarios.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.nombre}</td>
      <td>${user.ci}</td>
      <td>${user.email}</td>
      <td>${user.rol}</td>
      <td>${user.estado}</td>
      <td>
        <button class="btn-icon"><i class="fas fa-edit"></i></button>
        <button class="btn-icon"><i class="fas fa-trash"></i></button>
      </td>
    `;
    tablaUsuarios.appendChild(row);
  });

  // Cargar concursos
  const listaConcursos = document.getElementById("lista-concursos");
  concursos.forEach(concurso => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h4>${concurso.titulo}</h4>
      <p><strong>Fecha:</strong> ${concurso.fecha}</p>
      <p><strong>Vacancias:</strong> ${concurso.vacancias}</p>
      <button class="btn btn-outline btn-sm">Ver</button>
    `;
    listaConcursos.appendChild(card);
  });

  // Cargar documentos
  const documentosAdmin = document.getElementById("documentos-admin");
  documentos.forEach(doc => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h4>${doc.tipo}</h4>
      <p>${doc.archivo}</p>
      <span class="badge ${doc.estado === 'Verificado' ? 'badge-success' : 'badge-warning'}">${doc.estado}</span>
      <div class="actions">
        <button class="btn-icon"><i class="fas fa-eye"></i></button>
        <button class="btn-icon"><i class="fas fa-download"></i></button>
      </div>
    `;
    documentosAdmin.appendChild(card);
  });

  // Guardar configuración
  document.querySelector(".config-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Configuración guardada correctamente.");
  });
});
