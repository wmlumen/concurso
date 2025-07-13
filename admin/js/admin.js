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
      }
    });
  });
});
