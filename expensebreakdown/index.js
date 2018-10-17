const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helper = require('./helper');
const port = 3000;
let path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));
app.use("styles.css", express.static(__dirname + '/styles'));
app.use("/scripts", express.static(__dirname + '/scripts'));

//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/breakdown', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/breakdown.html'));
});

app.post('/submitExp', async (req, res) => {
   try {
       res.status(200).json(await helper.createBreakdown(req.body));
   } catch (err) {
       console.log(err);
       res.sendStatus(500);
   }
});

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;