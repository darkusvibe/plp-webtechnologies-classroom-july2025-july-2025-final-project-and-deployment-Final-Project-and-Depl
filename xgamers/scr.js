document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('search-bar');
  const priceRange = document.getElementById('price-range');
  const priceValue = document.getElementById('price-value');
  const gameItems = document.querySelectorAll('.game-item');


  priceRange.addEventListener('input', () => {
    priceValue.textContent = `ksh{priceRange.value}`;
    filterGames();
  });


  searchBar.addEventListener('input', filterGames);

  function filterGames() {
    const searchQuery = searchBar.value.toLowerCase();
    const maxPrice = parseInt(priceRange.value, 10);

    gameItems.forEach((game) => {
      const gameName = game.dataset.name.toLowerCase();
      const gamePrice = parseInt(game.dataset.price, 10);


      if (gameName.includes(searchQuery) && gamePrice <= maxPrice) {
        game.style.display = '';
      } else {
        game.style.display = 'none';
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('search-bar');
  const priceRange = document.getElementById('price-range');
  const priceValue = document.getElementById('price-value');
  const genreFilter = document.getElementById('genre-filter');
  const ratingFilter = document.getElementById('rating-filter');
  const gameItems = document.querySelectorAll('.game-item');


  priceRange.addEventListener('input', () => {
    priceValue.textContent = `ksh${priceRange.value}`;
    filterGames();
  });


  searchBar.addEventListener('input', filterGames);
  genreFilter.addEventListener('change', filterGames);
  ratingFilter.addEventListener('change', filterGames);

  function filterGames() {
    const searchQuery = searchBar.value.toLowerCase();
    const maxPrice = parseInt(priceRange.value, 10);
    const selectedGenre = genreFilter.value;
    const selectedRating = parseFloat(ratingFilter.value) || 0;

    gameItems.forEach((game) => {
      const gameName = game.dataset.name.toLowerCase();
      const gamePrice = parseInt(game.dataset.price, 10);
      const gameGenre = game.dataset.genre.toLowerCase();
      const gameRating = parseFloat(game.dataset.rating);

      // Check all filter conditions
      const matchesSearch = gameName.includes(searchQuery);
      const matchesPrice = gamePrice <= maxPrice;
      const matchesGenre = selectedGenre === 'all' || gameGenre === selectedGenre;
      const matchesRating = selectedRating === 0 || gameRating >= selectedRating;

      // Show or hide the game item based on filter conditions
      if (matchesSearch && matchesPrice && matchesGenre && matchesRating) {
        game.style.display = '';
      } else {
        game.style.display = 'none';
      }
    });
  }
});
