document.addEventListener("DOMContentLoaded", () => {
    const url = '/.netlify/functions/news-proxy';

    function fetchAndDisplayNews() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data); // Log response for debugging
                const articles = data.articles || [];
                const newsContainer = document.getElementById('news-articles');

                if (!articles.length) {
                    newsContainer.innerHTML = '<p>No articles found.</p>';
                } else {
                    newsContainer.innerHTML = ''; // Clear existing content
                    articles.forEach(article => {
                        const articleDiv = document.createElement('div');
                        articleDiv.className = 'news-article';

                        const title = document.createElement('h3');
                        title.textContent = article.title;

                        const description = document.createElement('p');
                        description.textContent = article.description;

                        const link = document.createElement('a');
                        link.href = article.url;
                        link.textContent = 'Read more';
                        link.target = '_blank';

                        articleDiv.appendChild(title);
                        articleDiv.appendChild(description);
                        articleDiv.appendChild(link);

                        newsContainer.appendChild(articleDiv);
                    });
                }
            })
            .catch(error => {
                console.error('Error fetching news:', error);
                const newsContainer = document.getElementById('news-articles');
                newsContainer.innerHTML = '<p>Error fetching news articles. Please try again later.</p>';
            });
    }

    fetchAndDisplayNews();
});
