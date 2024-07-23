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
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'abb41ee17bc44e459d3adcb267a6dfd2';
    const url = `https://newsapi.org/v2/everything?q=climate+change&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            const newsContainer = document.getElementById('news-articles');

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
        })
        .catch(error => console.error('Error fetching news:', error));
});
