const baseURL = 'https://rickandmortyapi.com/api';

async function fetchCharacters() {
    try {
        const response = await fetch(`${baseURL}/character`);
        
        // Verificamos si la respuesta es correcta
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
}

function displayCharacters(characters) {
    const charactersContainer = document.getElementById('characters');
    charactersContainer.innerHTML = ''; // Limpiar el contenedor

    characters.forEach(character => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">Especie: ${character.species}</p>
                        <p class="card-text">Estado: ${character.status}</p>
                    </div>
                </div>
            </div>
        `;
        charactersContainer.innerHTML += card;
    });
}

// Llamar a la función para obtener los personajes al cargar la página
fetchCharacters();