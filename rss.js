/* Simplest way to get a RSS feed */

let Parser = require('rss-parser');
let parser= new Parser();

(async () => {
    let feed = await parser.parseURL ('https://news.ycombinator.com/rss');

    console.log(feed.title);
    feed.items.forEach(item => {
        console.log(item.title);
    });
})();
