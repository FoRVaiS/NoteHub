const express = require('express');
const ejs = require('ejs');
const path = require('path');

const createServer = (port, address = '0.0.0.0') => {
    const app = express();

    const publicFolder = path.join(__dirname, '..', 'public');

    app.use('/assets', express.static(path.join(__dirname, '..', 'public', 'assets')));
    app.set('view engine', ejs.renderFile);
    app.set('views', publicFolder);

    app.get('/', (req, res) => {
        res.render('pages/main.ejs');
    });

    app.get('/notes/:course/:topic/:document', (req, res) => {
        res.render('pages/notepage.ejs');
    });

    app.listen(port, address, err => {
        if (err) throw err;

        console.log(`Web server started on ${address} on port ${port}.`);
    })
}

module.exports = { createServer };
