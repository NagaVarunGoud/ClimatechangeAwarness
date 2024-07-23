document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('carbon-calculator-form');
    const result = document.getElementById('calculator-result');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const footprint = calculateCarbonFootprint(data);
        result.textContent = `Your estimated carbon footprint is ${footprint} tons of CO2 per year.`;
    });

    function calculateCarbonFootprint(data) {
        // Simple calculation based on hypothetical factors
        const electricity = data.get('electricity') * 0.0005;
        const gas = data.get('gas') * 0.005;
        const travel = data.get('travel') * 0.002;
        return (electricity + gas + travel).toFixed(2);
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Optional: Hide the intro animation container when the animation is done
    const introAnimation = document.getElementById('intro-animation');
    
    // Animation will hide the container after it completes
    introAnimation.addEventListener('animationend', () => {
        introAnimation.style.display = 'none';
    });
});
// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'abb41ee17bc44e459d3adcb267a6dfd2'; // Replace with your actual API key
    const url = `https://newsapi.org/v2/everything?q=climate+change&apiKey=${apiKey}`;
    const cacheKey = 'climateChangeNews';
    const cacheDuration = 3600000; // Cache duration in milliseconds (1 hour)

    function fetchAndDisplayNews() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
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

                    // Save to localStorage with timestamp
                    localStorage.setItem(cacheKey, JSON.stringify({
                        articles: articles,
                        timestamp: Date.now()
                    }));
                }
            })
            .catch(error => {
                console.error('Error fetching news:', error);
                const newsContainer = document.getElementById('news-articles');
                newsContainer.innerHTML = '<p>Error fetching news articles. Please try again later.</p>';
            });
    }

    // Check for cached data
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        const { articles, timestamp } = JSON.parse(cachedData);
        const now = Date.now();
        if (now - timestamp < cacheDuration) {
            // Use cached data
            const newsContainer = document.getElementById('news-articles');
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
        } else {
            // Cache expired, fetch new data
            fetchAndDisplayNews();
        }
    } else {
        // No cache, fetch data
        fetchAndDisplayNews();
    }
});
