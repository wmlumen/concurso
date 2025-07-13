document.addEventListener("DOMContentLoaded", () => {
  const tipoUsuario = localStorage.getItem("tipoUsuario"); // visitante, usuario, admin

  switch (tipoUsuario) {
    case "usuario":
      mostrarPanelUsuario();
      break;
    case "visitante":
      iniciarTemporizador(2); // horas
      mostrarPanelVisitante();
      break;
    case "admin":
      mostrarPanelAdmin();
      break;
    default:
      mostrarLogin();
  }
});

function iniciarTemporizador(horas) {
  const fin = Date.now() + horas * 60 * 60 * 1000;
  const reloj = document.querySelector(".badge-warning");
  const interval = setInterval(() => {
    const diff = fin - Date.now();
    if (diff <= 0) {
      clearInterval(interval);
      alert("Tu tiempo ha finalizado. Por favor regístrate para continuar.");
      window.location.href = "/registro.html";
    } else {
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      reloj.textContent = `Tiempo restante: ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
  }, 1000);
}
