var fs = require('fs');
var path = require('path');
var d3 = require('d3');
const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;

var chartWidth = 500, chartHeight = 500;

var arc = d3.svg.arc()
    .outerRadius(chartWidth / 2 - 10)
    .innerRadius(0);

var colours = ['#F00', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000'];
function go(pieData, outputLocation) {
    if(!pieData) pieData = [12, 31];
    if(!outputLocation) outputLocation = path.join(__dirname, './test.svg');
    const dom = new JSDOM("");

    dom.window.d3 = d3.select(dom.window.document); //get d3 into the dom

    //do yr normal d3 stuff
    var svg = dom.window.d3.select('body')
        .append('div').attr('class', 'container') //make a container div to ease the saving process
        .append('svg')
        .attr({
            xmlns: 'http://www.w3.org/2000/svg',
            width: chartWidth,
            height: chartHeight
        })
        .append('g')
        .attr('transform', 'translate(' + chartWidth / 2 + ',' + chartWidth / 2 + ')');

    svg.selectAll('.arc')
        .data(d3.layout.pie()(pieData))
        .enter()
        .append('path')
        .attr({
            'class': 'arc',
            'd': arc,
            'fill': function(d, i) {
                return colours[i];
            },
            'stroke': '#fff'
        });

    fs.writeFileSync(outputLocation, dom.window.d3.select('.container').html()) //using sync to keep the code simple


}

go()