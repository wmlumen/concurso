// admin.js

document.addEventListener("DOMContentLoaded", () => {
  // Simulación de datos backend
  const datos = {
    usuarios: 12,
    concursos: 5,
    documentos: 20,
  };

  // Actualizar resumen rápido
  document.getElementById("total-usuarios").textContent = datos.usuarios;
  document.getElementById("total-concursos").textContent = datos.concursos;
  document.getElementById("total-documentos").textContent = datos.documentos;

  // Agregar eventos a botones en accesos rápidos
  const botones = document.querySelectorAll(".access-card button");
  botones.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      switch (idx) {
        case 0:
          alert("Ir a Gestión de Usuarios");
          break;
        case 1:
          alert("Ir a Concursos Públicos");
          break;
        case 2:
          alert("Ir a Repositorio Documentos");
          break;
        case 3:
          alert("Ir a Configuración");
          break;
// admin.js

document.addEventListener("DOMContentLoaded", () => {
  // Datos simulados (pueden venir de API/backend)
  const concursosPublicos = [
    {
      id: 1,
      titulo: "Concurso de Lengua Española",
      institucion: "Escuela Nº 5",
      fechaLimite: "2025-07-31",
      estado: "Activo",
      vacantes: 3,
    },
    {
      id: 2,
      titulo: "Concurso Matemática Media",
      institucion: "Colegio Central",
      fechaLimite: "2025-08-15",
      estado: "Cerrado",
      vacantes: 5,
    },
  ];

  const concursosPrivados = [
    {
      id: 10,
      titulo: "Convocatoria Director de Área",
      institucion: "Escuela Técnica Nº 1",
      fechaLimite: "2025-07-20",
      estado: "Activo",
      vacantes: 1,
    },
    {
      id: 11,
      titulo: "Convocatoria Profesor Ciencias",
      institucion: "Colegio Privado ABC",
      fechaLimite: "2025-06-30",
      estado: "Desierto",
      vacantes: 2,
    },
  ];

  const documentosRepositorio = [
    { id: 101, tipo: "Convocatoria", codigo: "CP001", nombre: "Convocatoria Lengua.pdf", estado: "Activo" },
    { id: 102, tipo: "Mejores Posicionados", codigo: "MP001", nombre: "Mejores_Lengua_2024.xlsx", estado: "Cerrado" },
    { id: 103, tipo: "Ganadores", codigo: "GN001", nombre: "Ganadores_Lengua_2024.pdf", estado: "Activo" },
    { id: 201, tipo: "Convocatoria", codigo: "PR001", nombre: "Convocatoria Privada Director.pdf", estado: "Activo" },
  ];

  const usuarios = [
    { id: 1, nombre: "Christian Keim", rol: "Administrador", estado: "Activo" },
    { id: 2, nombre: "Laura Benítez", rol: "Institución", estado: "Suspendido" },
    { id: 3, nombre: "Pedro López", rol: "Docente", estado: "Activo" },
  ];

  // Funciones para mostrar los datos en tablas o listados
  // Es recomendable tener en el HTML elementos con IDs específicos para insertar datos

  // 1. Mostrar resumen en tarjetas
  function mostrarResumen() {
    document.getElementById("total-usuarios").textContent = usuarios.length;
    document.getElementById("total-concursos-publicos").textContent = concursosPublicos.length;
    document.getElementById("total-concursos-privados").textContent = concursosPrivados.length;
    document.getElementById("total-documentos").textContent = documentosRepositorio.length;
  }

  // 2. Mostrar concursos públicos en tabla (id tabla-concursos-publicos)
  function mostrarConcursosPublicos() {
    const tbody = document.getElementById("tabla-concursos-publicos");
    if (!tbody) return;
    tbody.innerHTML = "";
    concursosPublicos.forEach((concurso) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${concurso.titulo}</td>
        <td>${concurso.institucion}</td>
        <td>${concurso.fechaLimite}</td>
        <td>${concurso.vacantes}</td>
        <td>${concurso.estado}</td>
        <td>
          <button class="btn-editar" data-id="${concurso.id}">Editar</button>
          <button class="btn-cambiar-estado" data-id="${concurso.id}">Cambiar Estado</button>
        </td>`;
      tbody.appendChild(tr);
    });
  }

  // 3. Mostrar concursos privados (id tabla-concursos-privados)
  function mostrarConcursosPrivados() {
    const tbody = document.getElementById("tabla-concursos-privados");
    if (!tbody) return;
    tbody.innerHTML = "";
    concursosPrivados.forEach((concurso) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${concurso.titulo}</td>
        <td>${concurso.institucion}</td>
        <td>${concurso.fechaLimite}</td>
        <td>${concurso.vacantes}</td>
        <td>${concurso.estado}</td>
        <td>
          <button class="btn-editar" data-id="${concurso.id}">Editar</button>
          <button class="btn-cambiar-estado" data-id="${concurso.id}">Cambiar Estado</button>
        </td>`;
      tbody.appendChild(tr);
    });
  }

  // 4. Mostrar documentos repositorio (id tabla-documentos)
  function mostrarDocumentos() {
    const tbody = document.getElementById("tabla-documentos");
    if (!tbody) return;
    tbody.innerHTML = "";
    documentosRepositorio.forEach((doc) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${doc.tipo}</td>
        <td>${doc.codigo}</td>
        <td>${doc.nombre}</td>
        <td>${doc.estado}</td>
        <td>
          <button class="btn-ver" data-id="${doc.id}">Ver</button>
          <button class="btn-editar" data-id="${doc.id}">Editar</button>
          <button class="btn-eliminar" data-id="${doc.id}">Eliminar</button>
        </td>`;
      tbody.appendChild(tr);
    });
  }

  // 5. Mostrar usuarios (id tabla-usuarios)
  function mostrarUsuarios() {
    const tbody = document.getElementById("tabla-usuarios");
    if (!tbody) return;
    tbody.innerHTML = "";
    usuarios.forEach((user) => {
      const tr = document.createElement("

      }
    });
  });
});
