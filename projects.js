// Toggle Project Expand on Click
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

// Filter Projects
const filterSelect = document.getElementById('project-filter');

filterSelect.addEventListener('change', function() {
    const selected = this.value;

    projectCards.forEach(card => {
        if (selected === 'all' || card.dataset.category === selected) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
