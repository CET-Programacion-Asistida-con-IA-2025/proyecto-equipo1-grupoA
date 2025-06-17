// Funciones para el modal de emergencia
function mostrarEmergencia() {
    document.getElementById('emergencyModal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('emergencyModal').style.display = 'none';
}

// Cerrar modal al hacer click fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('emergencyModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Array para almacenar las historias
let historias = [
    {
        nombre: "Juan, 25 años",
        categoria: "Ansiedad",
        historia: "Buscar ayuda fue el primer paso para sentirme mejor. No están solos.",
        anonimo: false
    }
];

// Función para mostrar las historias
function mostrarHistorias() {
    const container = document.getElementById('stories-list');
    container.innerHTML = '';
    
    historias.forEach(historia => {
        const storyDiv = document.createElement('div');
        storyDiv.className = 'story-item';
        
        const nombre = historia.anonimo ? 'Anónimo' : historia.nombre;
        
        storyDiv.innerHTML = `
            <div class="story-header">
                <span>${nombre}</span>
                <span class="category">${historia.categoria}</span>
            </div>
            <p>"${historia.historia}"</p>
        `;
        
        container.appendChild(storyDiv);
    });
}

// Función para agregar nueva historia
function agregarHistoria(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value || 'Usuario';
    const categoria = document.getElementById('categoria').value;
    const historia = document.getElementById('historia').value;
    const anonimo = document.getElementById('anonimo').checked;
    
    if (!categoria || !historia) {
        alert('Por favor completa todos los campos obligatorios');
        return;
    }
    
    // Crear nueva historia
    const nuevaHistoria = {
        nombre: nombre,
        categoria: categoria,
        historia: historia,
        anonimo: anonimo
    };
    
    // Agregar al array
    historias.unshift(nuevaHistoria);
    
    // Actualizar la vista
    mostrarHistorias();
    
    // Limpiar el formulario
    document.getElementById('storyForm').reset();
    
    // Mostrar mensaje de confirmación
    alert('¡Gracias por compartir tu historia! Tu experiencia puede ayudar a otros.');
}

// Navegación suave
function navegacionSuave() {
    const enlaces = document.querySelectorAll('nav a[href^="#"]');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animaciones al hacer scroll
function animarElementos() {
    const elementos = document.querySelectorAll('.stat-card, .resource-card, .emergency-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elementos.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(20px)';
        elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(elemento);
    });
}

// Validación del formulario
function validarFormulario() {
    const form = document.getElementById('storyForm');
    const categoria = document.getElementById('categoria');
    const historia = document.getElementById('historia');
    
    // Agregar estilos de validación
    [categoria, historia].forEach(campo => {
        campo.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#ff6b6b';
            } else {
                this.style.borderColor = '#51cf66';
            }
        });
        
        campo.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(255, 107, 107)') {
                this.style.borderColor = '#ddd';
            }
        });
    });
}

// Función para mostrar/ocultar información adicional
function toggleInfo(button) {
    const card = button.closest('.resource-card');
    const info = card.querySelector('.info-adicional');
    
    if (info) {
        if (info.style.display === 'none' || !info.style.display) {
            info.style.display = 'block';
            button.textContent = 'Ver menos';
        } else {
            info.style.display = 'none';
            button.textContent = 'Ver más';
        }
    }
}

// Contador de caracteres para el textarea
function contadorCaracteres() {
    const textarea = document.getElementById('historia');
    const maxLength = 500;
    
    // Crear elemento contador
    const contador = document.createElement('div');
    contador.id = 'contador';
    contador.style.textAlign = 'right';
    contador.style.fontSize = '0.9rem';
    contador.style.color = '#6B6B6B';
    contador.style.marginTop = '0.5rem';
    
    textarea.insertAdjacentElement('afterend', contador);
    
    // Actualizar contador
    function actualizarContador() {
        const current = textarea.value.length;
        contador.textContent = `${current}/${maxLength} caracteres`;
        
        if (current > maxLength * 0.9) {
            contador.style.color = '#ff6b6b';
        } else {
            contador.style.color = '#6B6B6B';
        }
    }
    
    textarea.addEventListener('input', actualizarContador);
    actualizarContador();
}

// Función para detectar crisis en el texto (palabras clave)
function detectarCrisis() {
    const textarea = document.getElementById('historia');
    const palabrasClave = ['suicidio', 'matarme', 'no quiero vivir', 'terminar con todo', 'hacerme daño'];
    
    textarea.addEventListener('input', function() {
        const texto = this.value.toLowerCase();
        const contieneAlerta = palabrasClave.some(palabra => texto.includes(palabra));
        
        if (contieneAlerta) {
            mostrarAlertaCrisis();
        }
    });
}

// Mostrar alerta de crisis
function mostrarAlertaCrisis() {
    const alerta = document.createElement('div');
    alerta.id = 'alerta-crisis';
    alerta.style.cssText = `
        background: #ff6b6b;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        text-align: center;
        animation: fadeIn 0.5s ease;
    `;
    
    alerta.innerHTML = `
        <strong>¿Necesitas ayuda inmediata?</strong><br>
        Si tienes pensamientos de hacerte daño, por favor contacta:<br>
        <button onclick="mostrarEmergencia()" style="background: white; color: #ff6b6b; border: none; padding: 0.5rem 1rem; border-radius: 4px; margin-top: 0.5rem; cursor: pointer;">
            Ver números de emergencia
        </button>
    `;
    
    const form = document.getElementById('storyForm');
    if (!document.getElementById('alerta-crisis')) {
        form.insertBefore(alerta, form.firstChild);
        
        // Auto-remove después de 10 segundos
        setTimeout(() => {
            if (alerta.parentNode) {
                alerta.remove();
            }
        }, 10000);
    }
}

// Inicializar todo cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Agregar event listener al formulario
    document.getElementById('storyForm').addEventListener('submit', agregarHistoria);
    
    // Inicializar funciones
    navegacionSuave();
    animarElementos();
    validarFormulario();
    contadorCaracteres();
    detectarCrisis();
    mostrarHistorias();
    
    // Agregar estilo de animación fade-in
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.