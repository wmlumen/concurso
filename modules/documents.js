export const render = () => `
  <section id="documentos" class="documents-section">
    <div class="container">
      <h2 class="section-title">Mis Documentos</h2>
      
      <div class="document-flow">
        <div class="flow-steps">
          <div class="step active" data-step="1">Carga</div>
          <div class="step" data-step="2">Verificación</div>
          <div class="step" data-step="3">Completado</div>
        </div>
        
        <div id="document-upload-area" class="upload-area">
          <!-- Contenido dinámico -->
        </div>
        
        <div class="flow-actions">
          <button id="prev-step" class="btn btn-outline" disabled>Anterior</button>
          <button id="next-step" class="btn btn-primary">Siguiente</button>
        </div>
      </div>
    </div>
  </section>
`;

export const init = () => {
  let currentStep = 1;
  const maxSteps = 3;
  const uploadedFiles = [];
  
  // Cargar vista del paso actual
  const loadStep = (step) => {
    const uploadArea = document.getElementById('document-upload-area');
    
    switch(step) {
      case 1:
        uploadArea.innerHTML = renderUploadStep();
        setupFileUploads();
        break;
      case 2:
        uploadArea.innerHTML = renderVerificationStep();
        verifyDocuments();
        break;
      case 3:
        uploadArea.innerHTML = renderCompletionStep();
        break;
    }
    
    updateStepUI();
  };
  
  // Navegación entre pasos
  document.getElementById('next-step').addEventListener('click', () => {
    if (currentStep < maxSteps && validateStep(currentStep)) {
      currentStep++;
      loadStep(currentStep);
    }
  });
  
  document.getElementById('prev-step').addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      loadStep(currentStep);
    }
  });
  
  // Inicializar
  loadStep(1);
};
