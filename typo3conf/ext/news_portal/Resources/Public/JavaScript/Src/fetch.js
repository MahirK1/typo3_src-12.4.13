document.addEventListener('DOMContentLoaded', function() {
    fetchNews();
});

function fetchNews(page = 1) {
    const apiKey = 'a526327052064659aa8b4ddc3a30a160'; // Dodajte svoj API ključ ovdje
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = ''; // Očisti prethodni sadržaj

        data.articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('col-4', 'card'); // Postavljamo da bude u 3 grida
            articleElement.innerHTML = `
                <div class="card">
                    <img src="${article.urlToImage}" class="card-img-top" alt="Naslovna slika">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.description}</p>
                        <a href="${article.url}" class="btn btn-primary" target="_blank">Pročitaj više</a>
                    </div>
                </div>
            `;
            newsContainer.appendChild(articleElement);
        });

        // Kreiranje pagination linkova
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = '';
        for (let i = 1; i <= Math.ceil(data.totalResults / 15); i++) { // 20 je broj vijesti po stranici
            const pageItem = document.createElement('li');
            pageItem.classList.add('page-item');
            const pageLink = document.createElement('a');
            pageLink.classList.add('page-link');
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.addEventListener('click', function() {
                fetchNews(i);
            });
            pageItem.appendChild(pageLink);
            paginationContainer.appendChild(pageItem);
        }
    });
}