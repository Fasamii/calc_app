import express from 'express';
import fs from 'fs';

const hostname = "192.168.1.13";
const port = 3000;
const app = express();

let requestCount = 0;


app.use(express.static('public'));
app.get('/', (req, res) => {
    requestCount++;
    console.log('--------- request from : '+req.ip+' - request number : '+requestCount);
    fs.readFile('index.html', 'utf8', (err, text) => {
        res.send(text);
    });
});

app.listen(port, hostname, () => {
    console.info('listening at - '+hostname+' : '+port)
})