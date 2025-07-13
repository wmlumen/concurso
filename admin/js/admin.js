// admin.js

document.addEventListener('DOMContentLoaded', function() {
    // Lógica para resaltar el enlace activo en la barra lateral
    const currentPath = window.location.pathname.split('/').pop();
    const sidebarLinks = document.querySelectorAll('.admin-sidebar nav ul li a');

    sidebarLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

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
        if (!get("total-usuarios")) return; // Asegurarse de que los elementos existen

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
                    <td><span class="badge ${u.estado.toLowerCase()}">${u.estado}</span></td>
                    <td>${u.ultimoAcceso}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary"><i class="fas fa-eye"></i></button>
                        <button class="btn btn-sm btn-outline-primary"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-sm btn-danger"><i class="fas fa-user-slash"></i></button>
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
                    <td><span class="badge ${c.estado.toLowerCase()}">${c.estado}</span></td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary">Editar</button>
                        <button class="btn btn-sm btn-info">Estado</button>
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
                    <td><span class="badge ${c.estado.toLowerCase()}">${c.estado}</span></td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary">Editar</button>
                        <button class="btn btn-sm btn-info">Estado</button>
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
                    <td><span class="badge ${d.estado.toLowerCase()}">${d.estado}</span></td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary">Ver</button>
                        <button class="btn btn-sm btn-outline-primary">Editar</button>
                        <button class="btn btn-sm btn-danger">Eliminar</button>
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
                    "concurso-publico.html",
                    "Concursos Privados.html",
                    "Repositorio.html",
                    "permisos.html", // Asumiendo que "usuarios" se gestiona en permisos.html o similar
                ];
                if (urls[i]) window.location.href = urls[i];
            });
        });
    };

    // 🔹 Ejecutar funciones al cargar el DOM
    actualizarResumen();
    mostrarUsuarios();
    mostrarConcursosPublicos();
    mostrarConcursosPrivados();
    mostrarDocumentos();
    configurarAccesosRapidos();
});

// Función para mostrar un modal de confirmación (puede ser usada globalmente)
function showConfirmationModal(message) {
    const confirmationModal = document.getElementById('confirmationModal');
    const modalMessage = document.getElementById('modalMessage');
    const confirmYesBtn = document.getElementById('confirmYesBtn');
    const confirmNoBtn = document.getElementById('confirmNoBtn');

    modalMessage.textContent = message;
    confirmationModal.style.display = 'flex'; // Muestra el modal

    return new Promise(resolve => {
        const handleYes = () => {
            confirmationModal.style.display = 'none';
            confirmYesBtn.removeEventListener('click', handleYes);
            confirmNoBtn.removeEventListener('click', handleNo);
            resolve(true);
        };
        const handleNo = () => {
            confirmationModal.style.display = 'none';
            confirmYesBtn.removeEventListener('click', handleYes);
            confirmNoBtn.removeEventListener('click', handleNo);
            resolve(false);
        };

        confirmYesBtn.addEventListener('click', handleYes);
        confirmNoBtn.addEventListener('click', handleNo);
    });
}
