const loadMoreBtn = document.getElementById('loadMoreBtn');
const hiddenCards = document.querySelectorAll('.latest-card.hidden');
let currentIndex = 0;
const batchSize = 3;

loadMoreBtn.addEventListener('click', () => {
    let count = 0;

    for (let i = currentIndex; i < hiddenCards.length && count < batchSize; i++) {
        hiddenCards[i].classList.remove('hidden');
        count++;
        currentIndex++;
    }

    if (currentIndex >= hiddenCards.length) {
        loadMoreBtn.style.display = 'none';
    }
});
