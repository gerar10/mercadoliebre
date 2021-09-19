const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve('./views/home.html'));
});

app.get('/login', (req,res) => {
    res.sendFile(path.resolve('./views/login.html'));
});

app.get('/register', (req,res) => {
    res.sendFile(path.resolve('./views/register.html'));
});

app.listen(8080, () => console.log ('servidor en puerto 8080'));
