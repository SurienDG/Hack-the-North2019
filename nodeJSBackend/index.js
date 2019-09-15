const express = require('express')
const github_api = require('./interface')
const app = express()
const port = 2525
const https = require('https');
const fs = require('fs');
const pie_chart = require('./pie_chart')
const download_repos = require('./download')
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
});

//app.get("/stats/repolist/:user", (req, res) => {


app.get("/download/repolist/:user", async function (req, res) {
    download_repos.download(req.params.user)
    .then((sha_list) => {
        download_repos.downloadtwo(sha_list).then((returnvalue) => {
            res.json(returnvalue);
        }

        );
    }).catch(err => {
        console.error(err.message)
    });
})

app.get("/stats/piechart/:user", (req, res) => {
    pie_chart.piechart(req.params.user)
    .then((pie) => {
        //res.send((pie))
    }).catch(err => {
        console.error(err.message)
    });
});

app.get("/avatar/:user", (req, res) => {
    github_api.get(`/users/${req.params.user}`).then((response) => {
        let responseParse = JSON.parse(response);
        res.json(responseParse.avatar_url);
    }).catch(err => {
       res.json(404, "User doesn't exist") 
    })
});


app.listen(port, () => console.log(`Listening on port ${port}!`));
