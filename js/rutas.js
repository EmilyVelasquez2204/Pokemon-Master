    function showTemplate(templateId) {
            // Ocultar todas las plantillas
            const templates = document.querySelectorAll('.template-viewer');
            templates.forEach(template => {
                template.classList.remove('active');
            });
            
            // Remover clase active de todas las pestañas
            const tabs = document.querySelectorAll('.nav-tab');
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Mostrar la plantilla seleccionada
            document.getElementById(templateId).classList.add('active');
            
            // Activar la pestaña correspondiente
            event.target.classList.add('active');
        }

        // Funciones de interactividad adicionales
        document.addEventListener('DOMContentLoaded', function() {
            // Funcionalidad de búsqueda de cartas
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.addEventListener('input', function(e) {
                    console.log('Buscando:', e.target.value);
                    // Aquí se implementaría la lógica de búsqueda
                });
            }

            // Drag and drop para construcción de mazos
            const cardItems = document.querySelectorAll('.card-item');
            cardItems.forEach(card => {
                card.addEventListener('dragstart', function(e) {
                    e.dataTransfer.setData('text/plain', this.textContent);
                });
                card.draggable = true;
            });

            const deckZones = document.querySelectorAll('.main-deck, .bench');
            deckZones.forEach(zone => {
                zone.addEventListener('dragover', function(e) {
                    e.preventDefault();
                });
                
                zone.addEventListener('drop', function(e) {
                    e.preventDefault();
                    const cardData = e.dataTransfer.getData('text/plain');
                    console.log('Carta añadida al mazo:', cardData);
                    // Aquí se implementaría la lógica para añadir cartas al mazo
                });
            });

            // Efectos hover para cartas de colección
            const collectionCards = document.querySelectorAll('.collection-card');
            collectionCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-4px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-2px) scale(1)';
                });
            });

            // Simulación de actualización de estadísticas en tiempo real
            setInterval(() => {
                const statValues = document.querySelectorAll('.stat-value');
                statValues.forEach(stat => {
                    if (Math.random() < 0.1) { // 10% de probabilidad de actualización
                        const currentValue = parseInt(stat.textContent.replace(',', ''));
                        const change = Math.floor(Math.random() * 10) - 5;
                        const newValue = Math.max(0, currentValue + change);
                        stat.textContent = newValue.toLocaleString();
                        
                        // Efecto visual de cambio
                        stat.style.color = change > 0 ? '#059669' : '#dc2626';
                        setTimeout(() => {
                            stat.style.color = '#3b82f6';
                        }, 1000);
                    }
                });
            }, 5000);
        });
