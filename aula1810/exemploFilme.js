async function fetchPosts() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=SUA_CHAVE&language=pt-BR');
        const data = await response.json();
        const movies = data.results;

        // Selecionar o elemento HTML onde os posts serão exibidos
        const moviesList = document.getElementById('movies-list');

        // Iterar sobre os posts e criar um item de lista para cada um
        movies.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.textContent = `${movie.original_title} => ${movie.overview}`;
            moviesList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erro ao buscar os posts:', error);
    }
}
// Chama a função quando a página é carregada
fetchPosts();
