async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        // Selecionar o elemento HTML onde os posts serão exibidos
        const postsList = document.getElementById('posts-list');

        // Iterar sobre os posts e criar um item de lista para cada um
        posts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = `Post ${post.id}: ${post.title}`;
            postsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erro ao buscar os posts:', error);
    }
}
// Chama a função quando a página é carregada
fetchPosts();
