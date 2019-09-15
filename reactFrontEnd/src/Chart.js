import React, { PureComponent } from 'react';
import $ from 'jquery';
import {
  PieChart, Pie, Legend, Tooltip, Cell
} from 'recharts';

const COLORS = ['#dd44a8', '#3a87c1', '#454fbc', '#992f2f', '#c13a43', '#bc7745', '#bcc65d', '#44ddc6', '#2f6499', '#9c5dc6'];

const dataaa = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];

export default class Chart extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      data: [], name: "haoy2001"
    };
  }

  componentDidMount() {
    this.setState((state) => {
      let data = state.data;
      $.getJSON(`http://localhost:2525/stats/piechart/${state.name}`, (json) => {
        for (const key in json) {
          data.push({ name: key, value: json[key] });
        }
        data = data.sort((a, b) => (a.value > b.value) ? 1 : -1)
        // console.log(data)
        this.setState(data);
      });
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <PieChart width={1920} height={800}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={this.state.data.slice(0, 9)}
          cx={810}
          cy={400}
          outerRadius={300}
          fill="#8884d8"
          >
          {
            this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip formatter={function (a) {
          return a;
        }}/>
      </PieChart>
    );
  }
}