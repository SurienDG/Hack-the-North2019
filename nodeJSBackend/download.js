const github_api = require('./interface');
const fs = require('fs');
const https = require('https');

exports.download = function (username) {
    return new Promise((resolve, reject) => {
        branch = "master";
        repolist = [];
        sha_list = [];
        console.log("once") 
        github_api.get(`/users/${username}/repos`)
            .then(function (response) {
                promise_list = []
                JSON.parse(response).forEach(i => {
                    repolist.push(i["name"]);
                });
                for (var i = 0; i< repolist.length; i++){
                    promise_list.push(github_api.get(`/repos/${username}/${repolist[i]}/branches/${branch}`))
                };
                //console.log("EDA")
                // Promise.resolve(promise_list[0]).then(function (out) {
                //     console.log(out)
                //     console.log("first")
                    
                // })
                Promise.all(promise_list).then(values => {
                for (var i = 0; i< values.length;i++){
                    parsed = JSON.parse (values[i])
                    tree_sha = (parsed["commit"]["commit"]["tree"]["sha"])
                    sha_list.push(tree_sha);
                } 
                console.log(sha_list)
                let returnobject = {}
                returnobject.sha_list = sha_list;
                returnobject.repolist = repolist;
                returnobject.username = username;
                resolve(returnobject);
                }).catch(function name(err) {
                    console.error(err.message);
                })

                //console.log(promise_list)
                //console.log(sha_list)
                //console.log(repolist)
            }).catch(function name(err) {
                console.error("Not good")
                console.error(err)
            })
        });
}

exports.downloadtwo = function (currobj) {
    return new Promise((resolve, reject) => {
        let sha_list = currobj.sha_list
        let repolist = currobj.repolist
        let username = currobj.username

        promise_list = []

        for (i = 0; i<sha_list.length;i++){
            promise_list.push(github_api.get(`/repos/${username}/${repolist[i]}/git/trees/${sha_list[i]}?recursive=1`))
        }

        Promise.all(promise_list).then(values => {
            for (var i = 0; i< values.length;i++){
                parsed = JSON.parse(values[i]);
                treeparsed =(parsed["tree"])
                const keys = Object.values(treeparsed)
                //console.log(keys)
                console.log(values[i])
                for (const key of keys) {
                    if (key["path"].indexOf(".py") !== -1){
                        filename = key["path"].split("/")
                        filename = filename[filename.length-1]
                        const file = fs.createWriteStream(__dirname+"/downloadedfiles/"+filename);
                        const request = https.get("https://raw.githubusercontent.com/"+username+"/"+repolist[i]+"/master/"+key["path"], function(response) {
                        response.pipe(file);
                        });
                    }
                //console.log(key["path"])
                //patharray.push(key["path"])
            }
            } 
            //console.log(sha_list)
            let returnobject = {}
            returnobject.sha_list = sha_list;
            returnobject.repolist = repolist;
            returnobject.username = username;
            resolve(returnobject);
            }).catch(function name(err) {
                console.error(err.message);
            })
        });
}