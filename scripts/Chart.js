// admin.js

document.addEventListener("DOMContentLoaded", function () {
  // Simulación de datos de usuarios activos en la semana
  const dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const usuariosActivos = [5, 8, 12, 6, 15, 9, 3];

  const ctx = document.getElementById("usuarios-activos-chart").getContext("2d");

  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dias,
      datasets: [
        {
          label: "Usuarios Activos por Día",
          data: usuariosActivos,
          borderColor: "#3498db",
          backgroundColor: "rgba(52,152,219,0.2)",
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: "#2980b9"
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top"
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Cantidad de Usuarios"
          }
        },
        x: {
          title: {
            display: true,
            text: "Día de la Semana"
          }
        }
      }
    }
  });
});
