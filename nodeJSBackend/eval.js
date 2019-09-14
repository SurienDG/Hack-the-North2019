function evaluate(filepath) {
    const { exec } = require('child_process');

    // hal Metrics

    var halmetrics = {}
    var rawmetrics = {}

    // Hal Metrics
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
        console.log(halmetrics)
        });

    // Raw Metrics
    exec("radon raw " + filepath, (err, stdout, stderr) => {
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
                rawmetrics[temparr[0]] = temparr[1];
            }
        }
        console.log(rawmetrics)
        });

    /*
    // CC Score
    exec("radon cc " + filepath + " -a", (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            return;
        }
        var output = `${stdout}`
        var outarr = output.split ("\n");
        var regExp = /\(([^)]+)\)/;
        var matches = regExp.exec(outarr[outarr.length-2]);
        console.log(matches[1])
        });
    */
    
  }


  var result = evaluate ('/Users/miguelcaringal/Documents/Development/Github_projects/Hack-the-North2019/pythoneval/helloworld.py');
  //console.log(result)

