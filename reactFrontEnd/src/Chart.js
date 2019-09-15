import React, { PureComponent } from 'react';
import $ from 'jquery';
import {
  PieChart, Pie, Legend, Tooltip, Cell
} from 'recharts';

const COLORS = ['#dd44a8', '#3a87c1', '#454fbc', '#992f2f', '#c13a43', '#bc7745', '#bcc65d', '#44ddc6', '#2f6499', '#9c5dc6'];

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
    return (
      <PieChart width={600} height={600}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={this.state.data}
          cx={400}
          cy={400}
          outerRadius={180}
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