document.addEventListener("DOMContentLoaded", () => {
  const auditoria = [
    { usuario: "Christian Keim", accion: "creacion", descripcion: "Cargó concurso público", fecha: "2025-07-13 09:30" },
    { usuario: "Laura Benítez", accion: "edicion", descripcion: "Editó documento Ganadores", fecha: "2025-07-12 14:20" },
    { usuario: "Pedro López", accion: "login", descripcion: "Accedió al panel docente", fecha: "2025-07-11 08:10" },
    { usuario: "Christian Keim", accion: "eliminacion", descripcion: "Eliminó usuario inactivo", fecha: "2025-07-10 16:45" },
  ];

  const tabla = document.getElementById("tablaAuditoriaBody");
  const filtroUsuario = document.getElementById("buscarUsuario");
  const filtroFecha = document.getElementById("filtroFecha");
  const filtroAccion = document.getElementById("filtroAccion");

  function renderAuditoria() {
    const user = filtroUsuario.value.toLowerCase();
    const fecha = filtroFecha.value;
    const accion = filtroAccion.value;

    tabla.innerHTML = "";
    let index = 1;

    auditoria
      .filter((item) =>
        (!user || item.usuario.toLowerCase().includes(user)) &&
        (!fecha || item.fecha.startsWith(fecha)) &&
        (!accion || item.accion === accion)
      )
      .forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index++}</td>
          <td>${item.usuario}</td>
          <td>${item.accion}</td>
          <td>${item.descripcion}</td>
          <td>${item.fecha}</td>
        `;
        tabla.appendChild(row);
      });
  }

  filtroUsuario.addEventListener("input", renderAuditoria);
  filtroFecha.addEventListener("change", renderAuditoria);
  filtroAccion.addEventListener("change", renderAuditoria);

  renderAuditoria();
});
