import Parser from "rss-parser";

const parser = new Parser();

async function getNews() {
    const feed = await parser.parseURL("https://news.google.com/rss/search?q=india+government+policy");

    const val = JSON.stringify(feed.items[4])
    console.log(val);

}

getNews();
