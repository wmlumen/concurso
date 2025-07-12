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
// Datos simulados para prueba (en realidad vendría de una API o base de datos)
const docentes = {
  "12345678": {
    nombre: "Juan Pérez",
    materia: "Matemáticas",
    escuela: "Escuela Nº 12",
    email: "juan.perez@example.com",
  },
  "87654321": {
    nombre: "Ana Gómez",
    materia: "Lengua",
    escuela: "Escuela Nº 5",
    email: "ana.gomez@example.com",
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const formCedula = document.getElementById('form-cedula');
  const resultado = document.getElementById('resultado');

  if (formCedula) {
    formCedula.addEventListener('submit', (e) => {
      e.preventDefault();
      const cedula = formCedula.cedula.value.trim();

      if (!cedula) {
        resultado.innerHTML = `<p style="color:red;">Por favor ingrese su número de cédula.</p>`;
        return;
      }

      const docente = docentes[cedula];
      if (docente) {
        resultado.innerHTML = `
          <h3>Datos del Docente</h3>
          <p><strong>Nombre:</strong> ${docente.nombre}</p>
          <p><strong>Materia:</strong> ${docente.materia}</p>
          <p><strong>Escuela:</strong> ${docente.escuela}</p>
          <p><strong>Email:</strong> ${docente.email}</p>
        `;
      } else {
        resultado.innerHTML = `<p style="color:red;">No se encontró ningún docente con esa cédula.</p>`;
      }
    });
  }
});
