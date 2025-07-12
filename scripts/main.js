// Carga modular de componentes HTML
function cargarModulo(id, archivo) {
  fetch(archivo)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => {
      console.error(`Error al cargar el módulo ${id}:`, err);
    });
}

cargarModulo("presentacion", "./modules/presentacion.html");
// Puedes ir sumando más con esta misma función
