const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

const fs = require('fs');
app.get('/users/:username', function (req, res) {
    fs.readFile('users/' + req.params.username + '.json', (err, data) => {  
        if (err) throw err;
        res.header("Content-Type",'application/json');
        res.send(data);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))