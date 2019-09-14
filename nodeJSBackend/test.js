// Hal Metrics

filepath = "/Users/miguelcaringal/Documents/Development/Github_projects/Hack-the-North2019/pythoneval/helloworld.py"

const exec = require('child_process').spawnSync;
var halmetrics = {}

exec("radon hal " + filepath, (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        return;
    }
    var output = `${stdout}`
    var outarr = output.split ("\n");

    for (i = 1; i<= outarr.length; i++){
        if (typeof outarr[i] !== 'undefined'){
            var temparr = outarr[i].split(":")
            temparr[0] = temparr[0].trim();
            halmetrics[temparr[0]] = temparr[1];
        }
    }
    //console.log(halmetrics)
    });

//console.log(typeof(something))
//console.log(something.stdout)

//console.log(halmetrics)

console.log(halmetrics)