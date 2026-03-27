document.querySelectorAll('.card, .action-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)';
        card.style.transform = 'translateY(-6px) scale(1.01)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

document.querySelectorAll('.btn, .card-action').forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.96)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 120);
    });
});
