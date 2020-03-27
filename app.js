var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(anfrage,antwort){
    antwort.send('Hello from the serve side!');    
});

app.listen(80);

console.log(`Server running, listening on port: 80`);
