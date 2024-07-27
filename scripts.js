document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('carbon-calculator-form');
    const result = document.getElementById('calculator-result');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(form);
            const footprint = calculateCarbonFootprint(data);
            result.textContent = `Your estimated carbon footprint is ${footprint} tons of CO2 per year.`;
        });
    }

    function calculateCarbonFootprint(data) {
        // Simple calculation based on hypothetical factors
        const electricity = data.get('electricity') * 0.0005;
        const gas = data.get('gas') * 0.005;
        const travel = data.get('travel') * 0.002;
        return (electricity + gas + travel).toFixed(2);
    }

    const introAnimation = document.getElementById('intro-animation');
    if (introAnimation) {
        introAnimation.addEventListener('animationend', () => {
            introAnimation.style.display = 'none';
        });
    }
});
