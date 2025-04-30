function filterGallery(category) {
    const buttons = document.querySelectorAll(".tab-buttons button");
    const items = document.querySelectorAll(".gallery-item");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    items.forEach(item => {
        item.classList.remove("show");
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.add("show");
        }
    });
}