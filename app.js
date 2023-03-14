fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((response) => response.json())
  .then((data) => {
    const pokemonContainer = document.getElementById("pokemon-container");
    data.results.forEach((pokemon, index) => {
      const pokemonNumber = index + 1;
      const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;
      const pokemonName =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      const pokemonCard = `
        <div class="col-3 pokemon-card">
          <div class="card" style="width: 10rem;">
            <img src="${pokemonImage}" class="card-img-top" alt="${pokemonName}" />
            <div class="card-body">
              <p class="card-text">${pokemonName}</p>
            </div>
          </div>
        </div>
      `;
      pokemonContainer.insertAdjacentHTML("beforeend", pokemonCard);
    });
  })
  .catch((error) => console.error(error));


// Sélectionnez le champ de recherche
const searchPokemon = document.getElementById("search-pokemon");

// Écoutez l'événement de saisie sur le champ de recherche
searchPokemon.addEventListener("input", () => {
  // Récupérez la chaîne de recherche
  const searchString = searchPokemon.value.toLowerCase();

  // Sélectionnez tous les cartes Pokemon
  const pokemonCards = document.querySelectorAll(".pokemon-card");

  // Parcourez chaque carte Pokemon et affichez ou masquez en fonction de la chaîne de recherche
  pokemonCards.forEach((card) => {
    const pokemonName = card.querySelector(".card-text").textContent.toLowerCase();
    if (pokemonName.includes(searchString)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
