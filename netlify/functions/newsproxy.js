// netlify/functions/news-proxy.js

const fetch = require('node-fetch');

exports.handler = async (event) => {
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
