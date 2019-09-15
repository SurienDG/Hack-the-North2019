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
        download_repos.downloadtwo(sha_list);
        res.send((sha_list))
    }).catch(err => {
        console.error(err.message)
    });
})

/*
app.get("/download/repolist/:user", async function (req, res) {
    user = req.params.user;
    branch = "master";
    repolist = [];
    sha_list = [];
    github_api.get(`/users/${user}/repos`)
        .then(function (response) {
            JSON.parse(response).forEach(i => {
                repolist.push(i["name"]);
            });
            for (var i = 0; i<= repolist.length; i++){
                github_api.get(`/repos/${user}/${repolist[i]}/branches/${branch}`)
                .then(function (response) {
                    parsed = JSON.parse (response)
                    tree_sha = (parsed["commit"]["commit"]["tree"]["sha"])
                    sha_list.push(tree_sha);
                    console.log(sha_list);
                    //console.log(tree_sha)
                }).catch(function name(err) {
                    console.error(err.message);
                })
            };
            //console.log(sha_list)
            res.send(repolist)
            //console.log(repolist)

        }).catch(function name(err) {
            console.error("Not good")
            console.error(err)
        })
    
})
*/



/*
// Downloads all files from a repository
app.get("/download/allfiles/:user/:repo/:tree_sha", async function (req, res) {

    user = req.params.user;
    repo = req.params.repo;
    tree_sha = req.params.tree_sha
    promise_list = []

    for (i = 0; i<tree_sha.length;i++){
        promise_list.push(github_api.get(`/repos/${user}/${repo}/git/trees/${tree_sha}?recursive=1`))
    }

    console.log(user)
    //path = req.params.path;
    github_api.get(`/repos/${user}/${repo}/git/trees/${tree_sha}?recursive=1`)
        .then(function (response) {
            var patharray = []
            //data_back = ""
            parsed = JSON.parse(response);
            treeparsed =(parsed["tree"])
            const keys = Object.values(treeparsed)
            for (const key of keys) {
                if (key["path"].indexOf(".py") !== -1){
                    filename = key["path"].split("/")
                    filename = filename[filename.length-1]
                    const file = fs.createWriteStream(__dirname+"/downloadedfiles/"+filename);
                    const request = https.get("https://raw.githubusercontent.com/"+user+"/"+repo+"/master/"+key["path"], function(response) {
                    response.pipe(file);
                    });
                }
                console.log(key["path"])
                patharray.push(key["path"])
            }
            res.send(keys)
        }).catch(function name(err) {
            console.error("Not good")
            console.error(err)
        })
})
*/


/*
// gets tree_sha
app.get("/shabranch/:user/:repo/:branch", async function (req, res) {
    user = req.params.user;
    repo = req.params.repo;
    github_api.get(`/repos/${user}/${repo}/branches/${branch}`)
        .then(function (response) {
            parsed = JSON.parse (response)
            tree_sha = (parsed["commit"]["commit"]["tree"]["sha"])
            console.log(tree_sha)
        }).catch(function name(err) {
            console.error(err.message);
        })
});
*/

app.get("/stats/piechart/:user", (req, res) => {
    pie_chart.piechart(req.params.user)
    .then((pie) => {
        res.send((pie))
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
