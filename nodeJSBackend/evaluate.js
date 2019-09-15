function parseCCmetric(cc_score) {

    if (cc_score <=5) { return 'A'; }
    else if (cc_score <= 10) { return 'B'; }
    else if (cc_score <= 20) { return 'C'; }
    else if (cc_score <= 30) {return 'D';}
    else if (cc_score <= 40) {return 'E';}
    else { return 'F'; }
}

var metricNames = ["difficulty", "effort", "average_mi", "mi_files", "LOC", "LLOC", "Comments", "Average complexity", "hal_metrics", "cc_metrics", "raw_metrics"];
var hal_metrics_prop = ["difficulty", "effort", "bugs"]
var raw_metrics_prop = ["LOC", "LLOC", "Comments"]
var allMetrics = {};
const { exec } = require('child_process');

function parseFileProp(outarr, special_metrics = []) {

    var hal_metrics = {};

    for (i = 0; i < outarr.length; i++) {
        //first line is the link to file
        var listHalProp = {};
        //console.log(outarr[i]);
        if (typeof outarr[i+1] == 'undefined') { continue; }
        //while its not equal '/'
        for (j= i+1; outarr[j][0] != '/'; j++) { //change to some regex thing & for loop

            //console.log(`${outarr[j].split(":")[0]} vs ${special_metrics}`);
            if (typeof outarr[j][0] !== 'undefined' && ( special_metrics.includes(`${outarr[j].split(":")[0].trim()}`) || special_metrics.length == 0 )) {
                var temparr = outarr[j].split(":")
                //console.log(temparr[0]);
                //console.log(temparr);
                temparr[0] = temparr[0].trim();
                listHalProp[temparr[0]] = temparr[1];
            } 

            if (typeof outarr[j+1] == 'undefined') { break; }
            //console.log(j);
        } 

        if (typeof outarr[i] !== 'undefined') { hal_metrics[outarr[i].substring(outarr[i].length, outarr[i].lastIndexOf("/") + 1)] = listHalProp; }
        i = j-1; //move to next, eventually
    }

    return hal_metrics;
}

let execSync1 = (filepath) => {
    return new Promise((resolve, reject) => {
        exec("radon hal " + filepath, (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                return;
            }

            var outarr = stdout.split("\n");


            allMetrics["hal_metrics"] = parseFileProp(outarr, hal_metrics_prop);
            resolve(allMetrics);
           
        });
    });
}

let execSync2 = (filepath) => {
    return new Promise((resolve, reject) => {
        //raw 
        exec("radon raw " + filepath, (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                return;
            }
            var outarr = stdout.split("\n");
            var raw_metrics = parseFileProp(outarr, raw_metrics_prop);
            allMetrics["raw_metrics"] = raw_metrics;
            /*
            for (i = 1; i <= outarr.length; i++) {
                if (typeof outarr[i] !== 'undefined') {
                    var temparr = outarr[i].split(":")
                    temparr[0] = temparr[0].trim();
                    allMetrics[temparr[0]] = temparr[1];
                }
            }*/
            //console.log(allMetrics);
            resolve(allMetrics);
        });
    });
}

//cc
let execSync3 = (filepath) => {
    return new Promise((resolve, reject) => {
        // CC Score
        exec("radon cc " + filepath + " -a -s", (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                return;
            }
            var outarr = stdout.split("\n");
            fileMetricsPerFunc = parseFileProp(outarr.slice(0, outarr.length-3));
            allMetrics["cc_metrics"] = fileMetricsPerFunc;
            //console.log(fileMetricsPerFunc);
            var regExp = /\(([^)]+)\)/;
            const values = Object.values(fileMetricsPerFunc);
            const filesNames = Object.keys(fileMetricsPerFunc);
            var sum = 0;
            //funcArray holds the fileName
            for(const funcArray of filesNames) {


                //console.log(funcArray);
                //values func is value (cc) of each func/class
                //console.log(fileMetricsPerFunc[funcArray]);
                const valuesFunc = Object.values(fileMetricsPerFunc[funcArray]);
                //console.log(valuesFunc);
                for (const functionLine of valuesFunc) {
                    //console.log(functionLine);
                    console.log(regExp.exec(functionLine))
                    sum += parseInt(regExp.exec(functionLine)[1], 10);
                    //console.log(sum);
                }
                //console.log(sum);
                allMetrics["cc_metrics"][funcArray] = parseCCmetric(sum/(Object.keys(funcArray).length));
                sum = 0;

            }
            allMetrics["Average complexity"] = parseCCmetric(regExp.exec(outarr[outarr.length - 2])[1]);
            resolve(allMetrics);
        });
    });
};

let execSync4 = (filepath) => {
    return new Promise((resolve, reject) => {
        exec("radon mi " + filepath, (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                return;
            }
            var outarr = stdout.split("\n");
            var mimetrics = {};
            var sum = 0;
            for (i = 0; i < outarr.length; i++) {
                if (typeof outarr[i][0] !== 'undefined') {
                    var temparr = outarr[i].split(" - ");

                    //w each file
                    mimetrics[temparr[0].substring(temparr[0].length, temparr[0].lastIndexOf("/") + 1)] = temparr[1];

                    switch (temparr[1]) {
                        case 'A':
                            sum += 4;
                            break;
                        case 'B':
                            sum += 3;
                            break;
                        case 'C':
                            sum += 2;
                            break;
                        case 'D':
                            sum += 1
                            break;
                    }

                }
            }

            var average = sum / (outarr.length - 1);
            var letterGrade;

            if (average > 3) { letterGrade = 'A'; }
            else if (average > 2) { letterGrade = 'B'; }
            else if (average > 1) { letterGrade = 'C'; }
            else { letterGrade = 'D' }

            allMetrics["average_mi"] = letterGrade;
            allMetrics["mi_files"] = mimetrics;
            resolve(allMetrics);
            
        });
    });
}

function analyseFolderFiles(filepath) {

    return new Promise ((resolve, reject) => {Promise.all([execSync1(filepath), execSync2(filepath), execSync3(filepath), execSync4(filepath)]).then((allMetrics) => {
        resolve(allMetrics);
    }).catch((err) => {
        console.log("test");
        reject(err);
    })
});

}

 module.exports.analyseFolderFiles = analyseFolderFiles;

