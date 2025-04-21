document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('catModal');
    const btn = document.querySelector('.button-link');

    // Открытие модального окна
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Закрытие при клике вне гифки
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
});