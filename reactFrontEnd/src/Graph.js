// // import React, { PureComponent } from 'react';
// // import $ from 'jquery';
// // import {
// //     LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// // } from 'recharts';


// // export default class Chart extends PureComponent {

// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             data: [], name: "haoy2001"
// //         };
// //     }

// //     componentDidMount() {
// //         this.setState((state) => {
// //             let data = state.data;
// //             $.getJSON(`http://localhost:2525/stats/commits/${state.name}`, (json) => {
// //                 for (const key in json) {
// //                     data.push({ name: key, value: json[key] });
// //                 }
// //                 data = data.sort((a, b) => (a.value > b.value) ? 1 : -1)
// //                 console.log(data)
// //                 this.setState(data);
// //             });
// //         })
// //     }

// //     render() {
// //         return (
// //             <LineChart width={300} height={100} data={this.state.data.slice(0, 1)}>
// //                 <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
// //             </LineChart>
// //         );
// //     }
// // }

// import React, { PureComponent } from 'react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';

// // const data = [
// //   {
// //     name: 'Page A', Commits: 4000, pv: 2400, amt: 2400,
// //   },
// //   {
// //     name: 'Page B', Commits: 3000, pv: 1398, amt: 2210,
// //   },
// //   {
// //     name: 'Page C', Commits: 2000, pv: 9800, amt: 2290,
// //   },
// //   {
// //     name: 'Page D', Commits: 2780, pv: 3908, amt: 2000,
// //   },
// //   {
// //     name: 'Page E', Commits: 1890, pv: 4800, amt: 2181,
// //   },
// //   {
// //     name: 'Page F', Commits: 2390, pv: 3800, amt: 2500,
// //   },
// //   {
// //     name: 'Page G', Commits: 3490, pv: 4300, amt: 2100,
// //   },
// // ];

// const data = [{"name":"2018-09-16","Commits":"9"},{"name":"2018-09-17","Commits":"0"},{"name":"2018-09-18","Commits":"0"},{"name":"2018-09-19","Commits":"0"},{"name":"2018-09-20","Commits":"0"},{"name":"2018-09-21","Commits":"0"},{"name":"2018-09-22","Commits":"0"},{"name":"2018-09-23","Commits":"1"},{"name":"2018-09-24","Commits":"4"},{"name":"2018-09-25","Commits":"0"},{"name":"2018-09-26","Commits":"0"},{"name":"2018-09-27","Commits":"0"},{"name":"2018-09-28","Commits":"0"},{"name":"2018-09-29","Commits":"0"},{"name":"2018-09-30","Commits":"0"},{"name":"2018-10-01","Commits":"3"},{"name":"2018-10-02","Commits":"0"},{"name":"2018-10-03","Commits":"0"},{"name":"2018-10-04","Commits":"0"},{"name":"2018-10-05","Commits":"4"},{"name":"2018-10-06","Commits":"0"},{"name":"2018-10-07","Commits":"0"},{"name":"2018-10-08","Commits":"0"},{"name":"2018-10-09","Commits":"5"},{"name":"2018-10-10","Commits":"0"},{"name":"2018-10-11","Commits":"0"},{"name":"2018-10-12","Commits":"0"},{"name":"2018-10-13","Commits":"46"},{"name":"2018-10-14","Commits":"7"},{"name":"2018-10-15","Commits":"0"},{"name":"2018-10-16","Commits":"3"},{"name":"2018-10-17","Commits":"0"},{"name":"2018-10-18","Commits":"0"},{"name":"2018-10-19","Commits":"0"},{"name":"2018-10-20","Commits":"0"},{"name":"2018-10-21","Commits":"9"},{"name":"2018-10-22","Commits":"2"},{"name":"2018-10-23","Commits":"0"},{"name":"2018-10-24","Commits":"0"},{"name":"2018-10-25","Commits":"0"},{"name":"2018-10-26","Commits":"0"},{"name":"2018-10-27","Commits":"0"},{"name":"2018-10-28","Commits":"3"},{"name":"2018-10-29","Commits":"0"},{"name":"2018-10-30","Commits":"0"},{"name":"2018-10-31","Commits":"1"},{"name":"2018-11-01","Commits":"0"},{"name":"2018-11-02","Commits":"2"},{"name":"2018-11-03","Commits":"41"},{"name":"2018-11-04","Commits":"9"},{"name":"2018-11-05","Commits":"0"},{"name":"2018-11-06","Commits":"0"},{"name":"2018-11-07","Commits":"0"},{"name":"2018-11-08","Commits":"0"},{"name":"2018-11-09","Commits":"0"},{"name":"2018-11-10","Commits":"0"},{"name":"2018-11-11","Commits":"0"},{"name":"2018-11-12","Commits":"1"},{"name":"2018-11-13","Commits":"0"},{"name":"2018-11-14","Commits":"0"},{"name":"2018-11-15","Commits":"0"},{"name":"2018-11-16","Commits":"0"},{"name":"2018-11-17","Commits":"0"},{"name":"2018-11-18","Commits":"0"},{"name":"2018-11-19","Commits":"0"},{"name":"2018-11-20","Commits":"0"},{"name":"2018-11-21","Commits":"0"},{"name":"2018-11-22","Commits":"0"},{"name":"2018-11-23","Commits":"0"},{"name":"2018-11-24","Commits":"0"},{"name":"2018-11-25","Commits":"1"},{"name":"2018-11-26","Commits":"0"},{"name":"2018-11-27","Commits":"0"},{"name":"2018-11-28","Commits":"0"},{"name":"2018-11-29","Commits":"0"},{"name":"2018-11-30","Commits":"0"},{"name":"2018-12-01","Commits":"0"},{"name":"2018-12-02","Commits":"0"},{"name":"2018-12-03","Commits":"0"},{"name":"2018-12-04","Commits":"0"},{"name":"2018-12-05","Commits":"0"},{"name":"2018-12-06","Commits":"0"},{"name":"2018-12-07","Commits":"0"},{"name":"2018-12-08","Commits":"7"},{"name":"2018-12-09","Commits":"20"},{"name":"2018-12-10","Commits":"0"},{"name":"2018-12-11","Commits":"0"},{"name":"2018-12-12","Commits":"0"},{"name":"2018-12-13","Commits":"0"},{"name":"2018-12-14","Commits":"0"},{"name":"2018-12-15","Commits":"0"},{"name":"2018-12-16","Commits":"0"},{"name":"2018-12-17","Commits":"4"},{"name":"2018-12-18","Commits":"0"},{"name":"2018-12-19","Commits":"5"},{"name":"2018-12-20","Commits":"1"},{"name":"2018-12-21","Commits":"0"},{"name":"2018-12-22","Commits":"0"},{"name":"2018-12-23","Commits":"0"},{"name":"2018-12-24","Commits":"0"},{"name":"2018-12-25","Commits":"0"},{"name":"2018-12-26","Commits":"0"},{"name":"2018-12-27","Commits":"1"},{"name":"2018-12-28","Commits":"2"},{"name":"2018-12-29","Commits":"0"},{"name":"2018-12-30","Commits":"0"},{"name":"2018-12-31","Commits":"0"},{"name":"2019-01-01","Commits":"0"},{"name":"2019-01-02","Commits":"0"},{"name":"2019-01-03","Commits":"0"},{"name":"2019-01-04","Commits":"4"},{"name":"2019-01-05","Commits":"0"},{"name":"2019-01-06","Commits":"0"},{"name":"2019-01-07","Commits":"0"},{"name":"2019-01-08","Commits":"0"},{"name":"2019-01-09","Commits":"0"},{"name":"2019-01-10","Commits":"0"},{"name":"2019-01-11","Commits":"0"},{"name":"2019-01-12","Commits":"0"},{"name":"2019-01-13","Commits":"0"},{"name":"2019-01-14","Commits":"2"},{"name":"2019-01-15","Commits":"0"},{"name":"2019-01-16","Commits":"0"},{"name":"2019-01-17","Commits":"0"},{"name":"2019-01-18","Commits":"0"},{"name":"2019-01-19","Commits":"0"},{"name":"2019-01-20","Commits":"1"},{"name":"2019-01-21","Commits":"0"},{"name":"2019-01-22","Commits":"0"},{"name":"2019-01-23","Commits":"0"},{"name":"2019-01-24","Commits":"0"},{"name":"2019-01-25","Commits":"0"},{"name":"2019-01-26","Commits":"0"},{"name":"2019-01-27","Commits":"0"},{"name":"2019-01-28","Commits":"0"},{"name":"2019-01-29","Commits":"0"},{"name":"2019-01-30","Commits":"0"},{"name":"2019-01-31","Commits":"0"},{"name":"2019-02-01","Commits":"0"},{"name":"2019-02-02","Commits":"0"},{"name":"2019-02-03","Commits":"0"},{"name":"2019-02-04","Commits":"0"},{"name":"2019-02-05","Commits":"0"},{"name":"2019-02-06","Commits":"1"},{"name":"2019-02-07","Commits":"3"},{"name":"2019-02-08","Commits":"0"},{"name":"2019-02-09","Commits":"0"},{"name":"2019-02-10","Commits":"0"},{"name":"2019-02-11","Commits":"0"},{"name":"2019-02-12","Commits":"0"},{"name":"2019-02-13","Commits":"0"},{"name":"2019-02-14","Commits":"0"},{"name":"2019-02-15","Commits":"0"},{"name":"2019-02-16","Commits":"0"},{"name":"2019-02-17","Commits":"0"},{"name":"2019-02-18","Commits":"0"},{"name":"2019-02-19","Commits":"0"},{"name":"2019-02-20","Commits":"0"},{"name":"2019-02-21","Commits":"0"},{"name":"2019-02-22","Commits":"0"},{"name":"2019-02-23","Commits":"0"},{"name":"2019-02-24","Commits":"0"},{"name":"2019-02-25","Commits":"0"},{"name":"2019-02-26","Commits":"0"},{"name":"2019-02-27","Commits":"0"},{"name":"2019-02-28","Commits":"0"},{"name":"2019-03-01","Commits":"0"},{"name":"2019-03-02","Commits":"0"},{"name":"2019-03-03","Commits":"0"},{"name":"2019-03-04","Commits":"0"},{"name":"2019-03-05","Commits":"0"},{"name":"2019-03-06","Commits":"0"},{"name":"2019-03-07","Commits":"0"},{"name":"2019-03-08","Commits":"0"},{"name":"2019-03-09","Commits":"0"},{"name":"2019-03-10","Commits":"0"},{"name":"2019-03-11","Commits":"0"},{"name":"2019-03-12","Commits":"0"},{"name":"2019-03-13","Commits":"0"},{"name":"2019-03-14","Commits":"0"},{"name":"2019-03-15","Commits":"0"},{"name":"2019-03-16","Commits":"0"},{"name":"2019-03-17","Commits":"0"},{"name":"2019-03-18","Commits":"0"},{"name":"2019-03-19","Commits":"0"},{"name":"2019-03-20","Commits":"0"},{"name":"2019-03-21","Commits":"0"},{"name":"2019-03-22","Commits":"0"},{"name":"2019-03-23","Commits":"0"},{"name":"2019-03-24","Commits":"0"},{"name":"2019-03-25","Commits":"0"},{"name":"2019-03-26","Commits":"0"},{"name":"2019-03-27","Commits":"0"},{"name":"2019-03-28","Commits":"0"},{"name":"2019-03-29","Commits":"0"},{"name":"2019-03-30","Commits":"0"},{"name":"2019-03-31","Commits":"0"},{"name":"2019-04-01","Commits":"0"},{"name":"2019-04-02","Commits":"0"},{"name":"2019-04-03","Commits":"0"},{"name":"2019-04-04","Commits":"0"},{"name":"2019-04-05","Commits":"0"},{"name":"2019-04-06","Commits":"0"},{"name":"2019-04-07","Commits":"0"},{"name":"2019-04-08","Commits":"0"},{"name":"2019-04-09","Commits":"0"},{"name":"2019-04-10","Commits":"0"},{"name":"2019-04-11","Commits":"0"},{"name":"2019-04-12","Commits":"0"},{"name":"2019-04-13","Commits":"0"},{"name":"2019-04-14","Commits":"0"},{"name":"2019-04-15","Commits":"0"},{"name":"2019-04-16","Commits":"0"},{"name":"2019-04-17","Commits":"0"},{"name":"2019-04-18","Commits":"0"},{"name":"2019-04-19","Commits":"0"},{"name":"2019-04-20","Commits":"0"},{"name":"2019-04-21","Commits":"0"},{"name":"2019-04-22","Commits":"0"},{"name":"2019-04-23","Commits":"0"},{"name":"2019-04-24","Commits":"0"},{"name":"2019-04-25","Commits":"0"},{"name":"2019-04-26","Commits":"0"},{"name":"2019-04-27","Commits":"0"},{"name":"2019-04-28","Commits":"0"},{"name":"2019-04-29","Commits":"0"},{"name":"2019-04-30","Commits":"0"},{"name":"2019-05-01","Commits":"0"},{"name":"2019-05-02","Commits":"0"},{"name":"2019-05-03","Commits":"0"},{"name":"2019-05-04","Commits":"6"},{"name":"2019-05-05","Commits":"17"},{"name":"2019-05-06","Commits":"2"},{"name":"2019-05-07","Commits":"4"},{"name":"2019-05-08","Commits":"0"},{"name":"2019-05-09","Commits":"0"},{"name":"2019-05-10","Commits":"0"},{"name":"2019-05-11","Commits":"0"},{"name":"2019-05-12","Commits":"0"},{"name":"2019-05-13","Commits":"0"},{"name":"2019-05-14","Commits":"3"},{"name":"2019-05-15","Commits":"0"},{"name":"2019-05-16","Commits":"0"},{"name":"2019-05-17","Commits":"0"},{"name":"2019-05-18","Commits":"0"},{"name":"2019-05-19","Commits":"0"},{"name":"2019-05-20","Commits":"1"},{"name":"2019-05-21","Commits":"0"},{"name":"2019-05-22","Commits":"0"},{"name":"2019-05-23","Commits":"0"},{"name":"2019-05-24","Commits":"0"},{"name":"2019-05-25","Commits":"0"},{"name":"2019-05-26","Commits":"0"},{"name":"2019-05-27","Commits":"0"},{"name":"2019-05-28","Commits":"0"},{"name":"2019-05-29","Commits":"0"},{"name":"2019-05-30","Commits":"0"},{"name":"2019-05-31","Commits":"0"},{"name":"2019-06-01","Commits":"0"},{"name":"2019-06-02","Commits":"0"},{"name":"2019-06-03","Commits":"0"},{"name":"2019-06-04","Commits":"0"},{"name":"2019-06-05","Commits":"0"},{"name":"2019-06-06","Commits":"0"},{"name":"2019-06-07","Commits":"0"},{"name":"2019-06-08","Commits":"0"},{"name":"2019-06-09","Commits":"0"},{"name":"2019-06-10","Commits":"0"},{"name":"2019-06-11","Commits":"0"},{"name":"2019-06-12","Commits":"0"},{"name":"2019-06-13","Commits":"0"},{"name":"2019-06-14","Commits":"0"},{"name":"2019-06-15","Commits":"0"},{"name":"2019-06-16","Commits":"0"},{"name":"2019-06-17","Commits":"0"},{"name":"2019-06-18","Commits":"2"},{"name":"2019-06-19","Commits":"0"},{"name":"2019-06-20","Commits":"1"},{"name":"2019-06-21","Commits":"0"},{"name":"2019-06-22","Commits":"4"},{"name":"2019-06-23","Commits":"3"},{"name":"2019-06-24","Commits":"0"},{"name":"2019-06-25","Commits":"0"},{"name":"2019-06-26","Commits":"0"},{"name":"2019-06-27","Commits":"0"},{"name":"2019-06-28","Commits":"0"},{"name":"2019-06-29","Commits":"0"},{"name":"2019-06-30","Commits":"0"},{"name":"2019-07-01","Commits":"0"},{"name":"2019-07-02","Commits":"0"},{"name":"2019-07-03","Commits":"0"},{"name":"2019-07-04","Commits":"0"},{"name":"2019-07-05","Commits":"0"},{"name":"2019-07-06","Commits":"0"},{"name":"2019-07-07","Commits":"0"},{"name":"2019-07-08","Commits":"0"},{"name":"2019-07-09","Commits":"0"},{"name":"2019-07-10","Commits":"0"},{"name":"2019-07-11","Commits":"0"},{"name":"2019-07-12","Commits":"0"},{"name":"2019-07-13","Commits":"0"},{"name":"2019-07-14","Commits":"0"},{"name":"2019-07-15","Commits":"0"},{"name":"2019-07-16","Commits":"0"},{"name":"2019-07-17","Commits":"0"},{"name":"2019-07-18","Commits":"0"},{"name":"2019-07-19","Commits":"1"},{"name":"2019-07-20","Commits":"1"},{"name":"2019-07-21","Commits":"0"},{"name":"2019-07-22","Commits":"0"},{"name":"2019-07-23","Commits":"0"},{"name":"2019-07-24","Commits":"0"},{"name":"2019-07-25","Commits":"0"},{"name":"2019-07-26","Commits":"0"},{"name":"2019-07-27","Commits":"0"},{"name":"2019-07-28","Commits":"0"},{"name":"2019-07-29","Commits":"0"},{"name":"2019-07-30","Commits":"0"},{"name":"2019-07-31","Commits":"0"},{"name":"2019-08-01","Commits":"0"},{"name":"2019-08-02","Commits":"0"},{"name":"2019-08-03","Commits":"0"},{"name":"2019-08-04","Commits":"0"},{"name":"2019-08-05","Commits":"0"},{"name":"2019-08-06","Commits":"0"},{"name":"2019-08-07","Commits":"0"},{"name":"2019-08-08","Commits":"0"},{"name":"2019-08-09","Commits":"0"},{"name":"2019-08-10","Commits":"0"},{"name":"2019-08-11","Commits":"0"},{"name":"2019-08-12","Commits":"0"},{"name":"2019-08-13","Commits":"0"},{"name":"2019-08-14","Commits":"0"},{"name":"2019-08-15","Commits":"0"},{"name":"2019-08-16","Commits":"0"},{"name":"2019-08-17","Commits":"0"},{"name":"2019-08-18","Commits":"0"},{"name":"2019-08-19","Commits":"0"},{"name":"2019-08-20","Commits":"0"},{"name":"2019-08-21","Commits":"0"},{"name":"2019-08-22","Commits":"0"},{"name":"2019-08-23","Commits":"0"},{"name":"2019-08-24","Commits":"0"},{"name":"2019-08-25","Commits":"0"},{"name":"2019-08-26","Commits":"0"},{"name":"2019-08-27","Commits":"0"},{"name":"2019-08-28","Commits":"0"},{"name":"2019-08-29","Commits":"0"},{"name":"2019-08-30","Commits":"0"},{"name":"2019-08-31","Commits":"0"},{"name":"2019-09-01","Commits":"0"},{"name":"2019-09-02","Commits":"0"},{"name":"2019-09-03","Commits":"0"},{"name":"2019-09-04","Commits":"0"},{"name":"2019-09-05","Commits":"0"},{"name":"2019-09-06","Commits":"0"},{"name":"2019-09-07","Commits":"0"},{"name":"2019-09-08","Commits":"0"},{"name":"2019-09-09","Commits":"0"},{"name":"2019-09-10","Commits":"0"},{"name":"2019-09-11","Commits":"0"},{"name":"2019-09-12","Commits":"0"},{"name":"2019-09-13","Commits":"2"},{"name":"2019-09-14","Commits":"15"},{"name":"2019-09-15","Commits":"3"}]

// export default class Graph extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

//   render() {
//     return (
//       <LineChart
//         width={1400}
//         height={300}
//         data={data}
//         margin={{
//           top: 5, right: 30, left: 20, bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="Commits" stroke="#8884d8"/>
//       </LineChart>
//     );
//   }
// }

import React, { PureComponent } from 'react';
import {
  Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea,
} from 'recharts';

const data = [
  { name: 1, cost: 4.11, impression: 100 },
  { name: 2, cost: 2.39, impression: 120 },
  { name: 3, cost: 1.37, impression: 150 },
  { name: 4, cost: 1.16, impression: 180 },
  { name: 5, cost: 2.29, impression: 200 },
  { name: 6, cost: 3, impression: 499 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 2.52, impression: 100 },
  { name: 9, cost: 1.79, impression: 200 },
  { name: 10, cost: 2.94, impression: 222 },
  { name: 11, cost: 4.3, impression: 210 },
  { name: 12, cost: 4.41, impression: 300 },
  { name: 13, cost: 2.1, impression: 50 },
  { name: 14, cost: 8, impression: 190 },
  { name: 15, cost: 0, impression: 300 },
  { name: 16, cost: 9, impression: 400 },
  { name: 17, cost: 3, impression: 200 },
  { name: 18, cost: 2, impression: 50 },
  { name: 19, cost: 3, impression: 100 },
  { name: 20, cost: 7, impression: 100 },
];

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = data.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
  data,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  top2: 'dataMax+20',
  bottom2: 'dataMin-20',
  animation: true,
};

export default class Graph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nhpemhgs/';

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  zoom() {
    let { refAreaLeft, refAreaRight, data } = this.state;

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      this.setState(() => ({
        refAreaLeft: '',
        refAreaRight: '',
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
    const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'impression', 50);

    this.setState(() => ({
      refAreaLeft: '',
      refAreaRight: '',
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2,
    }));
  }

  zoomOut() {
    const { data } = this.state;
    this.setState(() => ({
      data: data.slice(),
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
      top: 'dataMax+1',
      bottom: 'dataMin',
      top2: 'dataMax+50',
      bottom: 'dataMin+50',
    }));
  }

  render() {
    const {
      data, barIndex, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2,
    } = this.state;

    return (
      <div className="highlight-bar-charts" style={{ userSelect: 'none' }}>
        <button
          href="javascript: void(0);"
          className="btn update"
          onClick={this.zoomOut.bind(this)}
        >
          Zoom Out

        </button>

        <LineChart
          width={1600}
          height={555}
          data={data}
          onMouseDown={e => this.setState({ refAreaLeft: e.activeLabel })}
          onMouseMove={e => this.state.refAreaLeft && this.setState({ refAreaRight: e.activeLabel })}
          onMouseUp={this.zoom.bind(this)}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            allowDataOverflow
            dataKey="name"
            domain={[left, right]}
            type="number"
          />
          <YAxis
            allowDataOverflow
            domain={[bottom, top]}
            type="number"
            yAxisId="1"
          />
          <YAxis
            orientation="right"
            allowDataOverflow
            domain={[bottom2, top2]}
            type="number"
            yAxisId="2"
          />
          <Tooltip />
          <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
          <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} />

          {
            (refAreaLeft && refAreaRight) ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />) : null
            }
        </LineChart>

      </div>
    );
  }
}

