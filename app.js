const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index.ejs');
})

app.listen(3000, function() {
    console.log("El servidor está corriendo en el puerto 3000")
})