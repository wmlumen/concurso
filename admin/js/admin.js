document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Datos simulados para panel admin
  const usuarios = [
    { id: 1, nombre: "Christian Keim", rol: "Administrador", estado: "Activo", ultimoAcceso: "2025-07-12 10:00" },
    { id: 2, nombre: "Laura Benítez", rol: "Institución", estado: "Suspendido", ultimoAcceso: "2025-07-10 16:20" },
    { id: 3, nombre: "Pedro López", rol: "Docente", estado: "Activo", ultimoAcceso: "2025-07-13 08:45" },
  ];

  const concursosPublicos = [
    { id: 1, titulo: "Concurso de Lengua Española", institucion: "Escuela Nº 5", fechaLimite: "2025-07-31", estado: "Activo", vacantes: 3 },
    { id: 2, titulo: "Concurso Matemática Media", institucion: "Colegio Central", fechaLimite: "2025-08-15", estado: "Cerrado", vacantes: 5 },
  ];

  const concursosPrivados = [
    { id: 10, titulo: "Director de Área", institucion: "Escuela Técnica Nº 1", fechaLimite: "2025-07-20", estado: "Activo", vacantes: 1 },
    { id: 11, titulo: "Profesor Ciencias", institucion: "Colegio Privado ABC", fechaLimite: "2025-06-30", estado: "Desierto", vacantes: 2 },
  ];

  const documentosRepositorio = [
    { id: 101, tipo: "Convocatoria", codigo: "CP001", nombre: "Convocatoria_Lengua.pdf", estado: "Activo" },
    { id: 102, tipo: "Mejores Posicionados", codigo: "MP001", nombre: "Ranking_Lengua.xlsx", estado: "Cerrado" },
    { id: 103, tipo: "Ganadores", codigo: "GN001", nombre: "Ganadores_Lengua.pdf", estado: "Activo" },
    { id: 201, tipo: "Convocatoria", codigo: "PR001", nombre: "Convocatoria_Privada_Director.pdf", estado: "Activo" },
  ];

  // 🔸 Actualizar resumen de tarjetas en el index admin
  const actualizarResumen = () => {
    const get = (id) => document.getElementById(id);
    if (!get("total-usuarios")) return;

    get("total-usuarios").textContent = usuarios.length;
    get("total-concursos-publicos").textContent = concursosPublicos.length;
    get("total-concursos-privados").textContent = concursosPrivados.length;
    get("total-documentos").textContent = documentosRepositorio.length;
  };

  // 🔸 Mostrar tabla de usuarios
  const mostrarUsuarios = () => {
    const tabla = document.getElementById("tabla-usuarios");
    if (!tabla) return;
    tabla.innerHTML = "";
    usuarios.forEach((u) => {
      tabla.innerHTML += `
        <tr>
          <td>${u.id}</td>
          <td>${u.nombre}</td>
          <td>${u.rol}</td>
          <td><span class="estado ${u.estado.toLowerCase()}">${u.estado}</span></td>
          <td>${u.ultimoAcceso}</td>
          <td>
            <button class="btn-ver"><i class="fas fa-eye"></i></button>
            <button class="btn-editar"><i class="fas fa-edit"></i></button>
            <button class="btn-suspender"><i class="fas fa-user-slash"></i></button>
          </td>
        </tr>
      `;
    });
  };

  // 🔸 Mostrar concursos públicos
  const mostrarConcursosPublicos = () => {
    const tabla = document.getElementById("tabla-concursos-publicos");
    if (!tabla) return;
    tabla.innerHTML = "";
    concursosPublicos.forEach((c) => {
      tabla.innerHTML += `
        <tr>
          <td>${c.titulo}</td>
          <td>${c.institucion}</td>
          <td>${c.fechaLimite}</td>
          <td>${c.vacantes}</td>
          <td><span class="estado ${c.estado.toLowerCase()}">${c.estado}</span></td>
          <td>
            <button class="btn-editar">Editar</button>
            <button class="btn-cambiar-estado">Estado</button>
          </td>
        </tr>
      `;
    });
  };

  // 🔸 Mostrar concursos privados
  const mostrarConcursosPrivados = () => {
    const tabla = document.getElementById("tabla-concursos-privados");
    if (!tabla) return;
    tabla.innerHTML = "";
    concursosPrivados.forEach((c) => {
      tabla.innerHTML += `
        <tr>
          <td>${c.titulo}</td>
          <td>${c.institucion}</td>
          <td>${c.fechaLimite}</td>
          <td>${c.vacantes}</td>
          <td><span class="estado ${c.estado.toLowerCase()}">${c.estado}</span></td>
          <td>
            <button class="btn-editar">Editar</button>
            <button class="btn-cambiar-estado">Estado</button>
          </td>
        </tr>
      `;
    });
  };

  // 🔸 Mostrar documentos
  const mostrarDocumentos = () => {
    const tabla = document.getElementById("tabla-documentos");
    if (!tabla) return;
    tabla.innerHTML = "";
    documentosRepositorio.forEach((d) => {
      tabla.innerHTML += `
        <tr>
          <td>${d.tipo}</td>
          <td>${d.codigo}</td>
          <td>${d.nombre}</td>
          <td><span class="estado ${d.estado.toLowerCase()}">${d.estado}</span></td>
          <td>
            <button class="btn-ver">Ver</button>
            <button class="btn-editar">Editar</button>
            <button class="btn-eliminar">Eliminar</button>
          </td>
        </tr>
      `;
    });
  };

  // 🔸 Botones de acceso rápido en el panel principal
  const configurarAccesosRapidos = () => {
    document.querySelectorAll(".access-card button").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        const urls = [
          "admin/concursos-publicos.html",
          "admin/concursos-privados.html",
          "admin/repositorio-documentos.html",
          "admin/usuarios.html",
        ];
        if (urls[i]) window.location.href = urls[i];
      });
    });
  };

  // 🔹 Ejecutar funciones
  actualizarResumen();
  mostrarUsuarios();
  mostrarConcursosPublicos();
  mostrarConcursosPrivados();
  mostrarDocumentos();
  configurarAccesosRapidos();
});

