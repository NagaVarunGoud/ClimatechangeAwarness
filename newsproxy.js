const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const apiKey = 'YOUR_NEWS_API_KEY'; // Replace with your actual API key
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
