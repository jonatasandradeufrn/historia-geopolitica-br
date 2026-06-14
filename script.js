// Busca na timeline
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const eraCards = document.querySelectorAll('.era-card, .evento');
    const resultCount = document.getElementById('resultCount');

    function filterItems() {
        const term = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const activeFilter = document.querySelector('.filter-btn.active');
        const eraFilter = activeFilter ? activeFilter.dataset.era : 'all';

        let visibleCount = 0;

        eraCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            const era = card.dataset.era || '';

            const matchesSearch = !term || text.includes(term);
            const matchesFilter = eraFilter === 'all' || era === eraFilter;

            if (matchesSearch && matchesFilter) {
                card.style.display = '';
                visibleCount++;
                card.classList.add('reveal');
                setTimeout(() => card.classList.add('visible'), 50);
            } else {
                card.style.display = 'none';
            }
        });

        // Mostrar/esconder seções inteiras se todos os cards dentro estiverem ocultos
        document.querySelectorAll('.era-section').forEach(section => {
            const visibleCards = section.querySelectorAll('.era-card[style*="display: none"]');
            const totalCards = section.querySelectorAll('.era-card');
            if (visibleCards.length === totalCards.length && totalCards.length > 0) {
                section.style.display = 'none';
            } else {
                section.style.display = '';
            }
        });

        // Atualizar resultado
        if (resultCount) {
            if (term || eraFilter !== 'all') {
                resultCount.textContent = `Exibindo ${visibleCount} resultado${visibleCount !== 1 ? 's' : ''}`;
                resultCount.classList.add('show');
            } else {
                resultCount.classList.remove('show');
            }
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterItems);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterItems();
        });
    });

    // Smooth reveal on scroll
    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight - 100) {
                el.classList.add('visible');
            }
        });
    }

    // Inicialmente revelar o que já está visível
    revealOnScroll();

    // Revelar ao scrollar
    window.addEventListener('scroll', revealOnScroll);

    // Navegação suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
