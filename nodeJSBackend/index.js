const express = require('express')
const github_api = require('./interface.js')
const app = express()
const port = 3000
const https = require('https');
const fs = require('fs');

/*
app.get("/stats/composition/:user", async function (req, res) {

    user = req.params.user;
    github_api.get(`/users/${user}/repos`)
        .then(function (response) {
            data_back = ""
            JSON.parse(response).forEach(i => {
                data_back += (i["name"])
                data_back += "<br>"
            });
            data_back += req.path
            res.send(data_back)
        }).catch(function name(err) {
            console.error("Not good")
            console.error(err)
        })
})
*/

app.get("/stats/composition/:owner/:repo/:tree_sha", async function (req, res) {

    owner = req.params.owner;
    repo = req.params.repo;
    tree_sha = req.params.tree_sha

    console.log(owner)
    //path = req.params.path;
    //github_api.get(`/users/${user}/repos`)
    github_api.get(`/repos/${owner}/${repo}/git/trees/${tree_sha}?recursive=1`)
        .then(function (response) {
            var patharray = []
            data_back = ""
            parsed = JSON.parse(response);
            treeparsed =(parsed["tree"])
            const keys = Object.values(treeparsed)
            for (const key of keys) {
                if (key["path"].indexOf(".py") !== -1){
                    filename = key["path"].split("/")
                    filename = filename[filename.length-1]
                    const file = fs.createWriteStream(__dirname+"/downloadedfiles/"+filename);
                    const request = https.get("https://raw.githubusercontent.com/"+owner+"/"+repo+"/master/"+key["path"], function(response) {
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

// This one gets the branch tree Sha which you need to recursively call the tree
app.get("/shabranch/:owner/:repo/:branch", async function (req, res) {
    owner = req.params.owner;
    repo = req.params.repo;
    branch = req.params.branch;
    //path = req.params.path;
    //github_api.get(`/users/${user}/repos`)
    github_api.get(`/repos/${owner}/${repo}/branches/${branch}`)
        .then(function (response) {
            parsed = JSON.parse (response)
            tree_sha = (parsed["commit"]["commit"]["tree"]["sha"])
            console.log(tree_sha)
        }).catch(function name(err) {
            console.error("Not good")
            console.error(err)
        })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))