document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-registro");
  const fotoInput = document.getElementById("foto-perfil");
  const previewAvatar = document.getElementById("preview-avatar");
  const mensajeRegistro = document.getElementById("mensaje-registro");

  // Preview de la foto de perfil
  fotoInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.match("image.*")) {
        showMessage("Por favor selecciona una imagen válida", "error");
        return;
      }

      const reader = new FileReader();
      reader.onload = (evt) => {
        previewAvatar.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // Manejo del formulario
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Validación adicional
    if (!form.checkValidity()) {
      showMessage("Por favor completa todos los campos correctamente", "error");
      return;
    }

    // Mostrar estado de carga
    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Registrando...';

    // Simular envío al servidor
    try {
      const formData = {
        cedula: form.cedula.value,
        email: form.email.value,
        codigo: form.codigo.value,
        telefono: form.telefono.value,
        foto: fotoInput.files[0] ? await toBase64(fotoInput.files[0]) : null
      };

      // Guardar en localStorage (simulación)
      localStorage.setItem("userData", JSON.stringify(formData));
      
      // Mostrar éxito
      showMessage("¡Registro exitoso! Redirigiendo...", "success");
      
      // Redirigir después de 2 segundos
      setTimeout(() => {
        window.location.href = "perfil.html";
      }, 2000);

    } catch (error) {
      console.error("Error en registro:", error);
      showMessage("Error al registrar. Intente nuevamente.", "error");
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Registrarse';
    }
  });

  // Función para mostrar mensajes
  function showMessage(text, type) {
    mensajeRegistro.textContent = text;
    mensajeRegistro.className = `alert alert-${type}`;
    mensajeRegistro.classList.remove("visually-hidden");
    
    // Ocultar después de 5 segundos (excepto para éxito)
    if (type !== "success") {
      setTimeout(() => {
        mensajeRegistro.classList.add("visually-hidden");
      }, 5000);
    }
  }

  // Convertir imagen a Base64
  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  // Máscara para cédula
  document.getElementById("cedula").addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 7) value = value.substring(0, 7);
    if (value.length > 1) value = value.substring(0, 1) + "." + value.substring(1);
    if (value.length > 5) value = value.substring(0, 5) + "." + value.substring(5);
    e.target.value = value;
  });
});
<section id="registro-usuario" class="card">
  <h2 class="section-title">Registro de Usuario</h2>
  
  <form id="form-registro" class="form-registro">
    <!-- Foto de perfil con preview -->
    <div class="form-group avatar-upload">
      <div class="avatar-preview">
        <img id="preview-avatar" src="./assets/default-avatar.jpg" alt="Preview de foto de perfil">
      </div>
      <label for="foto-perfil" class="btn btn-outline">
        <i class="fas fa-camera"></i> Seleccionar Foto
      </label>
      <input type="file" id="foto-perfil" accept="image/*" class="visually-hidden">
    </div>

    <!-- Campos del formulario -->
    <div class="form-group">
      <label for="cedula">Cédula de Identidad</label>
      <input 
        type="text" 
        id="cedula" 
        name="cedula" 
        placeholder="Ej: 1.234.567" 
        pattern="\d{1,3}(?:\.\d{3}){2}" 
        required
      >
      <small class="form-hint">Formato: 1.234.567</small>
    </div>

    <div class="form-group">
      <label for="email">Correo Electrónico</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="tucorreo@ejemplo.com" 
        required
      >
    </div>

    <div class="form-group">
      <label for="codigo">Código de Plataforma</label>
      <input 
        type="text" 
        id="codigo" 
        name="codigo" 
        placeholder="Ej: DOC2025" 
        pattern="[A-Z]{3}\d{4}" 
        required
      >
      <small class="form-hint">Formato: 3 letras mayúsculas + 4 números</small>
    </div>

    <div class="form-group">
      <label for="telefono">Teléfono</label>
      <input 
        type="tel" 
        id="telefono" 
        name="telefono" 
        placeholder="(099) 123-4567" 
        pattern="\(\d{3}\) \d{3}-\d{4}"
      >
    </div>

    <div class="form-actions">
      <button type="submit" class="btn btn-primary btn-lg">
        <i class="fas fa-user-plus"></i> Registrarse
      </button>
    </div>
  </form>

  <!-- Mensaje de estado -->
  <div id="mensaje-registro" class="alert visually-hidden"></div>
</section>
