// Datos simulados para la plataforma DocentePy
const DocentePyData = {
  // Datos del usuario actual
  usuario: {
    id: "DOC-1340130",
    cedula: "1.340.130",
    matricula: "125532",
    nombres: "Christian José Raúl",
    apellidos: "Keim Jara",
    telefono: "(0994) 340-472",
    email: "c.keim@docente.edu.py",
    departamento: "Central",
    localidad: "Laurelty",
    avatar: "default-avatar.jpg",
    estado: "Activo",
    fechaRegistro: "15/03/2023",
    ultimoAcceso: new Date().toISOString(),
  },

  // Documentos del usuario
  documentos: [
    {
      id: "DOC-001",
      tipo: "Constancia de Puntajes",
      nombreArchivo: "puntajes_1340130.pdf",
      fechaCarga: "15/07/2025",
      estado: "Verificado",
      url: "/documentos/puntajes_1340130.pdf",
      tamaño: "2.4 MB",
    },
    {
      id: "DOC-002",
      tipo: "Título Profesional",
      nombreArchivo: "titulo_educacion.pdf",
      fechaCarga: "22/06/2025",
      estado: "Pendiente de revisión",
      url: "/documentos/titulo_educacion.pdf",
      tamaño: "3.1 MB",
    },
    {
      id: "DOC-003",
      tipo: "Certificado de Antecedentes",
      nombreArchivo: "antecedentes_1340130.pdf",
      fechaCarga: "10/05/2025",
      estado: "Rechazado",
      motivoRechazo: "Documento vencido",
      url: "/documentos/antecedentes_1340130.pdf",
      tamaño: "1.8 MB",
    },
  ],

  // Formación académica
  formacion: [
    {
      id: "EDU-001",
      titulo: "Licenciatura en Educación",
      institucion: "Universidad Nacional de Asunción",
      añoInicio: "2015",
      añoFin: "2020",
      especialidad: "Ciencias de la Educación",
      estado: "Completo",
    },
    {
      id: "EDU-002",
      titulo: "Maestría en Pedagogía",
      institucion: "Universidad Católica",
      añoInicio: "2021",
      añoFin: "2023",
      especialidad: "Pedagogía Crítica",
      estado: "En progreso",
    },
  ],

  // Experiencia laboral
  experiencia: [
    {
      id: "EXP-001",
      puesto: "Profesor de Biología",
      institucion: "Colegio Nacional San José",
      fechaInicio: "03/2021",
      fechaFin: "Presente",
      departamento: "Central",
      funciones: [
        "Planificación de clases",
        "Evaluación de estudiantes",
        "Coordinación de laboratorios",
      ],
    },
    {
      id: "EXP-002",
      puesto: "Asistente Educativo",
      institucion: "Escuela Básica N° 123",
      fechaInicio: "08/2018",
      fechaFin: "12/2020",
      departamento: "Central",
      funciones: [
        "Apoyo en planificación curricular",
        "Tutorías individualizadas",
      ],
    },
  ],

  // Concursos disponibles
  concursos: [
    {
      id: "CON-2025-045",
      titulo: "Concurso de Oposición para Profesor de Biología - Nivel Medio",
      institucion: "Colegio Nacional San José",
      ubicacion: "Asunción",
      fechaApertura: "01/07/2025",
      fechaCierre: "15/08/2025",
      vacantes: 2,
      nivelEducativo: "Secundaria",
      area: "Ciencias Naturales",
      requisitos: [
        "Título en Biología o área afín",
        "Mínimo 3 años de experiencia",
      ],
      estado: "Disponible",
      destacado: true,
    },
    {
      id: "CON-2025-102",
      titulo: "Concurso para Director de Institución Educativa",
      institucion: "Ministerio de Educación",
      ubicacion: "Central",
      fechaApertura: "10/08/2025",
      fechaCierre: "30/09/2025",
      vacantes: 5,
      nivelEducativo: "Todos",
      area: "Gestión Educativa",
      requisitos: [
        "Título de grado en Educación",
        "Mínimo 5 años de experiencia docente",
        "Certificado de cursos en gestión",
      ],
      estado: "Próximo",
    },
  ],

  // Postulaciones del usuario
  postulaciones: [
    {
      id: "POST-001",
      concursoId: "CON-2025-045",
      fechaPostulacion: "20/07/2025",
      estado: "En revisión",
      puntaje: null,
      documentosPresentados: [
        "puntajes_1340130.pdf",
        "titulo_educacion.pdf",
      ],
    },
  ],

  // Notificaciones
  notificaciones: [
    {
      id: "NOT-001",
      titulo: "Documento verificado",
      mensaje: "Tu Constancia de Puntajes ha sido verificada exitosamente",
      fecha: "16/07/2025",
      leida: true,
      tipo: "documento",
    },
    {
      id: "NOT-002",
      titulo: "Nuevo concurso disponible",
      mensaje: "Se ha publicado el concurso para Director de Institución Educativa",
      fecha: "05/08/2025",
      leida: false,
      tipo: "concurso",
    },
  ],

  // Configuración del sistema
  configuracion: {
    alertasEmail: true,
    alertasApp: true,
    tema: "claro",
    idioma: "es",
  },
};

// Simulador de API
const DocentePyAPI = {
  // Obtener datos del usuario
  getUsuario: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DocentePyData.usuario);
      }, 500);
    });
  },

  // Obtener documentos
  getDocumentos: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DocentePyData.documentos);
      }, 600);
    });
  },

  // Obtener concursos
  getConcursos: (filtros = {}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let resultados = DocentePyData.concursos;
        
        // Aplicar filtros
        if (filtros.nivelEducativo && filtros.nivelEducativo !== "Todos") {
          resultados = resultados.filter(c => c.nivelEducativo === filtros.nivelEducativo);
        }
        
        if (filtros.area && filtros.area !== "Todas") {
          resultados = resultados.filter(c => c.area === filtros.area);
        }
        
        if (filtros.ubicacion && filtros.ubicacion !== "Todas") {
          resultados = resultados.filter(c => c.ubicacion === filtros.ubicacion);
        }
        
        resolve(resultados);
      }, 700);
    });
  },

  // Postular a concurso
  postularConcurso: (concursoId, documentos) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const concurso = DocentePyData.concursos.find(c => c.id === concursoId);
        
        if (!concurso) {
          reject("Concurso no encontrado");
          return;
        }
        
        const nuevaPostulacion = {
          id: `POST-${Math.floor(Math.random() * 1000)}`,
          concursoId,
          fechaPostulacion: new Date().toISOString(),
          estado: "En revisión",
          puntaje: null,
          documentosPresentados: documentos,
        };
        
        DocentePyData.postulaciones.push(nuevaPostulacion);
        
        // Agregar notificación
        const nuevaNotificacion = {
          id: `NOT-${Math.floor(Math.random() * 1000)}`,
          titulo: "Postulación exitosa",
          mensaje: `Tu postulación al concurso "${concurso.titulo}" ha sido recibida`,
          fecha: new Date().toISOString(),
          leida: false,
          tipo: "postulacion",
        };
        
        DocentePyData.notificaciones.unshift(nuevaNotificacion);
        
        resolve(nuevaPostulacion);
      }, 1000);
    });
  },

  // Subir documento
  uploadDocumento: (tipo, archivo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const nuevoDocumento = {
          id: `DOC-${Math.floor(Math.random() * 1000)}`,
          tipo,
          nombreArchivo: archivo.name,
          fechaCarga: new Date().toISOString(),
          estado: "Pendiente de revisión",
          url: `/documentos/${archivo.name}`,
          tamaño: `${(archivo.size / (1024 * 1024)).toFixed(1)} MB`,
        };
        
        DocentePyData.documentos.push(nuevoDocumento);
        
        // Agregar notificación
        const nuevaNotificacion = {
          id: `NOT-${Math.floor(Math.random() * 1000)}`,
          titulo: "Documento cargado",
          mensaje: `Tu documento ${tipo} ha sido subido exitosamente`,
          fecha: new Date().toISOString(),
          leida: false,
          tipo: "documento",
        };
        
        DocentePyData.notificaciones.unshift(nuevaNotificacion);
        
        resolve(nuevoDocumento);
      }, 1500);
    });
  },
};

// Exportar para uso en la aplicación
export { DocentePyData, DocentePyAPI };
