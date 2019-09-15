const github_api = require('./interface');
const fs = require('fs');
const https = require('https');
let evaluate = require ('./evaluate')
var metricNames = ["difficulty", "effort", "average_mi", "mi_files", "LOC", "LLOC", "Comments", "Average complexity", "hal_metrics", "cc_metrics", "raw_metrics"];
var hal_metrics_prop = ["difficulty", "effort", "bugs"]
var raw_metrics_prop = ["LOC", "LLOC", "Comments"]
var allMetrics = {};
const fsExtra = require('fs-extra')

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
            evaluate.analyseFolderFiles(__dirname+"/downloadedfiles").then((usefulMetrics) =>{
                //console.log(usefulMetrics[usefulMetrics.length-1]); //allMetrics will actually have allMetrics as in each version (have to make diff for each~)
                let finalMetrics = usefulMetrics[usefulMetrics.length-1];
                var sendMetrics = {}
                for(var tag in finalMetrics) {
                    if (metricNames.includes(tag)) {
                        sendMetrics[tag] = finalMetrics[tag];
                    }
                }
                console.log("final metrics is...");
                console.log(sendMetrics);
                fsExtra.emptyDirSync(__dirname+"/downloadedfiles")
                
            
             }).catch((err) => {
                 console.log("gtest");
             });
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