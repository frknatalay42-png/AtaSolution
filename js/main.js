// Atasolutions Gallery Filter Script

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const themeCards = document.querySelectorAll('.theme-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter theme cards with animation
            themeCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('hidden');
                    // Trigger reflow to restart animation
                    void card.offsetWidth;
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Initialize: show all themes
    filterButtons[0].classList.add('active');
});
