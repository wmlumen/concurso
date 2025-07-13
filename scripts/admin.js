// admin.js

document.addEventListener("DOMContentLoaded", function () {
  // Datos simulados para usuarios activos por día
  const dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const usuariosActivos = [5, 8, 12, 6, 15, 9, 3];

  const ctx = document.getElementById("usuarios-activos-chart").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: dias,
      datasets: [
        {
          label: "Usuarios Activos por Día",
          data: usuariosActivos,
          borderColor: "#3498db",
          backgroundColor: "rgba(52,152,219,0.2)",
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: "#2980b9"
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top"
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Cantidad de Usuarios"
          }
        },
        x: {
          title: {
            display: true,
            text: "Día de la Semana"
          }
        }
      }
    }
  });

  // Datos simulados de backend
  const usuarios = [
    { nombre: "Christian Keim", ci: "1340130", email: "ckeim@example.com", rol: "Docente", estado: "Activo", cv: true, tiempo: "1h 25m", modulo: true },
    { nombre: "Laura Benítez", ci: "1234567", email: "laura.b@example.com", rol: "Administrador", estado: "Suspendido", cv: false, tiempo: "0h 42m", modulo: false },
  ];

  const concursos = [
    { titulo: "Concurso Educación Inicial", fecha: "2025-07-20", vacancias: 12 },
    { titulo: "Concurso Matemática Media", fecha: "2025-07-25", vacancias: 5 },
  ];

  const documentos = [
    { tipo: "Puntajes", archivo: "puntajes_christian.pdf", estado: "Verificado" },
    { tipo: "Certificación", archivo: "certificado_laura.pdf", estado: "Pendiente" },
  ];

  document.getElementById("total-usuarios").textContent = usuarios.length;
  document.getElementById("total-concursos").textContent = concursos.length;
  document.getElementById("total-documentos").textContent = documentos.length;

  const tablaUsuarios = document.getElementById("tabla-usuarios");
  usuarios.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.nombre}</td>
      <td>${user.ci}</td>
      <td>${user.email}</td>
      <td>${user.rol}</td>
      <td>${user.estado}</td>
      <td>${user.cv ? 'Sí' : 'No'}</td>
      <td>${user.tiempo}</td>
      <td>${user.modulo ? 'Sí' : 'No'}</td>
      <td>
        <button class="btn-icon"><i class="fas fa-edit"></i></button>
        <button class="btn-icon"><i class="fas fa-trash"></i></button>
      </td>
    `;
    tablaUsuarios.appendChild(row);
  });

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

  document.querySelector(".config-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Configuración guardada correctamente.");
  });
});
