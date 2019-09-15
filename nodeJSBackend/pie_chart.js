const github_api = require('./interface');
const request = require('request-promise');
const cheerio = require('cheerio');

exports.piechart = function (username) {

    return new Promise((resolve, reject) => {
        github_api.get(`/users/${username}/repos`)
            .then(response => {

                let json = JSON.parse(response);
                let promises = [];

                for (let repo in json) {
                    promises.push(github_api.get(`/repos/${username}/${json[repo]["name"]}/languages`))
                }

                Promise.all(promises).then(values => { 
                    var total = new Proxy({}, {
                        get: (target, name) => name in target ? target[name] : 0
                    })

                    for(let i in values){
                        let json = JSON.parse(values[i]);
                        for(let j in json){
                            total[j] += json[j]
                        }
                    }
                    resolve(total)
                  });
            })
            .catch(function name(err) {
                console.error(err.message);
            })
    });
}

exports.commit = function (username) {
    var options = {
        url: `https://github.com/${username}`,
    };
    
    return new Promise((resolve, reject) => {
        request(options)
        .then(response => {
            var $ = cheerio.load(response);
            var container = $('rect.day')
            var data = [];
    
            for (let i = 0; i < container.length; i++) {
                data.push({date: container[i]["attribs"]["data-date"], value: container[i]["attribs"]["data-count"]})
            }
            
            resolve(data);
        })
        // .catch(err => {
        //     reject(err);
        // })
    })
}