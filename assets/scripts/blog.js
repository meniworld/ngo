// JavaScript to handle the category filter like tabs
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.blog-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all tabs
            tabs.forEach(tab => tab.classList.remove('active'));
            // Add active class to the clicked tab
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');

            cards.forEach(card => {
                // Show or hide cards based on category
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Set the first tab as active by default
    tabs[0].classList.add('active');
});
