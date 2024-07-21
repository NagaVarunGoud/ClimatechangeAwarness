from flask import Flask, jsonify, render_template
import feedparser
import requests

app = Flask(__name__)

RSS_FEED_URL = 'https://www.nature.com/nclimate/web-feeds'

def fetch_rss_feed(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        return feedparser.parse(response.content)
    except requests.exceptions.RequestException as e:
        app.logger.error(f"Error fetching RSS feed: {e}")
        return None

@app.route('/articles')
def articles():
    try:
        feed = fetch_rss_feed(RSS_FEED_URL)
        if feed is None:
            app.logger.error("Error fetching RSS feed")
            return jsonify({"error": "Error fetching RSS feed"}), 500
        if feed.bozo:
            app.logger.error(f"Error parsing RSS feed: {feed.bozo_exception}")
            return jsonify({"error": f"Error parsing RSS feed: {feed.bozo_exception}"}), 500

        articles = [{"title": entry.title, "link": entry.link} for entry in feed.entries]
        return jsonify(articles)
    except Exception as e:
        app.logger.error(f"Unexpected error: {e}")
        return jsonify({"error": "Unexpected error occurred"}), 500

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
