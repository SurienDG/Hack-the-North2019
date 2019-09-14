const request = require('request-promise');
require('dotenv').config()

exports.get = function (url) {

    var options = {
        url: "https://api.github.com" + url,
        headers: {
            'User-Agent': 'haoy2001'
        },
        // Hao's github credientials for higher rate limits
        qs: {
            client_id: process.env.client_id,
            client_secret: process.env.client_secret
        }
    };
    
    return new Promise((resolve, reject) => {
        request(options)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            })
    });
}