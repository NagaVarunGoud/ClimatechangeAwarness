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
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const apiKey = 'abb41ee17bc44e459d3adcb267a6dfd2'; // Replace with your actual API key
    const url = `https://newsapi.org/v2/everything?q=climate+change&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch news' }),
        };
    }
};
