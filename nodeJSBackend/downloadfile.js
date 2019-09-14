const express = require('express')
const github_api = require('./interface.js')
const app = express()
const port = 3000

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
            res.send(data_back  )
        }).catch(function name(err) {
            console.error("Not good")
            console.error(err)
        })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))