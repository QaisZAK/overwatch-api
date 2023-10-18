const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let text = 'StreamChatIO - The API for fun stream chat bot interactions!\n';
    res.send(text);
});

const random = require('./data/overwatch/random.json');

app.get('/api/v1/overwatch/random/hero/emoji', (req, res) => {
    let hero = random.heroes[Math.floor(Math.random() * random.heroes.length)];
    let emotes = hero.emotes;
    res.send(emotes);
    console.log(`Sent ${emotes} for ${hero.name}`);
});

app.get('/api/v1/overwatch/random/hero/quote', (req, res) => {
    let hero = random.heroes[Math.floor(Math.random() * random.heroes.length)];
    let quotes = hero.quotes[Math.floor(Math.random() * hero.quotes.length)]
    res.send(quotes);
    console.log(`Sent ${quotes} for ${hero.name}`);
});

app.get('/api/v1/overwatch/random/hero/ability', (req, res) => {
    let hero = random.heroes[Math.floor(Math.random() * random.heroes.length)];
    let abilities = hero.abilities[Math.floor(Math.random() * hero.abilities.length)]
    res.send(abilities);
    console.log(`Sent ${abilities} for ${hero.name}`);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
