document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card');

    function filterProducts() {
        const query = searchInput.value.toLowerCase();
        productCards.forEach(card => {
            const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
            if (name.includes(query) || desc.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterProducts);
    document.getElementById('searchBtn').addEventListener('click', function(e) {
        e.preventDefault();
        filterProducts();
    });
});