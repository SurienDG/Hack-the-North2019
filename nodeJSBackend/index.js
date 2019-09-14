const express = require('express');
const github_api = require('./interface');
const pie_chart = require('./pie_chart')
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/stats/repolist/:user", (req, res) => {

    user = req.params.user;
    github_api.get(`/users/${user}/repos`)
        .then(function (response) {
            data_back = "";
            JSON.parse(response).forEach(i => {
                data_back += (i["name"]);
                data_back += "<br>";
            });
            data_back += req.path;
            res.send(data_back);
        }).catch(function name(err) {
            console.error(err.message);
        })
});

app.get("/stats/piechart/:user", (req, res) => {
    pie_chart.piechart(req.params.user)
    .then((pie) => {
        res.send((pie))
    }).catch(err => {
        console.error(err.message)
    });
});


app.listen(port, () => console.log(`Listening on port ${port}!`));
