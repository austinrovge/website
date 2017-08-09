const path = require('path');
const favicon = require('serve-favicon');
const express = require('express');
const app = express();

let PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'src')));
app.use(favicon(path.join(__dirname, 'src', '/assets/favicons/favicon.ico')));
// app.use(express.static(path.join(__dirname, 'src/assets')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(PORT, function () {
    console.log('Server listening on port: ' + PORT);
});